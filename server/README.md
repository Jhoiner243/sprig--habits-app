# Sprig Server

API REST para **Sprig**, una aplicación de seguimiento de hábitos con sistema de niveles de energía e integración con IA.

## Tech Stack

- **NestJS 11** - Framework backend
- **Prisma** - ORM con PostgreSQL
- **Redis** - Sistema de caché
- **Groq SDK** - Integración con IA para reflexiones
- **Swagger** - Documentación de API

## Estructura del Proyecto

```
src/
├── ai/              # Integración con IA (Groq)
├── habits/          # CRUD de hábitos + rachas
├── habit-logs/      # Registro de completaciones
├── milestones/      # Sistema de hitos
├── reflections/     # Reflexiones con respuestas IA
├── users/           # Gestión de usuarios
├── cache/           # Módulo de caché
├── common/          # Utilidades compartidas (Redis, base repository)
└── prisma/          # Configuración de Prisma
```

## Modelo de Datos

### Niveles de Energía

| Nivel    | Emoji | Descripción                     |
|----------|-------|--------------------------------|
| `SEED`   | 🌱    | Mínimo - Para días caóticos    |
| `SPROUT` | 🌿    | Medio - Objetivo estándar      |
| `FOREST` | 🌲    | Ideal - Control total del día  |

### Entidades Principales

- **User** - Usuarios de la aplicación
- **Habit** - Hábitos con duración por nivel de energía
- **HabitLog** - Registro de completaciones con nivel y duración
- **Milestone** - Hitos basados en tiempo acumulado
- **Reflection** - Reflexiones post-hábito con respuesta IA

## Instalación

```bash
# Instalar dependencias
pnpm install

# Generar cliente de Prisma
pnpm prisma:generate

# Ejecutar migraciones
pnpm prisma:migrate
```

## Variables de Entorno

Crea un archivo `.env` en la raíz:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/sprig"
REDIS_URL="redis://localhost:6379"
GROQ_API_KEY="tu-api-key"
```

## Scripts

```bash
# Desarrollo
pnpm start:dev

# Producción
pnpm build
pnpm start:prod

# Tests
pnpm test
pnpm test:e2e
pnpm test:cov

# Prisma
pnpm prisma:generate   # Generar cliente
pnpm prisma:migrate    # Ejecutar migraciones
pnpm prisma:studio     # UI de base de datos

# Calidad de código
pnpm lint
pnpm format
```

## API Endpoints

| Recurso       | Método | Endpoint              | Descripción                |
|---------------|--------|-----------------------|---------------------------|
| Users         | CRUD   | `/users`              | Gestión de usuarios       |
| Habits        | CRUD   | `/habits`             | Gestión de hábitos        |
| Habit Logs    | CRUD   | `/habit-logs`         | Registro de completaciones|
| Milestones    | CRUD   | `/milestones`         | Sistema de hitos          |
| Reflections   | CRUD   | `/reflections`        | Reflexiones con IA        |
| AI            | POST   | `/ai`                 | Generación de contenido IA|

> La documentación completa de la API está disponible en `/api` cuando el servidor está corriendo (Swagger UI).
