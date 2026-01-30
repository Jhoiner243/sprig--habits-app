# Docker + Prisma + Redis Setup Guide

This project now includes a complete setup with PostgreSQL, Redis, Prisma ORM, and NestJS caching.

## 🚀 Quick Start

### 1. Start the Database Services

Make sure Docker Desktop is running, then execute:

```bash
docker-compose up -d
```

This will start:

- PostgreSQL on port 5432
- Redis on port 6379

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Initialize Database

```bash
# Generate Prisma client
pnpm run prisma:generate

# Run database migrations
pnpm run prisma:migrate
```

### 4. Start the Application

```bash
pnpm run start:dev
```

## 📁 Project Structure

```
server/
├── docker-compose.yml          # Docker services configuration
├── .env                       # Environment variables
├── .dockerignore              # Docker ignore file
├── prisma/
│   ├── schema.prisma          # Prisma schema definition
│   ├── prisma.config.ts       # Prisma configuration
│   └── migrations/            # Database migrations
├── src/
│   ├── prisma/
│   │   ├── prisma.service.ts  # Prisma database service
│   │   └── prisma.module.ts   # Prisma module
│   ├── cache/
│   │   └── cache.module.ts    # Redis cache module
│   └── habits/
│       ├── habits.service.ts   # Updated service with Prisma + Redis
│       └── dto/
│           └── create-habit.dto.ts # DTO with validation
└── package.json              # Updated with Prisma scripts
```

## 🔧 Available Scripts

### Development

- `pnpm run start:dev` - Start with hot reload
- `pnpm run start:debug` - Start with debugging

### Prisma

- `pnpm run prisma:generate` - Generate Prisma client
- `pnpm run prisma:migrate` - Create and apply migrations
- `pnpm run prisma:deploy` - Deploy migrations (production)
- `pnpm run prisma:studio` - Open Prisma Studio GUI

### Code Quality

- `pnpm run build` - Build the application
- `pnpm run format` - Format code with Prettier
- `pnpm run lint` - Run ESLint with auto-fix

### Testing

- `pnpm run test` - Run unit tests
- `pnpm run test:watch` - Run tests in watch mode
- `pnpm run test:cov` - Run tests with coverage

## 🗄️ Database Configuration

### PostgreSQL

- **Host**: localhost
- **Port**: 5432
- **Database**: sprig_db
- **User**: sprig_user
- **Password**: change_this_secure_password (update in .env)

### Redis

- **Host**: localhost
- **Port**: 6379

## 🏗️ Architecture

### Hybrid System

The implementation maintains backward compatibility by supporting both the original entity system and the new Prisma-based system:

- **Legacy Methods**: `findAllLegacy()` - uses original entity structure
- **New Methods**: `findAll()`, `findOne()`, `create()`, `update()`, `remove()` - use Prisma + Redis

### Caching Strategy

- Cache keys: `habits_all`, `habit_{id}`
- TTL: 5 minutes (300 seconds)
- Automatic cache invalidation on create/update/delete operations

### Prisma Models

```typescript
model Habit {
  id          Int      @id @default(autoincrement())
  title       String
  description String?
  completed   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@map("habits")
}
```

## 🛠️ Development Workflow

### Adding New Models

1. Update `prisma/schema.prisma`
2. Run `pnpm run prisma:generate`
3. Run `pnpm run prisma:migrate`
4. Update services accordingly

### Working with Cache

```typescript
// Get from cache or database
const cacheKey = 'my_key';
let data = await this.cacheManager.get(cacheKey);

if (!data) {
  data = await this.prisma.myModel.findMany();
  await this.cacheManager.set(cacheKey, data, 300);
}

// Invalidate cache on changes
await this.cacheManager.del('my_key');
```

## 🔒 Security Notes

1. **Database Password**: Change `POSTGRES_PASSWORD` in `.env` for production
2. **Environment Variables**: Never commit `.env` file to version control
3. **Docker**: Use Docker secrets for sensitive data in production

## 🐳 Docker Commands

```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Restart services
docker-compose restart

# Access PostgreSQL
docker exec -it sprig_postgres psql -U sprig_user -d sprig_db

# Access Redis
docker exec -it sprig_redis redis-cli
```

## 🚨 Troubleshooting

### Docker Issues

- Ensure Docker Desktop is running
- Check if ports 5432 and 6379 are available
- Run `docker-compose ps` to check container status

### Database Connection

- Verify `.env` configuration
- Check if PostgreSQL container is healthy
- Run migrations: `pnpm run prisma:migrate`

### Prisma Issues

- Regenerate client: `pnpm run prisma:generate`
- Check schema validity: Open `prisma/schema.prisma`
- Use Prisma Studio: `pnpm run prisma:studio`

### Build Errors

- Run `pnpm install` to update dependencies
- Check TypeScript configuration
- Run `pnpm run lint` to catch syntax errors

## 📈 Next Steps

1. **Seed Database**: Create `prisma/seed.ts` for initial data
2. **Redis Configuration**: Set up Redis cluster for production
3. **Database Backups**: Implement backup strategies
4. **Monitoring**: Add health checks and metrics
5. **Testing**: Add integration tests for database operations

## 📚 Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [NestJS Caching](https://docs.nestjs.com/techniques/caching)
- [Docker Compose](https://docs.docker.com/compose/)
- [Redis Cache](https://redis.io/documentation)
