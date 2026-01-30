# AGENTS.md

This file contains essential information for agentic coding agents working in this NestJS repository.

pnpm run start:dev          # Start development server with watch mode
pnpm run start:debug        # Start with debug mode and watch
pnpm run build              # Build the application
pnpm run format             # Format code with prettier

### Linting

```bash
pnpm run lint               # Run ESLint with auto-fix

### Testing

```bash
pnpm run test               # Run all unit tests
pnpm run test:watch         # Run tests in watch mode
pnpm run test:cov           # Run tests with coverage
pnpm run test:e2e           # Run end-to-end tests

#### Running a Single Test

```bash
# Run a specific test file
npm test -- path/to/test.spec.ts

# Run a specific test in watch mode
npm run test:watch -- path/to/test.spec.ts

# Run tests with a specific pattern
npm test -- --testNamePattern="specific test name"
```

## Code Style Guidelines

### General Structure

- This is a NestJS application using TypeScript
- Follow standard NestJS patterns: controllers, services, modules, DTOs, and entities
- Use dependency injection with `injects.decorators.ts` decorators custom 
- Organize code by feature modules (e.g., `habits/`)

### Import Conventions

```typescript
// External libraries first
import { Module } from '@nestjs/common';
import * as request from 'supertest';

// Internal imports next, grouped by feature
import { CreateHabitDto } from './dto/create-habit.dto';
import { HabitsService } from './habits.service';
import { VersionConstant } from '../common/version-constant';
```

### TypeScript Configuration

- Target: ES2023
- Strict null checks: enabled
- No implicit any: disabled (allow `any` type)
- Decorators enabled for NestJS features
- Output directory: `./dist`

### Naming Conventions

- **Files**: kebab-case (`habits.controller.ts`, `create-habit.dto.ts`)
- **Classes**: PascalCase (`HabitsController`, `CreateHabitDto`)
- **Methods/Variables**: camelCase (`findAll()`, `createHabitDto`)
- **Constants**: UPPER_SNAKE_CASE for constants, PascalCase for classes with static properties

### ESLint Rules

Key custom rules (beyond TypeScript recommended):

```javascript
{
  '@typescript-eslint/no-explicit-any': 'off',          // Any types allowed
  '@typescript-eslint/no-floating-promises': 'warn',   // Unhandled promises warn
  '@typescript-eslint/no-unsafe-argument': 'warn'      // Unsafe arguments warn
}
```

### Testing Patterns

- Use Jest for unit tests (`.spec.ts` files in `src/`)
- Use Jest with Supertest for e2e tests (in `test/` directory)
- Test files follow pattern: `*.spec.ts`
- E2E test configuration: `./test/jest-e2e.json`

### DTO and Entity Patterns

- Use class-validator decorators for validation in DTOs
- Use class-transformer for data transformation
- Entities represent data models
- DTOs define input/output contracts

### Error Handling

- Use NestJS built-in exception filters
- Return consistent error responses
- Use appropriate HTTP status codes

### File Organization

```
src/
├── common/           # Shared utilities and constants
├── habits/           # Feature module example
│   ├── dto/         # Data Transfer Objects
│   ├── entities/    # Data entities
│   ├── repositories/ # Data access layer
│   ├── *.module.ts  # Module definition
│   ├── *.controller.ts # HTTP controllers
│   └── *.service.ts     # Business logic
├── app.module.ts     # Root module
└── main.ts          # Application entry point
```

### API Versioning

- Use version constants from `src/common/version-constant.ts`
- Controllers should use versioned paths

## Development Workflow

1. Always run `pnpm run lint` after code changes
2. Run tests with `pnpm run test` before committing
3. Use `pnpm run start:dev` for development
4. Format code with `pnpm run format` before commits
5. Build with `pnpm run build` to verify compilation

## Testing Requirements

- Unit tests should be co-located with source files (`*.spec.ts`)
- E2E tests go in the `test/` directory
- Aim for meaningful test coverage using `npm run test:cov`
- Test files follow Jest configuration in package.json
