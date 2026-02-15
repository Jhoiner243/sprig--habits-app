import { Injectable, Logger } from '@nestjs/common';
import { Groq } from 'groq-sdk';
import { ReflectionsService } from '../reflections/reflections.service';
import { HabitsService } from '../habits/habits.service';
import {
  GenerateMotivationDto,
  SuggestScheduleDto,
  SuggestLevelDto,
} from './dto/ai-requests.dto';

@Injectable()
export class AiService {
  private readonly logger = new Logger(AiService.name);
  private readonly groq;

  constructor(
    private readonly reflectionsService: ReflectionsService,
    private readonly habitsService: HabitsService,
  ) {
    this.groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });
  }

  /**
   * Generate motivational messages based on past reflections
   */
  async generateMotivation(dto: GenerateMotivationDto) {
    try {
      // Get user's past reflections to understand patterns
      const pastReflections =
        await this.reflectionsService.getUserReflectionPatterns(dto.userId, 5);

      const prompt = this.buildMotivationPrompt(dto, pastReflections);

      const completion = await this.groq.chat.completions.create({
        model: 'llama3-8b-8192',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 200,
        temperature: 0.7,
      });

      const text = completion.choices[0]?.message?.content || '';

      return {
        message: text,
        type: 'motivation',
        personalized: pastReflections.length > 0,
      };
    } catch (error) {
      this.logger.error('Error generating motivation:', error);
      throw error;
    }
  }

  /**
   * Suggest optimal schedule based on completion patterns
   */
  async suggestSchedule(dto: SuggestScheduleDto) {
    try {
      const habit = await this.habitsService.findOne(dto.habitId);
      const habitLogs = await (this.habitsService as any).findByHabit(
        dto.habitId,
      );

      const prompt = this.buildSchedulePrompt(dto, habit, habitLogs);

      const completion = await this.groq.chat.completions.create({
        model: 'llama3-8b-8192',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 300,
        temperature: 0.5,
      });

      const text = completion.choices[0]?.message?.content || '';

      return {
        suggestions: this.parseScheduleSuggestions(text),
        reasoning: text,
      };
    } catch (error) {
      this.logger.error('Error generating schedule suggestions:', error);
      throw error;
    }
  }

  /**
   * Suggest habit level based on day context and user patterns
   */
  async suggestLevel(dto: SuggestLevelDto) {
    try {
      const habit = await this.habitsService.findOne(dto.habitId);
      const recentLogs = await (this.habitsService as any).findByHabit(
        dto.habitId,
      );

      const prompt = this.buildLevelPrompt(dto, habit, recentLogs);

      const completion = await this.groq.chat.completions.create({
        model: 'llama3-8b-8192',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 150,
        temperature: 0.3,
      });

      const text = completion.choices[0]?.message?.content || '';

      const suggestedLevel = this.parseLevelSuggestion(text);

      return {
        level: suggestedLevel,
        reasoning: text,
        confidence: this.calculateConfidence(suggestedLevel, recentLogs),
      };
    } catch (error) {
      this.logger.error('Error generating level suggestions:', error);
      throw error;
    }
  }

  /**
   * Analyze progress and provide insights
   */
  async analyzeProgress(userId: string, habitId?: string) {
    try {
      const progress = habitId
        ? await this.habitsService.getProgress(habitId)
        : await this.habitsService.findByUser(userId);

      const prompt = this.buildProgressAnalysisPrompt(progress, userId);

      const completion = await this.groq.chat.completions.create({
        model: 'llama3-8b-8192',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 400,
        temperature: 0.4,
      });

      const text = completion.choices[0]?.message?.content || '';

      return {
        insights: this.parseProgressInsights(text),
        recommendations: text,
      };
    } catch (error) {
      this.logger.error('Error analyzing progress:', error);
      throw error;
    }
  }

  // ========== PRIVATE HELPER METHODS ==========

  private buildMotivationPrompt(
    dto: GenerateMotivationDto,
    reflections: any[],
  ): string {
    const context =
      reflections.length > 0
        ? `Based on your past reflections, you've mentioned feelings like: ${reflections.map((r) => r.feeling).join(', ')}.`
        : '';

    return `
You are a motivational coach for habit building. The user needs encouragement.

User context: ${context}
Current feeling: ${dto.feeling || 'Not specified'}
Context: ${dto.context || 'General habit completion'}

Generate a brief, personalized motivational message that:
1. Acknowledges their current feeling
2. References their past positive experiences if available
3. Encourages them without guilt
4. Is under 100 words
5. Uses a supportive, non-judgmental tone

The message should be inspiring and action-oriented.
    `.trim();
  }

  private buildSchedulePrompt(
    dto: SuggestScheduleDto,
    habit: any,
    logs: any[],
  ): string {
    const completionTimes = logs.map((log) => log.completedAt).slice(0, 10);

    return `
You are a productivity coach specializing in habit scheduling. Help optimize this habit's schedule.

Habit details:
- Name: ${habit?.title || 'Unknown'}
- Current schedule: ${dto.currentSchedule || 'Not set'}
- Duration: Seed(${habit?.seedDuration}min), Sprout(${habit?.sproutDuration}min), Forest(${habit?.forestDuration}min)
- Recent completion times: ${completionTimes.join(', ')}

User constraints: ${dto.constraints || 'None specified'}

Analyze the completion patterns and suggest 2-3 optimal time slots. Consider:
1. When the user has completed this habit successfully before
2. Energy levels throughout the day
3. The user's stated constraints
4. The habit's duration requirements

Provide specific time recommendations (e.g., "7:30 AM - 7:45 AM") with reasoning.
    `.trim();
  }

  private buildLevelPrompt(
    dto: SuggestLevelDto,
    habit: any,
    logs: any[],
  ): string {
    const recentLevels = logs.slice(0, 5).map((log) => log.completedLevel);
    const completionFrequency = this.calculateCompletionFrequency(logs);

    return `
You are an adaptive habit coach helping users choose the right energy level for their habits.

Habit: ${habit?.title || 'Unknown'}
Available levels: Seed (${habit?.seedDuration}min), Sprout (${habit?.sproutDuration}min), Forest (${habit?.forestDuration}min)
Recent completions: ${recentLevels.join(', ')}
Completion frequency: ${completionFrequency}

Day context: ${dto.dayContext || 'Regular day'}
Current energy: ${dto.energyLevel || 'Not specified'}
Time available: ${dto.timeAvailable || 'Not specified'}

Recommend ONE level (SEED, SPROUT, or FOREST) for today. Consider:
1. User's recent completion patterns
2. Today's context and energy
3. Time constraints
4. The goal of maintaining consistency

Respond with just the level name, followed by brief reasoning.
    `.trim();
  }

  private buildProgressAnalysisPrompt(progress: any, userId: string): string {
    return `
You are an analytics coach for habit building. Analyze this progress data and provide actionable insights.

Progress data: ${JSON.stringify(progress, null, 2)}

Focus on:
1. Completion patterns and trends
2. Progress toward milestones
3. Areas of improvement
4. Positive momentum to celebrate

Provide 2-3 specific, actionable recommendations and highlight what's going well.
Keep it encouraging and data-driven.
    `.trim();
  }

  private parseScheduleSuggestions(text: string): any[] {
    // Simple parsing logic - in production, use more sophisticated parsing
    const lines = text.split('\n').filter((line) => line.trim());
    return lines.map((line) => ({
      time: line.trim(),
      confidence: 0.8, // Default confidence
    }));
  }

  private parseLevelSuggestion(text: string): string {
    const levels = ['SEED', 'SPROUT', 'FOREST'];
    for (const level of levels) {
      if (text.toUpperCase().includes(level)) {
        return level;
      }
    }
    return 'SPROUT'; // Default fallback
  }

  private calculateConfidence(level: string, logs: any[]): number {
    // Simple confidence calculation based on recent patterns
    if (!logs.length) return 0.5;

    const recentLevels = logs.slice(0, 5).map((log) => log.completedLevel);
    const levelMatches = recentLevels.filter((l) => l === level).length;

    return Math.min(0.9, 0.5 + (levelMatches / recentLevels.length) * 0.4);
  }

  private calculateCompletionFrequency(logs: any[]): string {
    if (!logs.length) return 'No completions';

    const lastWeek = logs.filter((log) => {
      const logDate = new Date(log.completedAt);
      const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      return logDate >= weekAgo;
    });

    if (lastWeek.length >= 6) return 'Daily';
    if (lastWeek.length >= 3) return 'Frequent';
    if (lastWeek.length >= 1) return 'Occasional';
    return 'Infrequent';
  }

  private parseProgressInsights(text: string): any[] {
    // Parse insights from AI response
    const insights: any[] = [];
    const lines = text.split('\n').filter((line) => line.trim());

    for (const line of lines) {
      if (
        line.includes('recommend') ||
        line.includes('suggest') ||
        line.includes('try')
      ) {
        insights.push({
          type: 'recommendation',
          content: line.trim(),
        });
      } else if (line.includes('progress') || line.includes('improvement')) {
        insights.push({
          type: 'observation',
          content: line.trim(),
        });
      }
    }

    return insights;
  }
}
