import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../prisma/generated/client';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
  log: ['error', 'warn'],
});

async function main() {
  console.log('🌱 Starting database seed...');

  // Create test user
  const user = await (prisma as any).user.create({
    data: {
      email: 'test@example.com',
      name: 'Test User',
    },
  });
  console.log('✅ Created user:', user.name);

  // Create milestones
  const meditationMilestone = await (prisma as any).milestone.create({
    data: {
      title: 'Mindfulness Master',
      description: 'Complete 1000 minutes of meditation',
      type: 'TIME_DURATION',
      target: 1000,
      current: 0,
      unit: 'minutes',
    },
  });

  const exerciseMilestone = await (prisma as any).milestone.create({
    data: {
      title: 'Fitness Champion',
      description: 'Complete 500 minutes of exercise',
      type: 'TIME_DURATION',
      target: 500,
      current: 0,
      unit: 'minutes',
    },
  });

  const readingMilestone = await (prisma as any).milestone.create({
    data: {
      title: 'Knowledge Seeker',
      description: 'Complete 2000 minutes of reading',
      type: 'TIME_DURATION',
      target: 2000,
      current: 0,
      unit: 'minutes',
    },
  });

  console.log('✅ Created milestones');

  // Create habits with energy levels
  const meditationHabit = await (prisma as any).habit.create({
    data: {
      title: 'Meditación Matutina',
      description: 'Comienza el día con mindfulness y claridad mental',
      userId: user.id,
      seedDuration: 5, // 🌱 5 minutes minimum
      sproutDuration: 10, // 🌿 10 minutes standard
      forestDuration: 20, // 🌲 20 minutes ideal
      scheduledTime: '07:00',
      frequency: 'DAILY',
      isActive: true,
    },
  });

  const exerciseHabit = await (prisma as any).habit.create({
    data: {
      title: 'Ejercicio Físico',
      description: 'Mueve tu cuerpo para mantener energía y salud',
      userId: user.id,
      seedDuration: 15, // 🌱 15 minutes minimum
      sproutDuration: 30, // 🌿 30 minutes standard
      forestDuration: 45, // 🌲 45 minutes ideal
      scheduledTime: '18:00',
      frequency: 'DAILY',
      isActive: true,
    },
  });

  const readingHabit = await (prisma as any).habit.create({
    data: {
      title: 'Lectura Personal',
      description: 'Alimenta tu mente con conocimientos nuevos',
      userId: user.id,
      seedDuration: 10, // 🌱 10 minutes minimum
      sproutDuration: 20, // 🌿 20 minutes standard
      forestDuration: 40, // 🌲 40 minutes ideal
      scheduledTime: '21:00',
      frequency: 'DAILY',
      isActive: true,
    },
  });

  const journalingHabit = await (prisma as any).habit.create({
    data: {
      title: 'Journaling Reflexivo',
      description: 'Escribe tus pensamientos y emociones',
      userId: user.id,
      seedDuration: 5, // 🌱 5 minutes minimum
      sproutDuration: 10, // 🌿 10 minutes standard
      forestDuration: 20, // 🌲 20 minutes ideal
      scheduledTime: '22:00',
      frequency: 'DAILY',
      isActive: true,
    },
  });

  console.log('✅ Created habits with energy levels');

  // Associate habits with milestones
  await (prisma as any).habitMilestone.createMany({
    data: [
      { habitId: meditationHabit.id, milestoneId: meditationMilestone.id },
      { habitId: exerciseHabit.id, milestoneId: exerciseMilestone.id },
      { habitId: readingHabit.id, milestoneId: readingMilestone.id },
    ],
  });

  console.log('✅ Associated habits with milestones');

  // Create sample habit logs with different energy levels
  const now = new Date();
  const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const twoDaysAgo = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);

  const habitLogs = [
    // Meditation logs
    {
      habitId: meditationHabit.id,
      userId: user.id,
      completedAt: twoDaysAgo,
      completedLevel: 'SEED',
      actualDuration: 5,
      notes: 'Día ocupado, pero logré meditar unos minutos',
    },
    {
      habitId: meditationHabit.id,
      userId: user.id,
      completedAt: yesterday,
      completedLevel: 'SPROUT',
      actualDuration: 12,
      notes: 'Buena sesión de mindfulness',
    },
    {
      habitId: meditationHabit.id,
      userId: user.id,
      completedAt: now,
      completedLevel: 'FOREST',
      actualDuration: 22,
      notes: 'Sesión profunda, muy enfocado',
    },

    // Exercise logs
    {
      habitId: exerciseHabit.id,
      userId: user.id,
      completedAt: twoDaysAgo,
      completedLevel: 'SPROUT',
      actualDuration: 28,
      notes: 'Buena rutina de cardio',
    },
    {
      habitId: exerciseHabit.id,
      userId: user.id,
      completedAt: yesterday,
      completedLevel: 'SEED',
      actualDuration: 15,
      notes: 'Día pesado, solo puse hacer estiramientos',
    },

    // Reading logs
    {
      habitId: readingHabit.id,
      userId: user.id,
      completedAt: yesterday,
      completedLevel: 'SPROUT',
      actualDuration: 25,
      notes: 'Leyendo sobre productividad',
    },

    // Journaling logs
    {
      habitId: journalingHabit.id,
      userId: user.id,
      completedAt: twoDaysAgo,
      completedLevel: 'SEED',
      actualDuration: 6,
      notes: 'Unas pocas líneas antes de dormir',
    },
  ];

  const createdLogs = await (prisma as any).habitLog.createMany({
    data: habitLogs,
  });

  console.log('✅ Created habit logs:', createdLogs.count);

  // Get log IDs for reflections
  const meditationLog = await (prisma as any).habitLog.findFirst({
    where: { habitId: meditationHabit.id, completedAt: yesterday },
  });
  const exerciseLog = await (prisma as any).habitLog.findFirst({
    where: { habitId: exerciseHabit.id, completedAt: yesterday },
  });

  // Create reflections for some logs
  const reflections = [
    {
      habitId: meditationHabit.id,
      habitLogId: meditationLog.id,
      userId: user.id,
      feeling: 'Con calma y enfocado',
      mood: 4,
      notes: 'La meditación realmente me ayuda a empezar el día con claridad',
      aiResponse:
        '¡Excelente! Mantener esa calma matutina es clave para un día productivo.',
      suggestion:
        'Prueba agregar respiración profunda para amplificar los beneficios',
    },
    {
      habitId: exerciseHabit.id,
      habitLogId: exerciseLog.id,
      userId: user.id,
      feeling: 'Cansado pero satisfecho',
      mood: 3,
      notes: 'Aunque tenía poca energía, me moví y me siento mejor',
      aiResponse:
        '¡Gran actitud! Escuchar tu cuerpo y aún así actuar es poderoso.',
      suggestion: 'En días de baja energía, considera yoga suave o caminatas',
    },
  ];

  await (prisma as any).reflection.createMany({
    data: reflections,
  });

  console.log('✅ Created reflections');

  // Update some milestone progress
  await (prisma as any).milestone.update({
    where: { id: meditationMilestone.id },
    data: { current: 37 }, // 5 + 10 + 22 minutes
  });

  await (prisma as any).milestone.update({
    where: { id: exerciseMilestone.id },
    data: { current: 43 }, // 28 + 15 minutes
  });

  await (prisma as any).milestone.update({
    where: { id: readingMilestone.id },
    data: { current: 25 }, // 25 minutes
  });

  console.log('✅ Updated milestone progress');

  console.log('\n🎉 Database seed completed successfully!');
  console.log('\n📊 Summary:');
  console.log(`   • 1 user: ${user.name}`);
  console.log(`   • 3 milestones created`);
  console.log(`   • 4 habits with energy levels`);
  console.log(
    `   • ${createdLogs.count} habit logs with varied completion levels`,
  );
  console.log(`   • 2 reflections with AI insights`);
  console.log('\n🚀 You can now test the API with adaptive habit management!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
