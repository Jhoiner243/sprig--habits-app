
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Habit
 * 
 */
export type Habit = $Result.DefaultSelection<Prisma.$HabitPayload>
/**
 * Model HabitLog
 * 
 */
export type HabitLog = $Result.DefaultSelection<Prisma.$HabitLogPayload>
/**
 * Model Milestone
 * 
 */
export type Milestone = $Result.DefaultSelection<Prisma.$MilestonePayload>
/**
 * Model HabitMilestone
 * 
 */
export type HabitMilestone = $Result.DefaultSelection<Prisma.$HabitMilestonePayload>
/**
 * Model Reflection
 * 
 */
export type Reflection = $Result.DefaultSelection<Prisma.$ReflectionPayload>
/**
 * Model HabitCompletion
 * 
 */
export type HabitCompletion = $Result.DefaultSelection<Prisma.$HabitCompletionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EnergyLevel: {
  SEED: 'SEED',
  SPROUT: 'SPROUT',
  FOREST: 'FOREST'
};

export type EnergyLevel = (typeof EnergyLevel)[keyof typeof EnergyLevel]


export const Frequency: {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY',
  CUSTOM: 'CUSTOM'
};

export type Frequency = (typeof Frequency)[keyof typeof Frequency]


export const MilestoneType: {
  TIME_DURATION: 'TIME_DURATION'
};

export type MilestoneType = (typeof MilestoneType)[keyof typeof MilestoneType]

}

export type EnergyLevel = $Enums.EnergyLevel

export const EnergyLevel: typeof $Enums.EnergyLevel

export type Frequency = $Enums.Frequency

export const Frequency: typeof $Enums.Frequency

export type MilestoneType = $Enums.MilestoneType

export const MilestoneType: typeof $Enums.MilestoneType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habit`: Exposes CRUD operations for the **Habit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habits
    * const habits = await prisma.habit.findMany()
    * ```
    */
  get habit(): Prisma.HabitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habitLog`: Exposes CRUD operations for the **HabitLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HabitLogs
    * const habitLogs = await prisma.habitLog.findMany()
    * ```
    */
  get habitLog(): Prisma.HabitLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.milestone`: Exposes CRUD operations for the **Milestone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Milestones
    * const milestones = await prisma.milestone.findMany()
    * ```
    */
  get milestone(): Prisma.MilestoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habitMilestone`: Exposes CRUD operations for the **HabitMilestone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HabitMilestones
    * const habitMilestones = await prisma.habitMilestone.findMany()
    * ```
    */
  get habitMilestone(): Prisma.HabitMilestoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reflection`: Exposes CRUD operations for the **Reflection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reflections
    * const reflections = await prisma.reflection.findMany()
    * ```
    */
  get reflection(): Prisma.ReflectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habitCompletion`: Exposes CRUD operations for the **HabitCompletion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HabitCompletions
    * const habitCompletions = await prisma.habitCompletion.findMany()
    * ```
    */
  get habitCompletion(): Prisma.HabitCompletionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Habit: 'Habit',
    HabitLog: 'HabitLog',
    Milestone: 'Milestone',
    HabitMilestone: 'HabitMilestone',
    Reflection: 'Reflection',
    HabitCompletion: 'HabitCompletion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "habit" | "habitLog" | "milestone" | "habitMilestone" | "reflection" | "habitCompletion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Habit: {
        payload: Prisma.$HabitPayload<ExtArgs>
        fields: Prisma.HabitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findFirst: {
            args: Prisma.HabitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findMany: {
            args: Prisma.HabitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          create: {
            args: Prisma.HabitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          createMany: {
            args: Prisma.HabitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          delete: {
            args: Prisma.HabitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          update: {
            args: Prisma.HabitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          deleteMany: {
            args: Prisma.HabitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HabitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          upsert: {
            args: Prisma.HabitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          aggregate: {
            args: Prisma.HabitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabit>
          }
          groupBy: {
            args: Prisma.HabitGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitCountArgs<ExtArgs>
            result: $Utils.Optional<HabitCountAggregateOutputType> | number
          }
        }
      }
      HabitLog: {
        payload: Prisma.$HabitLogPayload<ExtArgs>
        fields: Prisma.HabitLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          findFirst: {
            args: Prisma.HabitLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          findMany: {
            args: Prisma.HabitLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>[]
          }
          create: {
            args: Prisma.HabitLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          createMany: {
            args: Prisma.HabitLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>[]
          }
          delete: {
            args: Prisma.HabitLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          update: {
            args: Prisma.HabitLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          deleteMany: {
            args: Prisma.HabitLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HabitLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>[]
          }
          upsert: {
            args: Prisma.HabitLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          aggregate: {
            args: Prisma.HabitLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabitLog>
          }
          groupBy: {
            args: Prisma.HabitLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitLogCountArgs<ExtArgs>
            result: $Utils.Optional<HabitLogCountAggregateOutputType> | number
          }
        }
      }
      Milestone: {
        payload: Prisma.$MilestonePayload<ExtArgs>
        fields: Prisma.MilestoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MilestoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MilestoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          findFirst: {
            args: Prisma.MilestoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MilestoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          findMany: {
            args: Prisma.MilestoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          create: {
            args: Prisma.MilestoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          createMany: {
            args: Prisma.MilestoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MilestoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          delete: {
            args: Prisma.MilestoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          update: {
            args: Prisma.MilestoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          deleteMany: {
            args: Prisma.MilestoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MilestoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MilestoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          upsert: {
            args: Prisma.MilestoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          aggregate: {
            args: Prisma.MilestoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMilestone>
          }
          groupBy: {
            args: Prisma.MilestoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<MilestoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.MilestoneCountArgs<ExtArgs>
            result: $Utils.Optional<MilestoneCountAggregateOutputType> | number
          }
        }
      }
      HabitMilestone: {
        payload: Prisma.$HabitMilestonePayload<ExtArgs>
        fields: Prisma.HabitMilestoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitMilestoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitMilestonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitMilestoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitMilestonePayload>
          }
          findFirst: {
            args: Prisma.HabitMilestoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitMilestonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitMilestoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitMilestonePayload>
          }
          findMany: {
            args: Prisma.HabitMilestoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitMilestonePayload>[]
          }
          create: {
            args: Prisma.HabitMilestoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitMilestonePayload>
          }
          createMany: {
            args: Prisma.HabitMilestoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitMilestoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitMilestonePayload>[]
          }
          delete: {
            args: Prisma.HabitMilestoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitMilestonePayload>
          }
          update: {
            args: Prisma.HabitMilestoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitMilestonePayload>
          }
          deleteMany: {
            args: Prisma.HabitMilestoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitMilestoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HabitMilestoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitMilestonePayload>[]
          }
          upsert: {
            args: Prisma.HabitMilestoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitMilestonePayload>
          }
          aggregate: {
            args: Prisma.HabitMilestoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabitMilestone>
          }
          groupBy: {
            args: Prisma.HabitMilestoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitMilestoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitMilestoneCountArgs<ExtArgs>
            result: $Utils.Optional<HabitMilestoneCountAggregateOutputType> | number
          }
        }
      }
      Reflection: {
        payload: Prisma.$ReflectionPayload<ExtArgs>
        fields: Prisma.ReflectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReflectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReflectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>
          }
          findFirst: {
            args: Prisma.ReflectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReflectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>
          }
          findMany: {
            args: Prisma.ReflectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>[]
          }
          create: {
            args: Prisma.ReflectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>
          }
          createMany: {
            args: Prisma.ReflectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReflectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>[]
          }
          delete: {
            args: Prisma.ReflectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>
          }
          update: {
            args: Prisma.ReflectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>
          }
          deleteMany: {
            args: Prisma.ReflectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReflectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReflectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>[]
          }
          upsert: {
            args: Prisma.ReflectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReflectionPayload>
          }
          aggregate: {
            args: Prisma.ReflectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReflection>
          }
          groupBy: {
            args: Prisma.ReflectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReflectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReflectionCountArgs<ExtArgs>
            result: $Utils.Optional<ReflectionCountAggregateOutputType> | number
          }
        }
      }
      HabitCompletion: {
        payload: Prisma.$HabitCompletionPayload<ExtArgs>
        fields: Prisma.HabitCompletionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitCompletionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitCompletionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitCompletionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitCompletionPayload>
          }
          findFirst: {
            args: Prisma.HabitCompletionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitCompletionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitCompletionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitCompletionPayload>
          }
          findMany: {
            args: Prisma.HabitCompletionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitCompletionPayload>[]
          }
          create: {
            args: Prisma.HabitCompletionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitCompletionPayload>
          }
          createMany: {
            args: Prisma.HabitCompletionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitCompletionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitCompletionPayload>[]
          }
          delete: {
            args: Prisma.HabitCompletionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitCompletionPayload>
          }
          update: {
            args: Prisma.HabitCompletionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitCompletionPayload>
          }
          deleteMany: {
            args: Prisma.HabitCompletionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitCompletionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HabitCompletionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitCompletionPayload>[]
          }
          upsert: {
            args: Prisma.HabitCompletionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitCompletionPayload>
          }
          aggregate: {
            args: Prisma.HabitCompletionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabitCompletion>
          }
          groupBy: {
            args: Prisma.HabitCompletionGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitCompletionGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitCompletionCountArgs<ExtArgs>
            result: $Utils.Optional<HabitCompletionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    habit?: HabitOmit
    habitLog?: HabitLogOmit
    milestone?: MilestoneOmit
    habitMilestone?: HabitMilestoneOmit
    reflection?: ReflectionOmit
    habitCompletion?: HabitCompletionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    habits: number
    habitLogs: number
    reflections: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habits?: boolean | UserCountOutputTypeCountHabitsArgs
    habitLogs?: boolean | UserCountOutputTypeCountHabitLogsArgs
    reflections?: boolean | UserCountOutputTypeCountReflectionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHabitLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReflectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReflectionWhereInput
  }


  /**
   * Count Type HabitCountOutputType
   */

  export type HabitCountOutputType = {
    habitLogs: number
    milestones: number
    reflections: number
    completions: number
  }

  export type HabitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habitLogs?: boolean | HabitCountOutputTypeCountHabitLogsArgs
    milestones?: boolean | HabitCountOutputTypeCountMilestonesArgs
    reflections?: boolean | HabitCountOutputTypeCountReflectionsArgs
    completions?: boolean | HabitCountOutputTypeCountCompletionsArgs
  }

  // Custom InputTypes
  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCountOutputType
     */
    select?: HabitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeCountHabitLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitLogWhereInput
  }

  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeCountMilestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitMilestoneWhereInput
  }

  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeCountReflectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReflectionWhereInput
  }

  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeCountCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitCompletionWhereInput
  }


  /**
   * Count Type MilestoneCountOutputType
   */

  export type MilestoneCountOutputType = {
    habits: number
  }

  export type MilestoneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habits?: boolean | MilestoneCountOutputTypeCountHabitsArgs
  }

  // Custom InputTypes
  /**
   * MilestoneCountOutputType without action
   */
  export type MilestoneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneCountOutputType
     */
    select?: MilestoneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MilestoneCountOutputType without action
   */
  export type MilestoneCountOutputTypeCountHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitMilestoneWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    habits?: boolean | User$habitsArgs<ExtArgs>
    habitLogs?: boolean | User$habitLogsArgs<ExtArgs>
    reflections?: boolean | User$reflectionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habits?: boolean | User$habitsArgs<ExtArgs>
    habitLogs?: boolean | User$habitLogsArgs<ExtArgs>
    reflections?: boolean | User$reflectionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      habits: Prisma.$HabitPayload<ExtArgs>[]
      habitLogs: Prisma.$HabitLogPayload<ExtArgs>[]
      reflections: Prisma.$ReflectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habits<T extends User$habitsArgs<ExtArgs> = {}>(args?: Subset<T, User$habitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    habitLogs<T extends User$habitLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$habitLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reflections<T extends User$reflectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$reflectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.habits
   */
  export type User$habitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    cursor?: HabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * User.habitLogs
   */
  export type User$habitLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    where?: HabitLogWhereInput
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    cursor?: HabitLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * User.reflections
   */
  export type User$reflectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    where?: ReflectionWhereInput
    orderBy?: ReflectionOrderByWithRelationInput | ReflectionOrderByWithRelationInput[]
    cursor?: ReflectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReflectionScalarFieldEnum | ReflectionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Habit
   */

  export type AggregateHabit = {
    _count: HabitCountAggregateOutputType | null
    _avg: HabitAvgAggregateOutputType | null
    _sum: HabitSumAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  export type HabitAvgAggregateOutputType = {
    seedDuration: number | null
    sproutDuration: number | null
    forestDuration: number | null
  }

  export type HabitSumAggregateOutputType = {
    seedDuration: number | null
    sproutDuration: number | null
    forestDuration: number | null
  }

  export type HabitMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    userId: string | null
    seedDuration: number | null
    sproutDuration: number | null
    forestDuration: number | null
    scheduledTime: string | null
    scheduledDate: Date | null
    frequency: $Enums.Frequency | null
    frequencyCustom: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HabitMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    userId: string | null
    seedDuration: number | null
    sproutDuration: number | null
    forestDuration: number | null
    scheduledTime: string | null
    scheduledDate: Date | null
    frequency: $Enums.Frequency | null
    frequencyCustom: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HabitCountAggregateOutputType = {
    id: number
    title: number
    description: number
    userId: number
    seedDuration: number
    sproutDuration: number
    forestDuration: number
    scheduledTime: number
    scheduledDate: number
    frequency: number
    frequencyCustom: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HabitAvgAggregateInputType = {
    seedDuration?: true
    sproutDuration?: true
    forestDuration?: true
  }

  export type HabitSumAggregateInputType = {
    seedDuration?: true
    sproutDuration?: true
    forestDuration?: true
  }

  export type HabitMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    seedDuration?: true
    sproutDuration?: true
    forestDuration?: true
    scheduledTime?: true
    scheduledDate?: true
    frequency?: true
    frequencyCustom?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HabitMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    seedDuration?: true
    sproutDuration?: true
    forestDuration?: true
    scheduledTime?: true
    scheduledDate?: true
    frequency?: true
    frequencyCustom?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HabitCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    seedDuration?: true
    sproutDuration?: true
    forestDuration?: true
    scheduledTime?: true
    scheduledDate?: true
    frequency?: true
    frequencyCustom?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HabitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habit to aggregate.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habits
    **/
    _count?: true | HabitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitMaxAggregateInputType
  }

  export type GetHabitAggregateType<T extends HabitAggregateArgs> = {
        [P in keyof T & keyof AggregateHabit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabit[P]>
      : GetScalarType<T[P], AggregateHabit[P]>
  }




  export type HabitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithAggregationInput | HabitOrderByWithAggregationInput[]
    by: HabitScalarFieldEnum[] | HabitScalarFieldEnum
    having?: HabitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitCountAggregateInputType | true
    _avg?: HabitAvgAggregateInputType
    _sum?: HabitSumAggregateInputType
    _min?: HabitMinAggregateInputType
    _max?: HabitMaxAggregateInputType
  }

  export type HabitGroupByOutputType = {
    id: string
    title: string
    description: string | null
    userId: string
    seedDuration: number | null
    sproutDuration: number | null
    forestDuration: number | null
    scheduledTime: string | null
    scheduledDate: Date | null
    frequency: $Enums.Frequency
    frequencyCustom: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: HabitCountAggregateOutputType | null
    _avg: HabitAvgAggregateOutputType | null
    _sum: HabitSumAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  type GetHabitGroupByPayload<T extends HabitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitGroupByOutputType[P]>
            : GetScalarType<T[P], HabitGroupByOutputType[P]>
        }
      >
    >


  export type HabitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    seedDuration?: boolean
    sproutDuration?: boolean
    forestDuration?: boolean
    scheduledTime?: boolean
    scheduledDate?: boolean
    frequency?: boolean
    frequencyCustom?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    habitLogs?: boolean | Habit$habitLogsArgs<ExtArgs>
    milestones?: boolean | Habit$milestonesArgs<ExtArgs>
    reflections?: boolean | Habit$reflectionsArgs<ExtArgs>
    completions?: boolean | Habit$completionsArgs<ExtArgs>
    _count?: boolean | HabitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    seedDuration?: boolean
    sproutDuration?: boolean
    forestDuration?: boolean
    scheduledTime?: boolean
    scheduledDate?: boolean
    frequency?: boolean
    frequencyCustom?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    seedDuration?: boolean
    sproutDuration?: boolean
    forestDuration?: boolean
    scheduledTime?: boolean
    scheduledDate?: boolean
    frequency?: boolean
    frequencyCustom?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    seedDuration?: boolean
    sproutDuration?: boolean
    forestDuration?: boolean
    scheduledTime?: boolean
    scheduledDate?: boolean
    frequency?: boolean
    frequencyCustom?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HabitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "userId" | "seedDuration" | "sproutDuration" | "forestDuration" | "scheduledTime" | "scheduledDate" | "frequency" | "frequencyCustom" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["habit"]>
  export type HabitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    habitLogs?: boolean | Habit$habitLogsArgs<ExtArgs>
    milestones?: boolean | Habit$milestonesArgs<ExtArgs>
    reflections?: boolean | Habit$reflectionsArgs<ExtArgs>
    completions?: boolean | Habit$completionsArgs<ExtArgs>
    _count?: boolean | HabitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HabitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HabitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HabitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Habit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      habitLogs: Prisma.$HabitLogPayload<ExtArgs>[]
      milestones: Prisma.$HabitMilestonePayload<ExtArgs>[]
      reflections: Prisma.$ReflectionPayload<ExtArgs>[]
      completions: Prisma.$HabitCompletionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      userId: string
      seedDuration: number | null
      sproutDuration: number | null
      forestDuration: number | null
      scheduledTime: string | null
      scheduledDate: Date | null
      frequency: $Enums.Frequency
      frequencyCustom: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["habit"]>
    composites: {}
  }

  type HabitGetPayload<S extends boolean | null | undefined | HabitDefaultArgs> = $Result.GetResult<Prisma.$HabitPayload, S>

  type HabitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitCountAggregateInputType | true
    }

  export interface HabitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Habit'], meta: { name: 'Habit' } }
    /**
     * Find zero or one Habit that matches the filter.
     * @param {HabitFindUniqueArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitFindUniqueArgs>(args: SelectSubset<T, HabitFindUniqueArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Habit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitFindUniqueOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitFindFirstArgs>(args?: SelectSubset<T, HabitFindFirstArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Habits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habits
     * const habits = await prisma.habit.findMany()
     * 
     * // Get first 10 Habits
     * const habits = await prisma.habit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitWithIdOnly = await prisma.habit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitFindManyArgs>(args?: SelectSubset<T, HabitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Habit.
     * @param {HabitCreateArgs} args - Arguments to create a Habit.
     * @example
     * // Create one Habit
     * const Habit = await prisma.habit.create({
     *   data: {
     *     // ... data to create a Habit
     *   }
     * })
     * 
     */
    create<T extends HabitCreateArgs>(args: SelectSubset<T, HabitCreateArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Habits.
     * @param {HabitCreateManyArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habit = await prisma.habit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitCreateManyArgs>(args?: SelectSubset<T, HabitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Habits and returns the data saved in the database.
     * @param {HabitCreateManyAndReturnArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habit = await prisma.habit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Habits and only return the `id`
     * const habitWithIdOnly = await prisma.habit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Habit.
     * @param {HabitDeleteArgs} args - Arguments to delete one Habit.
     * @example
     * // Delete one Habit
     * const Habit = await prisma.habit.delete({
     *   where: {
     *     // ... filter to delete one Habit
     *   }
     * })
     * 
     */
    delete<T extends HabitDeleteArgs>(args: SelectSubset<T, HabitDeleteArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Habit.
     * @param {HabitUpdateArgs} args - Arguments to update one Habit.
     * @example
     * // Update one Habit
     * const habit = await prisma.habit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitUpdateArgs>(args: SelectSubset<T, HabitUpdateArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Habits.
     * @param {HabitDeleteManyArgs} args - Arguments to filter Habits to delete.
     * @example
     * // Delete a few Habits
     * const { count } = await prisma.habit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitDeleteManyArgs>(args?: SelectSubset<T, HabitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habits
     * const habit = await prisma.habit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitUpdateManyArgs>(args: SelectSubset<T, HabitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits and returns the data updated in the database.
     * @param {HabitUpdateManyAndReturnArgs} args - Arguments to update many Habits.
     * @example
     * // Update many Habits
     * const habit = await prisma.habit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Habits and only return the `id`
     * const habitWithIdOnly = await prisma.habit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HabitUpdateManyAndReturnArgs>(args: SelectSubset<T, HabitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Habit.
     * @param {HabitUpsertArgs} args - Arguments to update or create a Habit.
     * @example
     * // Update or create a Habit
     * const habit = await prisma.habit.upsert({
     *   create: {
     *     // ... data to create a Habit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habit we want to update
     *   }
     * })
     */
    upsert<T extends HabitUpsertArgs>(args: SelectSubset<T, HabitUpsertArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCountArgs} args - Arguments to filter Habits to count.
     * @example
     * // Count the number of Habits
     * const count = await prisma.habit.count({
     *   where: {
     *     // ... the filter for the Habits we want to count
     *   }
     * })
    **/
    count<T extends HabitCountArgs>(
      args?: Subset<T, HabitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HabitAggregateArgs>(args: Subset<T, HabitAggregateArgs>): Prisma.PrismaPromise<GetHabitAggregateType<T>>

    /**
     * Group by Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HabitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitGroupByArgs['orderBy'] }
        : { orderBy?: HabitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Habit model
   */
  readonly fields: HabitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Habit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    habitLogs<T extends Habit$habitLogsArgs<ExtArgs> = {}>(args?: Subset<T, Habit$habitLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    milestones<T extends Habit$milestonesArgs<ExtArgs> = {}>(args?: Subset<T, Habit$milestonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitMilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reflections<T extends Habit$reflectionsArgs<ExtArgs> = {}>(args?: Subset<T, Habit$reflectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    completions<T extends Habit$completionsArgs<ExtArgs> = {}>(args?: Subset<T, Habit$completionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Habit model
   */
  interface HabitFieldRefs {
    readonly id: FieldRef<"Habit", 'String'>
    readonly title: FieldRef<"Habit", 'String'>
    readonly description: FieldRef<"Habit", 'String'>
    readonly userId: FieldRef<"Habit", 'String'>
    readonly seedDuration: FieldRef<"Habit", 'Int'>
    readonly sproutDuration: FieldRef<"Habit", 'Int'>
    readonly forestDuration: FieldRef<"Habit", 'Int'>
    readonly scheduledTime: FieldRef<"Habit", 'String'>
    readonly scheduledDate: FieldRef<"Habit", 'DateTime'>
    readonly frequency: FieldRef<"Habit", 'Frequency'>
    readonly frequencyCustom: FieldRef<"Habit", 'String'>
    readonly isActive: FieldRef<"Habit", 'Boolean'>
    readonly createdAt: FieldRef<"Habit", 'DateTime'>
    readonly updatedAt: FieldRef<"Habit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Habit findUnique
   */
  export type HabitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findUniqueOrThrow
   */
  export type HabitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findFirst
   */
  export type HabitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findFirstOrThrow
   */
  export type HabitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findMany
   */
  export type HabitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habits to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit create
   */
  export type HabitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to create a Habit.
     */
    data: XOR<HabitCreateInput, HabitUncheckedCreateInput>
  }

  /**
   * Habit createMany
   */
  export type HabitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Habits.
     */
    data: HabitCreateManyInput | HabitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Habit createManyAndReturn
   */
  export type HabitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * The data used to create many Habits.
     */
    data: HabitCreateManyInput | HabitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Habit update
   */
  export type HabitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to update a Habit.
     */
    data: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
    /**
     * Choose, which Habit to update.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit updateMany
   */
  export type HabitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Habits.
     */
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyInput>
    /**
     * Filter which Habits to update
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to update.
     */
    limit?: number
  }

  /**
   * Habit updateManyAndReturn
   */
  export type HabitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * The data used to update Habits.
     */
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyInput>
    /**
     * Filter which Habits to update
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Habit upsert
   */
  export type HabitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The filter to search for the Habit to update in case it exists.
     */
    where: HabitWhereUniqueInput
    /**
     * In case the Habit found by the `where` argument doesn't exist, create a new Habit with this data.
     */
    create: XOR<HabitCreateInput, HabitUncheckedCreateInput>
    /**
     * In case the Habit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
  }

  /**
   * Habit delete
   */
  export type HabitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter which Habit to delete.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit deleteMany
   */
  export type HabitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habits to delete
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to delete.
     */
    limit?: number
  }

  /**
   * Habit.habitLogs
   */
  export type Habit$habitLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    where?: HabitLogWhereInput
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    cursor?: HabitLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * Habit.milestones
   */
  export type Habit$milestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitMilestone
     */
    select?: HabitMilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitMilestone
     */
    omit?: HabitMilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitMilestoneInclude<ExtArgs> | null
    where?: HabitMilestoneWhereInput
    orderBy?: HabitMilestoneOrderByWithRelationInput | HabitMilestoneOrderByWithRelationInput[]
    cursor?: HabitMilestoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitMilestoneScalarFieldEnum | HabitMilestoneScalarFieldEnum[]
  }

  /**
   * Habit.reflections
   */
  export type Habit$reflectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    where?: ReflectionWhereInput
    orderBy?: ReflectionOrderByWithRelationInput | ReflectionOrderByWithRelationInput[]
    cursor?: ReflectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReflectionScalarFieldEnum | ReflectionScalarFieldEnum[]
  }

  /**
   * Habit.completions
   */
  export type Habit$completionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitCompletion
     */
    omit?: HabitCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionInclude<ExtArgs> | null
    where?: HabitCompletionWhereInput
    orderBy?: HabitCompletionOrderByWithRelationInput | HabitCompletionOrderByWithRelationInput[]
    cursor?: HabitCompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitCompletionScalarFieldEnum | HabitCompletionScalarFieldEnum[]
  }

  /**
   * Habit without action
   */
  export type HabitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
  }


  /**
   * Model HabitLog
   */

  export type AggregateHabitLog = {
    _count: HabitLogCountAggregateOutputType | null
    _avg: HabitLogAvgAggregateOutputType | null
    _sum: HabitLogSumAggregateOutputType | null
    _min: HabitLogMinAggregateOutputType | null
    _max: HabitLogMaxAggregateOutputType | null
  }

  export type HabitLogAvgAggregateOutputType = {
    actualDuration: number | null
  }

  export type HabitLogSumAggregateOutputType = {
    actualDuration: number | null
  }

  export type HabitLogMinAggregateOutputType = {
    id: string | null
    habitId: string | null
    userId: string | null
    completedAt: Date | null
    completedLevel: $Enums.EnergyLevel | null
    actualDuration: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type HabitLogMaxAggregateOutputType = {
    id: string | null
    habitId: string | null
    userId: string | null
    completedAt: Date | null
    completedLevel: $Enums.EnergyLevel | null
    actualDuration: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type HabitLogCountAggregateOutputType = {
    id: number
    habitId: number
    userId: number
    completedAt: number
    completedLevel: number
    actualDuration: number
    notes: number
    createdAt: number
    _all: number
  }


  export type HabitLogAvgAggregateInputType = {
    actualDuration?: true
  }

  export type HabitLogSumAggregateInputType = {
    actualDuration?: true
  }

  export type HabitLogMinAggregateInputType = {
    id?: true
    habitId?: true
    userId?: true
    completedAt?: true
    completedLevel?: true
    actualDuration?: true
    notes?: true
    createdAt?: true
  }

  export type HabitLogMaxAggregateInputType = {
    id?: true
    habitId?: true
    userId?: true
    completedAt?: true
    completedLevel?: true
    actualDuration?: true
    notes?: true
    createdAt?: true
  }

  export type HabitLogCountAggregateInputType = {
    id?: true
    habitId?: true
    userId?: true
    completedAt?: true
    completedLevel?: true
    actualDuration?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type HabitLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitLog to aggregate.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HabitLogs
    **/
    _count?: true | HabitLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitLogMaxAggregateInputType
  }

  export type GetHabitLogAggregateType<T extends HabitLogAggregateArgs> = {
        [P in keyof T & keyof AggregateHabitLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabitLog[P]>
      : GetScalarType<T[P], AggregateHabitLog[P]>
  }




  export type HabitLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitLogWhereInput
    orderBy?: HabitLogOrderByWithAggregationInput | HabitLogOrderByWithAggregationInput[]
    by: HabitLogScalarFieldEnum[] | HabitLogScalarFieldEnum
    having?: HabitLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitLogCountAggregateInputType | true
    _avg?: HabitLogAvgAggregateInputType
    _sum?: HabitLogSumAggregateInputType
    _min?: HabitLogMinAggregateInputType
    _max?: HabitLogMaxAggregateInputType
  }

  export type HabitLogGroupByOutputType = {
    id: string
    habitId: string
    userId: string
    completedAt: Date
    completedLevel: $Enums.EnergyLevel
    actualDuration: number | null
    notes: string | null
    createdAt: Date
    _count: HabitLogCountAggregateOutputType | null
    _avg: HabitLogAvgAggregateOutputType | null
    _sum: HabitLogSumAggregateOutputType | null
    _min: HabitLogMinAggregateOutputType | null
    _max: HabitLogMaxAggregateOutputType | null
  }

  type GetHabitLogGroupByPayload<T extends HabitLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitLogGroupByOutputType[P]>
            : GetScalarType<T[P], HabitLogGroupByOutputType[P]>
        }
      >
    >


  export type HabitLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    userId?: boolean
    completedAt?: boolean
    completedLevel?: boolean
    actualDuration?: boolean
    notes?: boolean
    createdAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    reflection?: boolean | HabitLog$reflectionArgs<ExtArgs>
  }, ExtArgs["result"]["habitLog"]>

  export type HabitLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    userId?: boolean
    completedAt?: boolean
    completedLevel?: boolean
    actualDuration?: boolean
    notes?: boolean
    createdAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitLog"]>

  export type HabitLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    userId?: boolean
    completedAt?: boolean
    completedLevel?: boolean
    actualDuration?: boolean
    notes?: boolean
    createdAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitLog"]>

  export type HabitLogSelectScalar = {
    id?: boolean
    habitId?: boolean
    userId?: boolean
    completedAt?: boolean
    completedLevel?: boolean
    actualDuration?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type HabitLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "habitId" | "userId" | "completedAt" | "completedLevel" | "actualDuration" | "notes" | "createdAt", ExtArgs["result"]["habitLog"]>
  export type HabitLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    reflection?: boolean | HabitLog$reflectionArgs<ExtArgs>
  }
  export type HabitLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HabitLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HabitLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HabitLog"
    objects: {
      habit: Prisma.$HabitPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      reflection: Prisma.$ReflectionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      habitId: string
      userId: string
      completedAt: Date
      completedLevel: $Enums.EnergyLevel
      actualDuration: number | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["habitLog"]>
    composites: {}
  }

  type HabitLogGetPayload<S extends boolean | null | undefined | HabitLogDefaultArgs> = $Result.GetResult<Prisma.$HabitLogPayload, S>

  type HabitLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitLogCountAggregateInputType | true
    }

  export interface HabitLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HabitLog'], meta: { name: 'HabitLog' } }
    /**
     * Find zero or one HabitLog that matches the filter.
     * @param {HabitLogFindUniqueArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitLogFindUniqueArgs>(args: SelectSubset<T, HabitLogFindUniqueArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HabitLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitLogFindUniqueOrThrowArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitLogFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HabitLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogFindFirstArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitLogFindFirstArgs>(args?: SelectSubset<T, HabitLogFindFirstArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HabitLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogFindFirstOrThrowArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitLogFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HabitLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HabitLogs
     * const habitLogs = await prisma.habitLog.findMany()
     * 
     * // Get first 10 HabitLogs
     * const habitLogs = await prisma.habitLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitLogWithIdOnly = await prisma.habitLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitLogFindManyArgs>(args?: SelectSubset<T, HabitLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HabitLog.
     * @param {HabitLogCreateArgs} args - Arguments to create a HabitLog.
     * @example
     * // Create one HabitLog
     * const HabitLog = await prisma.habitLog.create({
     *   data: {
     *     // ... data to create a HabitLog
     *   }
     * })
     * 
     */
    create<T extends HabitLogCreateArgs>(args: SelectSubset<T, HabitLogCreateArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HabitLogs.
     * @param {HabitLogCreateManyArgs} args - Arguments to create many HabitLogs.
     * @example
     * // Create many HabitLogs
     * const habitLog = await prisma.habitLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitLogCreateManyArgs>(args?: SelectSubset<T, HabitLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HabitLogs and returns the data saved in the database.
     * @param {HabitLogCreateManyAndReturnArgs} args - Arguments to create many HabitLogs.
     * @example
     * // Create many HabitLogs
     * const habitLog = await prisma.habitLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HabitLogs and only return the `id`
     * const habitLogWithIdOnly = await prisma.habitLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitLogCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HabitLog.
     * @param {HabitLogDeleteArgs} args - Arguments to delete one HabitLog.
     * @example
     * // Delete one HabitLog
     * const HabitLog = await prisma.habitLog.delete({
     *   where: {
     *     // ... filter to delete one HabitLog
     *   }
     * })
     * 
     */
    delete<T extends HabitLogDeleteArgs>(args: SelectSubset<T, HabitLogDeleteArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HabitLog.
     * @param {HabitLogUpdateArgs} args - Arguments to update one HabitLog.
     * @example
     * // Update one HabitLog
     * const habitLog = await prisma.habitLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitLogUpdateArgs>(args: SelectSubset<T, HabitLogUpdateArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HabitLogs.
     * @param {HabitLogDeleteManyArgs} args - Arguments to filter HabitLogs to delete.
     * @example
     * // Delete a few HabitLogs
     * const { count } = await prisma.habitLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitLogDeleteManyArgs>(args?: SelectSubset<T, HabitLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabitLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HabitLogs
     * const habitLog = await prisma.habitLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitLogUpdateManyArgs>(args: SelectSubset<T, HabitLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabitLogs and returns the data updated in the database.
     * @param {HabitLogUpdateManyAndReturnArgs} args - Arguments to update many HabitLogs.
     * @example
     * // Update many HabitLogs
     * const habitLog = await prisma.habitLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HabitLogs and only return the `id`
     * const habitLogWithIdOnly = await prisma.habitLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HabitLogUpdateManyAndReturnArgs>(args: SelectSubset<T, HabitLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HabitLog.
     * @param {HabitLogUpsertArgs} args - Arguments to update or create a HabitLog.
     * @example
     * // Update or create a HabitLog
     * const habitLog = await prisma.habitLog.upsert({
     *   create: {
     *     // ... data to create a HabitLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HabitLog we want to update
     *   }
     * })
     */
    upsert<T extends HabitLogUpsertArgs>(args: SelectSubset<T, HabitLogUpsertArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HabitLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogCountArgs} args - Arguments to filter HabitLogs to count.
     * @example
     * // Count the number of HabitLogs
     * const count = await prisma.habitLog.count({
     *   where: {
     *     // ... the filter for the HabitLogs we want to count
     *   }
     * })
    **/
    count<T extends HabitLogCountArgs>(
      args?: Subset<T, HabitLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HabitLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HabitLogAggregateArgs>(args: Subset<T, HabitLogAggregateArgs>): Prisma.PrismaPromise<GetHabitLogAggregateType<T>>

    /**
     * Group by HabitLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HabitLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitLogGroupByArgs['orderBy'] }
        : { orderBy?: HabitLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HabitLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HabitLog model
   */
  readonly fields: HabitLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HabitLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habit<T extends HabitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitDefaultArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reflection<T extends HabitLog$reflectionArgs<ExtArgs> = {}>(args?: Subset<T, HabitLog$reflectionArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HabitLog model
   */
  interface HabitLogFieldRefs {
    readonly id: FieldRef<"HabitLog", 'String'>
    readonly habitId: FieldRef<"HabitLog", 'String'>
    readonly userId: FieldRef<"HabitLog", 'String'>
    readonly completedAt: FieldRef<"HabitLog", 'DateTime'>
    readonly completedLevel: FieldRef<"HabitLog", 'EnergyLevel'>
    readonly actualDuration: FieldRef<"HabitLog", 'Int'>
    readonly notes: FieldRef<"HabitLog", 'String'>
    readonly createdAt: FieldRef<"HabitLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HabitLog findUnique
   */
  export type HabitLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog findUniqueOrThrow
   */
  export type HabitLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog findFirst
   */
  export type HabitLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitLogs.
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitLogs.
     */
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * HabitLog findFirstOrThrow
   */
  export type HabitLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitLogs.
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitLogs.
     */
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * HabitLog findMany
   */
  export type HabitLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLogs to fetch.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HabitLogs.
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * HabitLog create
   */
  export type HabitLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * The data needed to create a HabitLog.
     */
    data: XOR<HabitLogCreateInput, HabitLogUncheckedCreateInput>
  }

  /**
   * HabitLog createMany
   */
  export type HabitLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HabitLogs.
     */
    data: HabitLogCreateManyInput | HabitLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HabitLog createManyAndReturn
   */
  export type HabitLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * The data used to create many HabitLogs.
     */
    data: HabitLogCreateManyInput | HabitLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HabitLog update
   */
  export type HabitLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * The data needed to update a HabitLog.
     */
    data: XOR<HabitLogUpdateInput, HabitLogUncheckedUpdateInput>
    /**
     * Choose, which HabitLog to update.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog updateMany
   */
  export type HabitLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HabitLogs.
     */
    data: XOR<HabitLogUpdateManyMutationInput, HabitLogUncheckedUpdateManyInput>
    /**
     * Filter which HabitLogs to update
     */
    where?: HabitLogWhereInput
    /**
     * Limit how many HabitLogs to update.
     */
    limit?: number
  }

  /**
   * HabitLog updateManyAndReturn
   */
  export type HabitLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * The data used to update HabitLogs.
     */
    data: XOR<HabitLogUpdateManyMutationInput, HabitLogUncheckedUpdateManyInput>
    /**
     * Filter which HabitLogs to update
     */
    where?: HabitLogWhereInput
    /**
     * Limit how many HabitLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HabitLog upsert
   */
  export type HabitLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * The filter to search for the HabitLog to update in case it exists.
     */
    where: HabitLogWhereUniqueInput
    /**
     * In case the HabitLog found by the `where` argument doesn't exist, create a new HabitLog with this data.
     */
    create: XOR<HabitLogCreateInput, HabitLogUncheckedCreateInput>
    /**
     * In case the HabitLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitLogUpdateInput, HabitLogUncheckedUpdateInput>
  }

  /**
   * HabitLog delete
   */
  export type HabitLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter which HabitLog to delete.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog deleteMany
   */
  export type HabitLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitLogs to delete
     */
    where?: HabitLogWhereInput
    /**
     * Limit how many HabitLogs to delete.
     */
    limit?: number
  }

  /**
   * HabitLog.reflection
   */
  export type HabitLog$reflectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    where?: ReflectionWhereInput
  }

  /**
   * HabitLog without action
   */
  export type HabitLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
  }


  /**
   * Model Milestone
   */

  export type AggregateMilestone = {
    _count: MilestoneCountAggregateOutputType | null
    _avg: MilestoneAvgAggregateOutputType | null
    _sum: MilestoneSumAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  export type MilestoneAvgAggregateOutputType = {
    target: number | null
    current: number | null
  }

  export type MilestoneSumAggregateOutputType = {
    target: number | null
    current: number | null
  }

  export type MilestoneMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: $Enums.MilestoneType | null
    target: number | null
    current: number | null
    unit: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MilestoneMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: $Enums.MilestoneType | null
    target: number | null
    current: number | null
    unit: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MilestoneCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    target: number
    current: number
    unit: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MilestoneAvgAggregateInputType = {
    target?: true
    current?: true
  }

  export type MilestoneSumAggregateInputType = {
    target?: true
    current?: true
  }

  export type MilestoneMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    target?: true
    current?: true
    unit?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MilestoneMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    target?: true
    current?: true
    unit?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MilestoneCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    target?: true
    current?: true
    unit?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MilestoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milestone to aggregate.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Milestones
    **/
    _count?: true | MilestoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MilestoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MilestoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MilestoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MilestoneMaxAggregateInputType
  }

  export type GetMilestoneAggregateType<T extends MilestoneAggregateArgs> = {
        [P in keyof T & keyof AggregateMilestone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMilestone[P]>
      : GetScalarType<T[P], AggregateMilestone[P]>
  }




  export type MilestoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneWhereInput
    orderBy?: MilestoneOrderByWithAggregationInput | MilestoneOrderByWithAggregationInput[]
    by: MilestoneScalarFieldEnum[] | MilestoneScalarFieldEnum
    having?: MilestoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MilestoneCountAggregateInputType | true
    _avg?: MilestoneAvgAggregateInputType
    _sum?: MilestoneSumAggregateInputType
    _min?: MilestoneMinAggregateInputType
    _max?: MilestoneMaxAggregateInputType
  }

  export type MilestoneGroupByOutputType = {
    id: string
    title: string
    description: string | null
    type: $Enums.MilestoneType
    target: number
    current: number
    unit: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: MilestoneCountAggregateOutputType | null
    _avg: MilestoneAvgAggregateOutputType | null
    _sum: MilestoneSumAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  type GetMilestoneGroupByPayload<T extends MilestoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MilestoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MilestoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
            : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
        }
      >
    >


  export type MilestoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    target?: boolean
    current?: boolean
    unit?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    habits?: boolean | Milestone$habitsArgs<ExtArgs>
    _count?: boolean | MilestoneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    target?: boolean
    current?: boolean
    unit?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    target?: boolean
    current?: boolean
    unit?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    target?: boolean
    current?: boolean
    unit?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MilestoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "type" | "target" | "current" | "unit" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["milestone"]>
  export type MilestoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habits?: boolean | Milestone$habitsArgs<ExtArgs>
    _count?: boolean | MilestoneCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MilestoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MilestoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MilestonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Milestone"
    objects: {
      habits: Prisma.$HabitMilestonePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      type: $Enums.MilestoneType
      target: number
      current: number
      unit: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["milestone"]>
    composites: {}
  }

  type MilestoneGetPayload<S extends boolean | null | undefined | MilestoneDefaultArgs> = $Result.GetResult<Prisma.$MilestonePayload, S>

  type MilestoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MilestoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MilestoneCountAggregateInputType | true
    }

  export interface MilestoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Milestone'], meta: { name: 'Milestone' } }
    /**
     * Find zero or one Milestone that matches the filter.
     * @param {MilestoneFindUniqueArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MilestoneFindUniqueArgs>(args: SelectSubset<T, MilestoneFindUniqueArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Milestone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MilestoneFindUniqueOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MilestoneFindUniqueOrThrowArgs>(args: SelectSubset<T, MilestoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Milestone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MilestoneFindFirstArgs>(args?: SelectSubset<T, MilestoneFindFirstArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Milestone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MilestoneFindFirstOrThrowArgs>(args?: SelectSubset<T, MilestoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Milestones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Milestones
     * const milestones = await prisma.milestone.findMany()
     * 
     * // Get first 10 Milestones
     * const milestones = await prisma.milestone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const milestoneWithIdOnly = await prisma.milestone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MilestoneFindManyArgs>(args?: SelectSubset<T, MilestoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Milestone.
     * @param {MilestoneCreateArgs} args - Arguments to create a Milestone.
     * @example
     * // Create one Milestone
     * const Milestone = await prisma.milestone.create({
     *   data: {
     *     // ... data to create a Milestone
     *   }
     * })
     * 
     */
    create<T extends MilestoneCreateArgs>(args: SelectSubset<T, MilestoneCreateArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Milestones.
     * @param {MilestoneCreateManyArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestone = await prisma.milestone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MilestoneCreateManyArgs>(args?: SelectSubset<T, MilestoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Milestones and returns the data saved in the database.
     * @param {MilestoneCreateManyAndReturnArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestone = await prisma.milestone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Milestones and only return the `id`
     * const milestoneWithIdOnly = await prisma.milestone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MilestoneCreateManyAndReturnArgs>(args?: SelectSubset<T, MilestoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Milestone.
     * @param {MilestoneDeleteArgs} args - Arguments to delete one Milestone.
     * @example
     * // Delete one Milestone
     * const Milestone = await prisma.milestone.delete({
     *   where: {
     *     // ... filter to delete one Milestone
     *   }
     * })
     * 
     */
    delete<T extends MilestoneDeleteArgs>(args: SelectSubset<T, MilestoneDeleteArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Milestone.
     * @param {MilestoneUpdateArgs} args - Arguments to update one Milestone.
     * @example
     * // Update one Milestone
     * const milestone = await prisma.milestone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MilestoneUpdateArgs>(args: SelectSubset<T, MilestoneUpdateArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Milestones.
     * @param {MilestoneDeleteManyArgs} args - Arguments to filter Milestones to delete.
     * @example
     * // Delete a few Milestones
     * const { count } = await prisma.milestone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MilestoneDeleteManyArgs>(args?: SelectSubset<T, MilestoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Milestones
     * const milestone = await prisma.milestone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MilestoneUpdateManyArgs>(args: SelectSubset<T, MilestoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones and returns the data updated in the database.
     * @param {MilestoneUpdateManyAndReturnArgs} args - Arguments to update many Milestones.
     * @example
     * // Update many Milestones
     * const milestone = await prisma.milestone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Milestones and only return the `id`
     * const milestoneWithIdOnly = await prisma.milestone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MilestoneUpdateManyAndReturnArgs>(args: SelectSubset<T, MilestoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Milestone.
     * @param {MilestoneUpsertArgs} args - Arguments to update or create a Milestone.
     * @example
     * // Update or create a Milestone
     * const milestone = await prisma.milestone.upsert({
     *   create: {
     *     // ... data to create a Milestone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Milestone we want to update
     *   }
     * })
     */
    upsert<T extends MilestoneUpsertArgs>(args: SelectSubset<T, MilestoneUpsertArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneCountArgs} args - Arguments to filter Milestones to count.
     * @example
     * // Count the number of Milestones
     * const count = await prisma.milestone.count({
     *   where: {
     *     // ... the filter for the Milestones we want to count
     *   }
     * })
    **/
    count<T extends MilestoneCountArgs>(
      args?: Subset<T, MilestoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MilestoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MilestoneAggregateArgs>(args: Subset<T, MilestoneAggregateArgs>): Prisma.PrismaPromise<GetMilestoneAggregateType<T>>

    /**
     * Group by Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MilestoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MilestoneGroupByArgs['orderBy'] }
        : { orderBy?: MilestoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MilestoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMilestoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Milestone model
   */
  readonly fields: MilestoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Milestone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MilestoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habits<T extends Milestone$habitsArgs<ExtArgs> = {}>(args?: Subset<T, Milestone$habitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitMilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Milestone model
   */
  interface MilestoneFieldRefs {
    readonly id: FieldRef<"Milestone", 'String'>
    readonly title: FieldRef<"Milestone", 'String'>
    readonly description: FieldRef<"Milestone", 'String'>
    readonly type: FieldRef<"Milestone", 'MilestoneType'>
    readonly target: FieldRef<"Milestone", 'Float'>
    readonly current: FieldRef<"Milestone", 'Float'>
    readonly unit: FieldRef<"Milestone", 'String'>
    readonly isActive: FieldRef<"Milestone", 'Boolean'>
    readonly createdAt: FieldRef<"Milestone", 'DateTime'>
    readonly updatedAt: FieldRef<"Milestone", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Milestone findUnique
   */
  export type MilestoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findUniqueOrThrow
   */
  export type MilestoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findFirst
   */
  export type MilestoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone findFirstOrThrow
   */
  export type MilestoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone findMany
   */
  export type MilestoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestones to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone create
   */
  export type MilestoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Milestone.
     */
    data: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
  }

  /**
   * Milestone createMany
   */
  export type MilestoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Milestones.
     */
    data: MilestoneCreateManyInput | MilestoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Milestone createManyAndReturn
   */
  export type MilestoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * The data used to create many Milestones.
     */
    data: MilestoneCreateManyInput | MilestoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Milestone update
   */
  export type MilestoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Milestone.
     */
    data: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
    /**
     * Choose, which Milestone to update.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone updateMany
   */
  export type MilestoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Milestones.
     */
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyInput>
    /**
     * Filter which Milestones to update
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to update.
     */
    limit?: number
  }

  /**
   * Milestone updateManyAndReturn
   */
  export type MilestoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * The data used to update Milestones.
     */
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyInput>
    /**
     * Filter which Milestones to update
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to update.
     */
    limit?: number
  }

  /**
   * Milestone upsert
   */
  export type MilestoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Milestone to update in case it exists.
     */
    where: MilestoneWhereUniqueInput
    /**
     * In case the Milestone found by the `where` argument doesn't exist, create a new Milestone with this data.
     */
    create: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
    /**
     * In case the Milestone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
  }

  /**
   * Milestone delete
   */
  export type MilestoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter which Milestone to delete.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone deleteMany
   */
  export type MilestoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milestones to delete
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to delete.
     */
    limit?: number
  }

  /**
   * Milestone.habits
   */
  export type Milestone$habitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitMilestone
     */
    select?: HabitMilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitMilestone
     */
    omit?: HabitMilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitMilestoneInclude<ExtArgs> | null
    where?: HabitMilestoneWhereInput
    orderBy?: HabitMilestoneOrderByWithRelationInput | HabitMilestoneOrderByWithRelationInput[]
    cursor?: HabitMilestoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitMilestoneScalarFieldEnum | HabitMilestoneScalarFieldEnum[]
  }

  /**
   * Milestone without action
   */
  export type MilestoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
  }


  /**
   * Model HabitMilestone
   */

  export type AggregateHabitMilestone = {
    _count: HabitMilestoneCountAggregateOutputType | null
    _min: HabitMilestoneMinAggregateOutputType | null
    _max: HabitMilestoneMaxAggregateOutputType | null
  }

  export type HabitMilestoneMinAggregateOutputType = {
    id: string | null
    habitId: string | null
    milestoneId: string | null
    createdAt: Date | null
  }

  export type HabitMilestoneMaxAggregateOutputType = {
    id: string | null
    habitId: string | null
    milestoneId: string | null
    createdAt: Date | null
  }

  export type HabitMilestoneCountAggregateOutputType = {
    id: number
    habitId: number
    milestoneId: number
    createdAt: number
    _all: number
  }


  export type HabitMilestoneMinAggregateInputType = {
    id?: true
    habitId?: true
    milestoneId?: true
    createdAt?: true
  }

  export type HabitMilestoneMaxAggregateInputType = {
    id?: true
    habitId?: true
    milestoneId?: true
    createdAt?: true
  }

  export type HabitMilestoneCountAggregateInputType = {
    id?: true
    habitId?: true
    milestoneId?: true
    createdAt?: true
    _all?: true
  }

  export type HabitMilestoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitMilestone to aggregate.
     */
    where?: HabitMilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitMilestones to fetch.
     */
    orderBy?: HabitMilestoneOrderByWithRelationInput | HabitMilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitMilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitMilestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitMilestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HabitMilestones
    **/
    _count?: true | HabitMilestoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitMilestoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitMilestoneMaxAggregateInputType
  }

  export type GetHabitMilestoneAggregateType<T extends HabitMilestoneAggregateArgs> = {
        [P in keyof T & keyof AggregateHabitMilestone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabitMilestone[P]>
      : GetScalarType<T[P], AggregateHabitMilestone[P]>
  }




  export type HabitMilestoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitMilestoneWhereInput
    orderBy?: HabitMilestoneOrderByWithAggregationInput | HabitMilestoneOrderByWithAggregationInput[]
    by: HabitMilestoneScalarFieldEnum[] | HabitMilestoneScalarFieldEnum
    having?: HabitMilestoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitMilestoneCountAggregateInputType | true
    _min?: HabitMilestoneMinAggregateInputType
    _max?: HabitMilestoneMaxAggregateInputType
  }

  export type HabitMilestoneGroupByOutputType = {
    id: string
    habitId: string
    milestoneId: string
    createdAt: Date
    _count: HabitMilestoneCountAggregateOutputType | null
    _min: HabitMilestoneMinAggregateOutputType | null
    _max: HabitMilestoneMaxAggregateOutputType | null
  }

  type GetHabitMilestoneGroupByPayload<T extends HabitMilestoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitMilestoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitMilestoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitMilestoneGroupByOutputType[P]>
            : GetScalarType<T[P], HabitMilestoneGroupByOutputType[P]>
        }
      >
    >


  export type HabitMilestoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    milestoneId?: boolean
    createdAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitMilestone"]>

  export type HabitMilestoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    milestoneId?: boolean
    createdAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitMilestone"]>

  export type HabitMilestoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    milestoneId?: boolean
    createdAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitMilestone"]>

  export type HabitMilestoneSelectScalar = {
    id?: boolean
    habitId?: boolean
    milestoneId?: boolean
    createdAt?: boolean
  }

  export type HabitMilestoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "habitId" | "milestoneId" | "createdAt", ExtArgs["result"]["habitMilestone"]>
  export type HabitMilestoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
  }
  export type HabitMilestoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
  }
  export type HabitMilestoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
  }

  export type $HabitMilestonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HabitMilestone"
    objects: {
      habit: Prisma.$HabitPayload<ExtArgs>
      milestone: Prisma.$MilestonePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      habitId: string
      milestoneId: string
      createdAt: Date
    }, ExtArgs["result"]["habitMilestone"]>
    composites: {}
  }

  type HabitMilestoneGetPayload<S extends boolean | null | undefined | HabitMilestoneDefaultArgs> = $Result.GetResult<Prisma.$HabitMilestonePayload, S>

  type HabitMilestoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitMilestoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitMilestoneCountAggregateInputType | true
    }

  export interface HabitMilestoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HabitMilestone'], meta: { name: 'HabitMilestone' } }
    /**
     * Find zero or one HabitMilestone that matches the filter.
     * @param {HabitMilestoneFindUniqueArgs} args - Arguments to find a HabitMilestone
     * @example
     * // Get one HabitMilestone
     * const habitMilestone = await prisma.habitMilestone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitMilestoneFindUniqueArgs>(args: SelectSubset<T, HabitMilestoneFindUniqueArgs<ExtArgs>>): Prisma__HabitMilestoneClient<$Result.GetResult<Prisma.$HabitMilestonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HabitMilestone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitMilestoneFindUniqueOrThrowArgs} args - Arguments to find a HabitMilestone
     * @example
     * // Get one HabitMilestone
     * const habitMilestone = await prisma.habitMilestone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitMilestoneFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitMilestoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitMilestoneClient<$Result.GetResult<Prisma.$HabitMilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HabitMilestone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitMilestoneFindFirstArgs} args - Arguments to find a HabitMilestone
     * @example
     * // Get one HabitMilestone
     * const habitMilestone = await prisma.habitMilestone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitMilestoneFindFirstArgs>(args?: SelectSubset<T, HabitMilestoneFindFirstArgs<ExtArgs>>): Prisma__HabitMilestoneClient<$Result.GetResult<Prisma.$HabitMilestonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HabitMilestone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitMilestoneFindFirstOrThrowArgs} args - Arguments to find a HabitMilestone
     * @example
     * // Get one HabitMilestone
     * const habitMilestone = await prisma.habitMilestone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitMilestoneFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitMilestoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitMilestoneClient<$Result.GetResult<Prisma.$HabitMilestonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HabitMilestones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitMilestoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HabitMilestones
     * const habitMilestones = await prisma.habitMilestone.findMany()
     * 
     * // Get first 10 HabitMilestones
     * const habitMilestones = await prisma.habitMilestone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitMilestoneWithIdOnly = await prisma.habitMilestone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitMilestoneFindManyArgs>(args?: SelectSubset<T, HabitMilestoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitMilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HabitMilestone.
     * @param {HabitMilestoneCreateArgs} args - Arguments to create a HabitMilestone.
     * @example
     * // Create one HabitMilestone
     * const HabitMilestone = await prisma.habitMilestone.create({
     *   data: {
     *     // ... data to create a HabitMilestone
     *   }
     * })
     * 
     */
    create<T extends HabitMilestoneCreateArgs>(args: SelectSubset<T, HabitMilestoneCreateArgs<ExtArgs>>): Prisma__HabitMilestoneClient<$Result.GetResult<Prisma.$HabitMilestonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HabitMilestones.
     * @param {HabitMilestoneCreateManyArgs} args - Arguments to create many HabitMilestones.
     * @example
     * // Create many HabitMilestones
     * const habitMilestone = await prisma.habitMilestone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitMilestoneCreateManyArgs>(args?: SelectSubset<T, HabitMilestoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HabitMilestones and returns the data saved in the database.
     * @param {HabitMilestoneCreateManyAndReturnArgs} args - Arguments to create many HabitMilestones.
     * @example
     * // Create many HabitMilestones
     * const habitMilestone = await prisma.habitMilestone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HabitMilestones and only return the `id`
     * const habitMilestoneWithIdOnly = await prisma.habitMilestone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitMilestoneCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitMilestoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitMilestonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HabitMilestone.
     * @param {HabitMilestoneDeleteArgs} args - Arguments to delete one HabitMilestone.
     * @example
     * // Delete one HabitMilestone
     * const HabitMilestone = await prisma.habitMilestone.delete({
     *   where: {
     *     // ... filter to delete one HabitMilestone
     *   }
     * })
     * 
     */
    delete<T extends HabitMilestoneDeleteArgs>(args: SelectSubset<T, HabitMilestoneDeleteArgs<ExtArgs>>): Prisma__HabitMilestoneClient<$Result.GetResult<Prisma.$HabitMilestonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HabitMilestone.
     * @param {HabitMilestoneUpdateArgs} args - Arguments to update one HabitMilestone.
     * @example
     * // Update one HabitMilestone
     * const habitMilestone = await prisma.habitMilestone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitMilestoneUpdateArgs>(args: SelectSubset<T, HabitMilestoneUpdateArgs<ExtArgs>>): Prisma__HabitMilestoneClient<$Result.GetResult<Prisma.$HabitMilestonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HabitMilestones.
     * @param {HabitMilestoneDeleteManyArgs} args - Arguments to filter HabitMilestones to delete.
     * @example
     * // Delete a few HabitMilestones
     * const { count } = await prisma.habitMilestone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitMilestoneDeleteManyArgs>(args?: SelectSubset<T, HabitMilestoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabitMilestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitMilestoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HabitMilestones
     * const habitMilestone = await prisma.habitMilestone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitMilestoneUpdateManyArgs>(args: SelectSubset<T, HabitMilestoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabitMilestones and returns the data updated in the database.
     * @param {HabitMilestoneUpdateManyAndReturnArgs} args - Arguments to update many HabitMilestones.
     * @example
     * // Update many HabitMilestones
     * const habitMilestone = await prisma.habitMilestone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HabitMilestones and only return the `id`
     * const habitMilestoneWithIdOnly = await prisma.habitMilestone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HabitMilestoneUpdateManyAndReturnArgs>(args: SelectSubset<T, HabitMilestoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitMilestonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HabitMilestone.
     * @param {HabitMilestoneUpsertArgs} args - Arguments to update or create a HabitMilestone.
     * @example
     * // Update or create a HabitMilestone
     * const habitMilestone = await prisma.habitMilestone.upsert({
     *   create: {
     *     // ... data to create a HabitMilestone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HabitMilestone we want to update
     *   }
     * })
     */
    upsert<T extends HabitMilestoneUpsertArgs>(args: SelectSubset<T, HabitMilestoneUpsertArgs<ExtArgs>>): Prisma__HabitMilestoneClient<$Result.GetResult<Prisma.$HabitMilestonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HabitMilestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitMilestoneCountArgs} args - Arguments to filter HabitMilestones to count.
     * @example
     * // Count the number of HabitMilestones
     * const count = await prisma.habitMilestone.count({
     *   where: {
     *     // ... the filter for the HabitMilestones we want to count
     *   }
     * })
    **/
    count<T extends HabitMilestoneCountArgs>(
      args?: Subset<T, HabitMilestoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitMilestoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HabitMilestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitMilestoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HabitMilestoneAggregateArgs>(args: Subset<T, HabitMilestoneAggregateArgs>): Prisma.PrismaPromise<GetHabitMilestoneAggregateType<T>>

    /**
     * Group by HabitMilestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitMilestoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HabitMilestoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitMilestoneGroupByArgs['orderBy'] }
        : { orderBy?: HabitMilestoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HabitMilestoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitMilestoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HabitMilestone model
   */
  readonly fields: HabitMilestoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HabitMilestone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitMilestoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habit<T extends HabitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitDefaultArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    milestone<T extends MilestoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MilestoneDefaultArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HabitMilestone model
   */
  interface HabitMilestoneFieldRefs {
    readonly id: FieldRef<"HabitMilestone", 'String'>
    readonly habitId: FieldRef<"HabitMilestone", 'String'>
    readonly milestoneId: FieldRef<"HabitMilestone", 'String'>
    readonly createdAt: FieldRef<"HabitMilestone", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HabitMilestone findUnique
   */
  export type HabitMilestoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitMilestone
     */
    select?: HabitMilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitMilestone
     */
    omit?: HabitMilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitMilestoneInclude<ExtArgs> | null
    /**
     * Filter, which HabitMilestone to fetch.
     */
    where: HabitMilestoneWhereUniqueInput
  }

  /**
   * HabitMilestone findUniqueOrThrow
   */
  export type HabitMilestoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitMilestone
     */
    select?: HabitMilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitMilestone
     */
    omit?: HabitMilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitMilestoneInclude<ExtArgs> | null
    /**
     * Filter, which HabitMilestone to fetch.
     */
    where: HabitMilestoneWhereUniqueInput
  }

  /**
   * HabitMilestone findFirst
   */
  export type HabitMilestoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitMilestone
     */
    select?: HabitMilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitMilestone
     */
    omit?: HabitMilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitMilestoneInclude<ExtArgs> | null
    /**
     * Filter, which HabitMilestone to fetch.
     */
    where?: HabitMilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitMilestones to fetch.
     */
    orderBy?: HabitMilestoneOrderByWithRelationInput | HabitMilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitMilestones.
     */
    cursor?: HabitMilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitMilestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitMilestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitMilestones.
     */
    distinct?: HabitMilestoneScalarFieldEnum | HabitMilestoneScalarFieldEnum[]
  }

  /**
   * HabitMilestone findFirstOrThrow
   */
  export type HabitMilestoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitMilestone
     */
    select?: HabitMilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitMilestone
     */
    omit?: HabitMilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitMilestoneInclude<ExtArgs> | null
    /**
     * Filter, which HabitMilestone to fetch.
     */
    where?: HabitMilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitMilestones to fetch.
     */
    orderBy?: HabitMilestoneOrderByWithRelationInput | HabitMilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitMilestones.
     */
    cursor?: HabitMilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitMilestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitMilestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitMilestones.
     */
    distinct?: HabitMilestoneScalarFieldEnum | HabitMilestoneScalarFieldEnum[]
  }

  /**
   * HabitMilestone findMany
   */
  export type HabitMilestoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitMilestone
     */
    select?: HabitMilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitMilestone
     */
    omit?: HabitMilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitMilestoneInclude<ExtArgs> | null
    /**
     * Filter, which HabitMilestones to fetch.
     */
    where?: HabitMilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitMilestones to fetch.
     */
    orderBy?: HabitMilestoneOrderByWithRelationInput | HabitMilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HabitMilestones.
     */
    cursor?: HabitMilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitMilestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitMilestones.
     */
    skip?: number
    distinct?: HabitMilestoneScalarFieldEnum | HabitMilestoneScalarFieldEnum[]
  }

  /**
   * HabitMilestone create
   */
  export type HabitMilestoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitMilestone
     */
    select?: HabitMilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitMilestone
     */
    omit?: HabitMilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitMilestoneInclude<ExtArgs> | null
    /**
     * The data needed to create a HabitMilestone.
     */
    data: XOR<HabitMilestoneCreateInput, HabitMilestoneUncheckedCreateInput>
  }

  /**
   * HabitMilestone createMany
   */
  export type HabitMilestoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HabitMilestones.
     */
    data: HabitMilestoneCreateManyInput | HabitMilestoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HabitMilestone createManyAndReturn
   */
  export type HabitMilestoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitMilestone
     */
    select?: HabitMilestoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HabitMilestone
     */
    omit?: HabitMilestoneOmit<ExtArgs> | null
    /**
     * The data used to create many HabitMilestones.
     */
    data: HabitMilestoneCreateManyInput | HabitMilestoneCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitMilestoneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HabitMilestone update
   */
  export type HabitMilestoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitMilestone
     */
    select?: HabitMilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitMilestone
     */
    omit?: HabitMilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitMilestoneInclude<ExtArgs> | null
    /**
     * The data needed to update a HabitMilestone.
     */
    data: XOR<HabitMilestoneUpdateInput, HabitMilestoneUncheckedUpdateInput>
    /**
     * Choose, which HabitMilestone to update.
     */
    where: HabitMilestoneWhereUniqueInput
  }

  /**
   * HabitMilestone updateMany
   */
  export type HabitMilestoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HabitMilestones.
     */
    data: XOR<HabitMilestoneUpdateManyMutationInput, HabitMilestoneUncheckedUpdateManyInput>
    /**
     * Filter which HabitMilestones to update
     */
    where?: HabitMilestoneWhereInput
    /**
     * Limit how many HabitMilestones to update.
     */
    limit?: number
  }

  /**
   * HabitMilestone updateManyAndReturn
   */
  export type HabitMilestoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitMilestone
     */
    select?: HabitMilestoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HabitMilestone
     */
    omit?: HabitMilestoneOmit<ExtArgs> | null
    /**
     * The data used to update HabitMilestones.
     */
    data: XOR<HabitMilestoneUpdateManyMutationInput, HabitMilestoneUncheckedUpdateManyInput>
    /**
     * Filter which HabitMilestones to update
     */
    where?: HabitMilestoneWhereInput
    /**
     * Limit how many HabitMilestones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitMilestoneIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HabitMilestone upsert
   */
  export type HabitMilestoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitMilestone
     */
    select?: HabitMilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitMilestone
     */
    omit?: HabitMilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitMilestoneInclude<ExtArgs> | null
    /**
     * The filter to search for the HabitMilestone to update in case it exists.
     */
    where: HabitMilestoneWhereUniqueInput
    /**
     * In case the HabitMilestone found by the `where` argument doesn't exist, create a new HabitMilestone with this data.
     */
    create: XOR<HabitMilestoneCreateInput, HabitMilestoneUncheckedCreateInput>
    /**
     * In case the HabitMilestone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitMilestoneUpdateInput, HabitMilestoneUncheckedUpdateInput>
  }

  /**
   * HabitMilestone delete
   */
  export type HabitMilestoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitMilestone
     */
    select?: HabitMilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitMilestone
     */
    omit?: HabitMilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitMilestoneInclude<ExtArgs> | null
    /**
     * Filter which HabitMilestone to delete.
     */
    where: HabitMilestoneWhereUniqueInput
  }

  /**
   * HabitMilestone deleteMany
   */
  export type HabitMilestoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitMilestones to delete
     */
    where?: HabitMilestoneWhereInput
    /**
     * Limit how many HabitMilestones to delete.
     */
    limit?: number
  }

  /**
   * HabitMilestone without action
   */
  export type HabitMilestoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitMilestone
     */
    select?: HabitMilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitMilestone
     */
    omit?: HabitMilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitMilestoneInclude<ExtArgs> | null
  }


  /**
   * Model Reflection
   */

  export type AggregateReflection = {
    _count: ReflectionCountAggregateOutputType | null
    _avg: ReflectionAvgAggregateOutputType | null
    _sum: ReflectionSumAggregateOutputType | null
    _min: ReflectionMinAggregateOutputType | null
    _max: ReflectionMaxAggregateOutputType | null
  }

  export type ReflectionAvgAggregateOutputType = {
    mood: number | null
  }

  export type ReflectionSumAggregateOutputType = {
    mood: number | null
  }

  export type ReflectionMinAggregateOutputType = {
    id: string | null
    habitId: string | null
    habitLogId: string | null
    userId: string | null
    feeling: string | null
    mood: number | null
    notes: string | null
    aiResponse: string | null
    suggestion: string | null
    createdAt: Date | null
  }

  export type ReflectionMaxAggregateOutputType = {
    id: string | null
    habitId: string | null
    habitLogId: string | null
    userId: string | null
    feeling: string | null
    mood: number | null
    notes: string | null
    aiResponse: string | null
    suggestion: string | null
    createdAt: Date | null
  }

  export type ReflectionCountAggregateOutputType = {
    id: number
    habitId: number
    habitLogId: number
    userId: number
    feeling: number
    mood: number
    notes: number
    aiResponse: number
    suggestion: number
    createdAt: number
    _all: number
  }


  export type ReflectionAvgAggregateInputType = {
    mood?: true
  }

  export type ReflectionSumAggregateInputType = {
    mood?: true
  }

  export type ReflectionMinAggregateInputType = {
    id?: true
    habitId?: true
    habitLogId?: true
    userId?: true
    feeling?: true
    mood?: true
    notes?: true
    aiResponse?: true
    suggestion?: true
    createdAt?: true
  }

  export type ReflectionMaxAggregateInputType = {
    id?: true
    habitId?: true
    habitLogId?: true
    userId?: true
    feeling?: true
    mood?: true
    notes?: true
    aiResponse?: true
    suggestion?: true
    createdAt?: true
  }

  export type ReflectionCountAggregateInputType = {
    id?: true
    habitId?: true
    habitLogId?: true
    userId?: true
    feeling?: true
    mood?: true
    notes?: true
    aiResponse?: true
    suggestion?: true
    createdAt?: true
    _all?: true
  }

  export type ReflectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reflection to aggregate.
     */
    where?: ReflectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reflections to fetch.
     */
    orderBy?: ReflectionOrderByWithRelationInput | ReflectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReflectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reflections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reflections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reflections
    **/
    _count?: true | ReflectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReflectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReflectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReflectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReflectionMaxAggregateInputType
  }

  export type GetReflectionAggregateType<T extends ReflectionAggregateArgs> = {
        [P in keyof T & keyof AggregateReflection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReflection[P]>
      : GetScalarType<T[P], AggregateReflection[P]>
  }




  export type ReflectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReflectionWhereInput
    orderBy?: ReflectionOrderByWithAggregationInput | ReflectionOrderByWithAggregationInput[]
    by: ReflectionScalarFieldEnum[] | ReflectionScalarFieldEnum
    having?: ReflectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReflectionCountAggregateInputType | true
    _avg?: ReflectionAvgAggregateInputType
    _sum?: ReflectionSumAggregateInputType
    _min?: ReflectionMinAggregateInputType
    _max?: ReflectionMaxAggregateInputType
  }

  export type ReflectionGroupByOutputType = {
    id: string
    habitId: string
    habitLogId: string
    userId: string
    feeling: string
    mood: number | null
    notes: string | null
    aiResponse: string | null
    suggestion: string | null
    createdAt: Date
    _count: ReflectionCountAggregateOutputType | null
    _avg: ReflectionAvgAggregateOutputType | null
    _sum: ReflectionSumAggregateOutputType | null
    _min: ReflectionMinAggregateOutputType | null
    _max: ReflectionMaxAggregateOutputType | null
  }

  type GetReflectionGroupByPayload<T extends ReflectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReflectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReflectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReflectionGroupByOutputType[P]>
            : GetScalarType<T[P], ReflectionGroupByOutputType[P]>
        }
      >
    >


  export type ReflectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    habitLogId?: boolean
    userId?: boolean
    feeling?: boolean
    mood?: boolean
    notes?: boolean
    aiResponse?: boolean
    suggestion?: boolean
    createdAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    habitLog?: boolean | HabitLogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reflection"]>

  export type ReflectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    habitLogId?: boolean
    userId?: boolean
    feeling?: boolean
    mood?: boolean
    notes?: boolean
    aiResponse?: boolean
    suggestion?: boolean
    createdAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    habitLog?: boolean | HabitLogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reflection"]>

  export type ReflectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    habitLogId?: boolean
    userId?: boolean
    feeling?: boolean
    mood?: boolean
    notes?: boolean
    aiResponse?: boolean
    suggestion?: boolean
    createdAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    habitLog?: boolean | HabitLogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reflection"]>

  export type ReflectionSelectScalar = {
    id?: boolean
    habitId?: boolean
    habitLogId?: boolean
    userId?: boolean
    feeling?: boolean
    mood?: boolean
    notes?: boolean
    aiResponse?: boolean
    suggestion?: boolean
    createdAt?: boolean
  }

  export type ReflectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "habitId" | "habitLogId" | "userId" | "feeling" | "mood" | "notes" | "aiResponse" | "suggestion" | "createdAt", ExtArgs["result"]["reflection"]>
  export type ReflectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    habitLog?: boolean | HabitLogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReflectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    habitLog?: boolean | HabitLogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReflectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    habitLog?: boolean | HabitLogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReflectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reflection"
    objects: {
      habit: Prisma.$HabitPayload<ExtArgs>
      habitLog: Prisma.$HabitLogPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      habitId: string
      habitLogId: string
      userId: string
      feeling: string
      mood: number | null
      notes: string | null
      aiResponse: string | null
      suggestion: string | null
      createdAt: Date
    }, ExtArgs["result"]["reflection"]>
    composites: {}
  }

  type ReflectionGetPayload<S extends boolean | null | undefined | ReflectionDefaultArgs> = $Result.GetResult<Prisma.$ReflectionPayload, S>

  type ReflectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReflectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReflectionCountAggregateInputType | true
    }

  export interface ReflectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reflection'], meta: { name: 'Reflection' } }
    /**
     * Find zero or one Reflection that matches the filter.
     * @param {ReflectionFindUniqueArgs} args - Arguments to find a Reflection
     * @example
     * // Get one Reflection
     * const reflection = await prisma.reflection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReflectionFindUniqueArgs>(args: SelectSubset<T, ReflectionFindUniqueArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reflection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReflectionFindUniqueOrThrowArgs} args - Arguments to find a Reflection
     * @example
     * // Get one Reflection
     * const reflection = await prisma.reflection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReflectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ReflectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reflection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectionFindFirstArgs} args - Arguments to find a Reflection
     * @example
     * // Get one Reflection
     * const reflection = await prisma.reflection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReflectionFindFirstArgs>(args?: SelectSubset<T, ReflectionFindFirstArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reflection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectionFindFirstOrThrowArgs} args - Arguments to find a Reflection
     * @example
     * // Get one Reflection
     * const reflection = await prisma.reflection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReflectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ReflectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reflections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reflections
     * const reflections = await prisma.reflection.findMany()
     * 
     * // Get first 10 Reflections
     * const reflections = await prisma.reflection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reflectionWithIdOnly = await prisma.reflection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReflectionFindManyArgs>(args?: SelectSubset<T, ReflectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reflection.
     * @param {ReflectionCreateArgs} args - Arguments to create a Reflection.
     * @example
     * // Create one Reflection
     * const Reflection = await prisma.reflection.create({
     *   data: {
     *     // ... data to create a Reflection
     *   }
     * })
     * 
     */
    create<T extends ReflectionCreateArgs>(args: SelectSubset<T, ReflectionCreateArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reflections.
     * @param {ReflectionCreateManyArgs} args - Arguments to create many Reflections.
     * @example
     * // Create many Reflections
     * const reflection = await prisma.reflection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReflectionCreateManyArgs>(args?: SelectSubset<T, ReflectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reflections and returns the data saved in the database.
     * @param {ReflectionCreateManyAndReturnArgs} args - Arguments to create many Reflections.
     * @example
     * // Create many Reflections
     * const reflection = await prisma.reflection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reflections and only return the `id`
     * const reflectionWithIdOnly = await prisma.reflection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReflectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ReflectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reflection.
     * @param {ReflectionDeleteArgs} args - Arguments to delete one Reflection.
     * @example
     * // Delete one Reflection
     * const Reflection = await prisma.reflection.delete({
     *   where: {
     *     // ... filter to delete one Reflection
     *   }
     * })
     * 
     */
    delete<T extends ReflectionDeleteArgs>(args: SelectSubset<T, ReflectionDeleteArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reflection.
     * @param {ReflectionUpdateArgs} args - Arguments to update one Reflection.
     * @example
     * // Update one Reflection
     * const reflection = await prisma.reflection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReflectionUpdateArgs>(args: SelectSubset<T, ReflectionUpdateArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reflections.
     * @param {ReflectionDeleteManyArgs} args - Arguments to filter Reflections to delete.
     * @example
     * // Delete a few Reflections
     * const { count } = await prisma.reflection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReflectionDeleteManyArgs>(args?: SelectSubset<T, ReflectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reflections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reflections
     * const reflection = await prisma.reflection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReflectionUpdateManyArgs>(args: SelectSubset<T, ReflectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reflections and returns the data updated in the database.
     * @param {ReflectionUpdateManyAndReturnArgs} args - Arguments to update many Reflections.
     * @example
     * // Update many Reflections
     * const reflection = await prisma.reflection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reflections and only return the `id`
     * const reflectionWithIdOnly = await prisma.reflection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReflectionUpdateManyAndReturnArgs>(args: SelectSubset<T, ReflectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reflection.
     * @param {ReflectionUpsertArgs} args - Arguments to update or create a Reflection.
     * @example
     * // Update or create a Reflection
     * const reflection = await prisma.reflection.upsert({
     *   create: {
     *     // ... data to create a Reflection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reflection we want to update
     *   }
     * })
     */
    upsert<T extends ReflectionUpsertArgs>(args: SelectSubset<T, ReflectionUpsertArgs<ExtArgs>>): Prisma__ReflectionClient<$Result.GetResult<Prisma.$ReflectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reflections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectionCountArgs} args - Arguments to filter Reflections to count.
     * @example
     * // Count the number of Reflections
     * const count = await prisma.reflection.count({
     *   where: {
     *     // ... the filter for the Reflections we want to count
     *   }
     * })
    **/
    count<T extends ReflectionCountArgs>(
      args?: Subset<T, ReflectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReflectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reflection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReflectionAggregateArgs>(args: Subset<T, ReflectionAggregateArgs>): Prisma.PrismaPromise<GetReflectionAggregateType<T>>

    /**
     * Group by Reflection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReflectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReflectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReflectionGroupByArgs['orderBy'] }
        : { orderBy?: ReflectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReflectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReflectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reflection model
   */
  readonly fields: ReflectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reflection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReflectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habit<T extends HabitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitDefaultArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    habitLog<T extends HabitLogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitLogDefaultArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reflection model
   */
  interface ReflectionFieldRefs {
    readonly id: FieldRef<"Reflection", 'String'>
    readonly habitId: FieldRef<"Reflection", 'String'>
    readonly habitLogId: FieldRef<"Reflection", 'String'>
    readonly userId: FieldRef<"Reflection", 'String'>
    readonly feeling: FieldRef<"Reflection", 'String'>
    readonly mood: FieldRef<"Reflection", 'Int'>
    readonly notes: FieldRef<"Reflection", 'String'>
    readonly aiResponse: FieldRef<"Reflection", 'String'>
    readonly suggestion: FieldRef<"Reflection", 'String'>
    readonly createdAt: FieldRef<"Reflection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reflection findUnique
   */
  export type ReflectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * Filter, which Reflection to fetch.
     */
    where: ReflectionWhereUniqueInput
  }

  /**
   * Reflection findUniqueOrThrow
   */
  export type ReflectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * Filter, which Reflection to fetch.
     */
    where: ReflectionWhereUniqueInput
  }

  /**
   * Reflection findFirst
   */
  export type ReflectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * Filter, which Reflection to fetch.
     */
    where?: ReflectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reflections to fetch.
     */
    orderBy?: ReflectionOrderByWithRelationInput | ReflectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reflections.
     */
    cursor?: ReflectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reflections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reflections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reflections.
     */
    distinct?: ReflectionScalarFieldEnum | ReflectionScalarFieldEnum[]
  }

  /**
   * Reflection findFirstOrThrow
   */
  export type ReflectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * Filter, which Reflection to fetch.
     */
    where?: ReflectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reflections to fetch.
     */
    orderBy?: ReflectionOrderByWithRelationInput | ReflectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reflections.
     */
    cursor?: ReflectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reflections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reflections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reflections.
     */
    distinct?: ReflectionScalarFieldEnum | ReflectionScalarFieldEnum[]
  }

  /**
   * Reflection findMany
   */
  export type ReflectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * Filter, which Reflections to fetch.
     */
    where?: ReflectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reflections to fetch.
     */
    orderBy?: ReflectionOrderByWithRelationInput | ReflectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reflections.
     */
    cursor?: ReflectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reflections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reflections.
     */
    skip?: number
    distinct?: ReflectionScalarFieldEnum | ReflectionScalarFieldEnum[]
  }

  /**
   * Reflection create
   */
  export type ReflectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Reflection.
     */
    data: XOR<ReflectionCreateInput, ReflectionUncheckedCreateInput>
  }

  /**
   * Reflection createMany
   */
  export type ReflectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reflections.
     */
    data: ReflectionCreateManyInput | ReflectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reflection createManyAndReturn
   */
  export type ReflectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * The data used to create many Reflections.
     */
    data: ReflectionCreateManyInput | ReflectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reflection update
   */
  export type ReflectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Reflection.
     */
    data: XOR<ReflectionUpdateInput, ReflectionUncheckedUpdateInput>
    /**
     * Choose, which Reflection to update.
     */
    where: ReflectionWhereUniqueInput
  }

  /**
   * Reflection updateMany
   */
  export type ReflectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reflections.
     */
    data: XOR<ReflectionUpdateManyMutationInput, ReflectionUncheckedUpdateManyInput>
    /**
     * Filter which Reflections to update
     */
    where?: ReflectionWhereInput
    /**
     * Limit how many Reflections to update.
     */
    limit?: number
  }

  /**
   * Reflection updateManyAndReturn
   */
  export type ReflectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * The data used to update Reflections.
     */
    data: XOR<ReflectionUpdateManyMutationInput, ReflectionUncheckedUpdateManyInput>
    /**
     * Filter which Reflections to update
     */
    where?: ReflectionWhereInput
    /**
     * Limit how many Reflections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reflection upsert
   */
  export type ReflectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Reflection to update in case it exists.
     */
    where: ReflectionWhereUniqueInput
    /**
     * In case the Reflection found by the `where` argument doesn't exist, create a new Reflection with this data.
     */
    create: XOR<ReflectionCreateInput, ReflectionUncheckedCreateInput>
    /**
     * In case the Reflection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReflectionUpdateInput, ReflectionUncheckedUpdateInput>
  }

  /**
   * Reflection delete
   */
  export type ReflectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
    /**
     * Filter which Reflection to delete.
     */
    where: ReflectionWhereUniqueInput
  }

  /**
   * Reflection deleteMany
   */
  export type ReflectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reflections to delete
     */
    where?: ReflectionWhereInput
    /**
     * Limit how many Reflections to delete.
     */
    limit?: number
  }

  /**
   * Reflection without action
   */
  export type ReflectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reflection
     */
    select?: ReflectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reflection
     */
    omit?: ReflectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReflectionInclude<ExtArgs> | null
  }


  /**
   * Model HabitCompletion
   */

  export type AggregateHabitCompletion = {
    _count: HabitCompletionCountAggregateOutputType | null
    _min: HabitCompletionMinAggregateOutputType | null
    _max: HabitCompletionMaxAggregateOutputType | null
  }

  export type HabitCompletionMinAggregateOutputType = {
    id: string | null
    habitId: string | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type HabitCompletionMaxAggregateOutputType = {
    id: string | null
    habitId: string | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type HabitCompletionCountAggregateOutputType = {
    id: number
    habitId: number
    completedAt: number
    createdAt: number
    _all: number
  }


  export type HabitCompletionMinAggregateInputType = {
    id?: true
    habitId?: true
    completedAt?: true
    createdAt?: true
  }

  export type HabitCompletionMaxAggregateInputType = {
    id?: true
    habitId?: true
    completedAt?: true
    createdAt?: true
  }

  export type HabitCompletionCountAggregateInputType = {
    id?: true
    habitId?: true
    completedAt?: true
    createdAt?: true
    _all?: true
  }

  export type HabitCompletionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitCompletion to aggregate.
     */
    where?: HabitCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitCompletions to fetch.
     */
    orderBy?: HabitCompletionOrderByWithRelationInput | HabitCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HabitCompletions
    **/
    _count?: true | HabitCompletionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitCompletionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitCompletionMaxAggregateInputType
  }

  export type GetHabitCompletionAggregateType<T extends HabitCompletionAggregateArgs> = {
        [P in keyof T & keyof AggregateHabitCompletion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabitCompletion[P]>
      : GetScalarType<T[P], AggregateHabitCompletion[P]>
  }




  export type HabitCompletionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitCompletionWhereInput
    orderBy?: HabitCompletionOrderByWithAggregationInput | HabitCompletionOrderByWithAggregationInput[]
    by: HabitCompletionScalarFieldEnum[] | HabitCompletionScalarFieldEnum
    having?: HabitCompletionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitCompletionCountAggregateInputType | true
    _min?: HabitCompletionMinAggregateInputType
    _max?: HabitCompletionMaxAggregateInputType
  }

  export type HabitCompletionGroupByOutputType = {
    id: string
    habitId: string
    completedAt: Date
    createdAt: Date
    _count: HabitCompletionCountAggregateOutputType | null
    _min: HabitCompletionMinAggregateOutputType | null
    _max: HabitCompletionMaxAggregateOutputType | null
  }

  type GetHabitCompletionGroupByPayload<T extends HabitCompletionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitCompletionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitCompletionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitCompletionGroupByOutputType[P]>
            : GetScalarType<T[P], HabitCompletionGroupByOutputType[P]>
        }
      >
    >


  export type HabitCompletionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    completedAt?: boolean
    createdAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitCompletion"]>

  export type HabitCompletionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    completedAt?: boolean
    createdAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitCompletion"]>

  export type HabitCompletionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    completedAt?: boolean
    createdAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitCompletion"]>

  export type HabitCompletionSelectScalar = {
    id?: boolean
    habitId?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }

  export type HabitCompletionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "habitId" | "completedAt" | "createdAt", ExtArgs["result"]["habitCompletion"]>
  export type HabitCompletionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }
  export type HabitCompletionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }
  export type HabitCompletionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }

  export type $HabitCompletionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HabitCompletion"
    objects: {
      habit: Prisma.$HabitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      habitId: string
      completedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["habitCompletion"]>
    composites: {}
  }

  type HabitCompletionGetPayload<S extends boolean | null | undefined | HabitCompletionDefaultArgs> = $Result.GetResult<Prisma.$HabitCompletionPayload, S>

  type HabitCompletionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitCompletionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitCompletionCountAggregateInputType | true
    }

  export interface HabitCompletionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HabitCompletion'], meta: { name: 'HabitCompletion' } }
    /**
     * Find zero or one HabitCompletion that matches the filter.
     * @param {HabitCompletionFindUniqueArgs} args - Arguments to find a HabitCompletion
     * @example
     * // Get one HabitCompletion
     * const habitCompletion = await prisma.habitCompletion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitCompletionFindUniqueArgs>(args: SelectSubset<T, HabitCompletionFindUniqueArgs<ExtArgs>>): Prisma__HabitCompletionClient<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HabitCompletion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitCompletionFindUniqueOrThrowArgs} args - Arguments to find a HabitCompletion
     * @example
     * // Get one HabitCompletion
     * const habitCompletion = await prisma.habitCompletion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitCompletionFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitCompletionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitCompletionClient<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HabitCompletion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCompletionFindFirstArgs} args - Arguments to find a HabitCompletion
     * @example
     * // Get one HabitCompletion
     * const habitCompletion = await prisma.habitCompletion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitCompletionFindFirstArgs>(args?: SelectSubset<T, HabitCompletionFindFirstArgs<ExtArgs>>): Prisma__HabitCompletionClient<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HabitCompletion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCompletionFindFirstOrThrowArgs} args - Arguments to find a HabitCompletion
     * @example
     * // Get one HabitCompletion
     * const habitCompletion = await prisma.habitCompletion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitCompletionFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitCompletionFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitCompletionClient<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HabitCompletions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCompletionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HabitCompletions
     * const habitCompletions = await prisma.habitCompletion.findMany()
     * 
     * // Get first 10 HabitCompletions
     * const habitCompletions = await prisma.habitCompletion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitCompletionWithIdOnly = await prisma.habitCompletion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitCompletionFindManyArgs>(args?: SelectSubset<T, HabitCompletionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HabitCompletion.
     * @param {HabitCompletionCreateArgs} args - Arguments to create a HabitCompletion.
     * @example
     * // Create one HabitCompletion
     * const HabitCompletion = await prisma.habitCompletion.create({
     *   data: {
     *     // ... data to create a HabitCompletion
     *   }
     * })
     * 
     */
    create<T extends HabitCompletionCreateArgs>(args: SelectSubset<T, HabitCompletionCreateArgs<ExtArgs>>): Prisma__HabitCompletionClient<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HabitCompletions.
     * @param {HabitCompletionCreateManyArgs} args - Arguments to create many HabitCompletions.
     * @example
     * // Create many HabitCompletions
     * const habitCompletion = await prisma.habitCompletion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitCompletionCreateManyArgs>(args?: SelectSubset<T, HabitCompletionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HabitCompletions and returns the data saved in the database.
     * @param {HabitCompletionCreateManyAndReturnArgs} args - Arguments to create many HabitCompletions.
     * @example
     * // Create many HabitCompletions
     * const habitCompletion = await prisma.habitCompletion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HabitCompletions and only return the `id`
     * const habitCompletionWithIdOnly = await prisma.habitCompletion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitCompletionCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitCompletionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HabitCompletion.
     * @param {HabitCompletionDeleteArgs} args - Arguments to delete one HabitCompletion.
     * @example
     * // Delete one HabitCompletion
     * const HabitCompletion = await prisma.habitCompletion.delete({
     *   where: {
     *     // ... filter to delete one HabitCompletion
     *   }
     * })
     * 
     */
    delete<T extends HabitCompletionDeleteArgs>(args: SelectSubset<T, HabitCompletionDeleteArgs<ExtArgs>>): Prisma__HabitCompletionClient<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HabitCompletion.
     * @param {HabitCompletionUpdateArgs} args - Arguments to update one HabitCompletion.
     * @example
     * // Update one HabitCompletion
     * const habitCompletion = await prisma.habitCompletion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitCompletionUpdateArgs>(args: SelectSubset<T, HabitCompletionUpdateArgs<ExtArgs>>): Prisma__HabitCompletionClient<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HabitCompletions.
     * @param {HabitCompletionDeleteManyArgs} args - Arguments to filter HabitCompletions to delete.
     * @example
     * // Delete a few HabitCompletions
     * const { count } = await prisma.habitCompletion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitCompletionDeleteManyArgs>(args?: SelectSubset<T, HabitCompletionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabitCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCompletionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HabitCompletions
     * const habitCompletion = await prisma.habitCompletion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitCompletionUpdateManyArgs>(args: SelectSubset<T, HabitCompletionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabitCompletions and returns the data updated in the database.
     * @param {HabitCompletionUpdateManyAndReturnArgs} args - Arguments to update many HabitCompletions.
     * @example
     * // Update many HabitCompletions
     * const habitCompletion = await prisma.habitCompletion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HabitCompletions and only return the `id`
     * const habitCompletionWithIdOnly = await prisma.habitCompletion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HabitCompletionUpdateManyAndReturnArgs>(args: SelectSubset<T, HabitCompletionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HabitCompletion.
     * @param {HabitCompletionUpsertArgs} args - Arguments to update or create a HabitCompletion.
     * @example
     * // Update or create a HabitCompletion
     * const habitCompletion = await prisma.habitCompletion.upsert({
     *   create: {
     *     // ... data to create a HabitCompletion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HabitCompletion we want to update
     *   }
     * })
     */
    upsert<T extends HabitCompletionUpsertArgs>(args: SelectSubset<T, HabitCompletionUpsertArgs<ExtArgs>>): Prisma__HabitCompletionClient<$Result.GetResult<Prisma.$HabitCompletionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HabitCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCompletionCountArgs} args - Arguments to filter HabitCompletions to count.
     * @example
     * // Count the number of HabitCompletions
     * const count = await prisma.habitCompletion.count({
     *   where: {
     *     // ... the filter for the HabitCompletions we want to count
     *   }
     * })
    **/
    count<T extends HabitCompletionCountArgs>(
      args?: Subset<T, HabitCompletionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitCompletionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HabitCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCompletionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HabitCompletionAggregateArgs>(args: Subset<T, HabitCompletionAggregateArgs>): Prisma.PrismaPromise<GetHabitCompletionAggregateType<T>>

    /**
     * Group by HabitCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCompletionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HabitCompletionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitCompletionGroupByArgs['orderBy'] }
        : { orderBy?: HabitCompletionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HabitCompletionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitCompletionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HabitCompletion model
   */
  readonly fields: HabitCompletionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HabitCompletion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitCompletionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habit<T extends HabitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitDefaultArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HabitCompletion model
   */
  interface HabitCompletionFieldRefs {
    readonly id: FieldRef<"HabitCompletion", 'String'>
    readonly habitId: FieldRef<"HabitCompletion", 'String'>
    readonly completedAt: FieldRef<"HabitCompletion", 'DateTime'>
    readonly createdAt: FieldRef<"HabitCompletion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HabitCompletion findUnique
   */
  export type HabitCompletionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitCompletion
     */
    omit?: HabitCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionInclude<ExtArgs> | null
    /**
     * Filter, which HabitCompletion to fetch.
     */
    where: HabitCompletionWhereUniqueInput
  }

  /**
   * HabitCompletion findUniqueOrThrow
   */
  export type HabitCompletionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitCompletion
     */
    omit?: HabitCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionInclude<ExtArgs> | null
    /**
     * Filter, which HabitCompletion to fetch.
     */
    where: HabitCompletionWhereUniqueInput
  }

  /**
   * HabitCompletion findFirst
   */
  export type HabitCompletionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitCompletion
     */
    omit?: HabitCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionInclude<ExtArgs> | null
    /**
     * Filter, which HabitCompletion to fetch.
     */
    where?: HabitCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitCompletions to fetch.
     */
    orderBy?: HabitCompletionOrderByWithRelationInput | HabitCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitCompletions.
     */
    cursor?: HabitCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitCompletions.
     */
    distinct?: HabitCompletionScalarFieldEnum | HabitCompletionScalarFieldEnum[]
  }

  /**
   * HabitCompletion findFirstOrThrow
   */
  export type HabitCompletionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitCompletion
     */
    omit?: HabitCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionInclude<ExtArgs> | null
    /**
     * Filter, which HabitCompletion to fetch.
     */
    where?: HabitCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitCompletions to fetch.
     */
    orderBy?: HabitCompletionOrderByWithRelationInput | HabitCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitCompletions.
     */
    cursor?: HabitCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitCompletions.
     */
    distinct?: HabitCompletionScalarFieldEnum | HabitCompletionScalarFieldEnum[]
  }

  /**
   * HabitCompletion findMany
   */
  export type HabitCompletionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitCompletion
     */
    omit?: HabitCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionInclude<ExtArgs> | null
    /**
     * Filter, which HabitCompletions to fetch.
     */
    where?: HabitCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitCompletions to fetch.
     */
    orderBy?: HabitCompletionOrderByWithRelationInput | HabitCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HabitCompletions.
     */
    cursor?: HabitCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitCompletions.
     */
    skip?: number
    distinct?: HabitCompletionScalarFieldEnum | HabitCompletionScalarFieldEnum[]
  }

  /**
   * HabitCompletion create
   */
  export type HabitCompletionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitCompletion
     */
    omit?: HabitCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionInclude<ExtArgs> | null
    /**
     * The data needed to create a HabitCompletion.
     */
    data: XOR<HabitCompletionCreateInput, HabitCompletionUncheckedCreateInput>
  }

  /**
   * HabitCompletion createMany
   */
  export type HabitCompletionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HabitCompletions.
     */
    data: HabitCompletionCreateManyInput | HabitCompletionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HabitCompletion createManyAndReturn
   */
  export type HabitCompletionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HabitCompletion
     */
    omit?: HabitCompletionOmit<ExtArgs> | null
    /**
     * The data used to create many HabitCompletions.
     */
    data: HabitCompletionCreateManyInput | HabitCompletionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HabitCompletion update
   */
  export type HabitCompletionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitCompletion
     */
    omit?: HabitCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionInclude<ExtArgs> | null
    /**
     * The data needed to update a HabitCompletion.
     */
    data: XOR<HabitCompletionUpdateInput, HabitCompletionUncheckedUpdateInput>
    /**
     * Choose, which HabitCompletion to update.
     */
    where: HabitCompletionWhereUniqueInput
  }

  /**
   * HabitCompletion updateMany
   */
  export type HabitCompletionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HabitCompletions.
     */
    data: XOR<HabitCompletionUpdateManyMutationInput, HabitCompletionUncheckedUpdateManyInput>
    /**
     * Filter which HabitCompletions to update
     */
    where?: HabitCompletionWhereInput
    /**
     * Limit how many HabitCompletions to update.
     */
    limit?: number
  }

  /**
   * HabitCompletion updateManyAndReturn
   */
  export type HabitCompletionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HabitCompletion
     */
    omit?: HabitCompletionOmit<ExtArgs> | null
    /**
     * The data used to update HabitCompletions.
     */
    data: XOR<HabitCompletionUpdateManyMutationInput, HabitCompletionUncheckedUpdateManyInput>
    /**
     * Filter which HabitCompletions to update
     */
    where?: HabitCompletionWhereInput
    /**
     * Limit how many HabitCompletions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HabitCompletion upsert
   */
  export type HabitCompletionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitCompletion
     */
    omit?: HabitCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionInclude<ExtArgs> | null
    /**
     * The filter to search for the HabitCompletion to update in case it exists.
     */
    where: HabitCompletionWhereUniqueInput
    /**
     * In case the HabitCompletion found by the `where` argument doesn't exist, create a new HabitCompletion with this data.
     */
    create: XOR<HabitCompletionCreateInput, HabitCompletionUncheckedCreateInput>
    /**
     * In case the HabitCompletion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitCompletionUpdateInput, HabitCompletionUncheckedUpdateInput>
  }

  /**
   * HabitCompletion delete
   */
  export type HabitCompletionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitCompletion
     */
    omit?: HabitCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionInclude<ExtArgs> | null
    /**
     * Filter which HabitCompletion to delete.
     */
    where: HabitCompletionWhereUniqueInput
  }

  /**
   * HabitCompletion deleteMany
   */
  export type HabitCompletionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitCompletions to delete
     */
    where?: HabitCompletionWhereInput
    /**
     * Limit how many HabitCompletions to delete.
     */
    limit?: number
  }

  /**
   * HabitCompletion without action
   */
  export type HabitCompletionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCompletion
     */
    select?: HabitCompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitCompletion
     */
    omit?: HabitCompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitCompletionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const HabitScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    userId: 'userId',
    seedDuration: 'seedDuration',
    sproutDuration: 'sproutDuration',
    forestDuration: 'forestDuration',
    scheduledTime: 'scheduledTime',
    scheduledDate: 'scheduledDate',
    frequency: 'frequency',
    frequencyCustom: 'frequencyCustom',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HabitScalarFieldEnum = (typeof HabitScalarFieldEnum)[keyof typeof HabitScalarFieldEnum]


  export const HabitLogScalarFieldEnum: {
    id: 'id',
    habitId: 'habitId',
    userId: 'userId',
    completedAt: 'completedAt',
    completedLevel: 'completedLevel',
    actualDuration: 'actualDuration',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type HabitLogScalarFieldEnum = (typeof HabitLogScalarFieldEnum)[keyof typeof HabitLogScalarFieldEnum]


  export const MilestoneScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    target: 'target',
    current: 'current',
    unit: 'unit',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MilestoneScalarFieldEnum = (typeof MilestoneScalarFieldEnum)[keyof typeof MilestoneScalarFieldEnum]


  export const HabitMilestoneScalarFieldEnum: {
    id: 'id',
    habitId: 'habitId',
    milestoneId: 'milestoneId',
    createdAt: 'createdAt'
  };

  export type HabitMilestoneScalarFieldEnum = (typeof HabitMilestoneScalarFieldEnum)[keyof typeof HabitMilestoneScalarFieldEnum]


  export const ReflectionScalarFieldEnum: {
    id: 'id',
    habitId: 'habitId',
    habitLogId: 'habitLogId',
    userId: 'userId',
    feeling: 'feeling',
    mood: 'mood',
    notes: 'notes',
    aiResponse: 'aiResponse',
    suggestion: 'suggestion',
    createdAt: 'createdAt'
  };

  export type ReflectionScalarFieldEnum = (typeof ReflectionScalarFieldEnum)[keyof typeof ReflectionScalarFieldEnum]


  export const HabitCompletionScalarFieldEnum: {
    id: 'id',
    habitId: 'habitId',
    completedAt: 'completedAt',
    createdAt: 'createdAt'
  };

  export type HabitCompletionScalarFieldEnum = (typeof HabitCompletionScalarFieldEnum)[keyof typeof HabitCompletionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Frequency'
   */
  export type EnumFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Frequency'>
    


  /**
   * Reference to a field of type 'Frequency[]'
   */
  export type ListEnumFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Frequency[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'EnergyLevel'
   */
  export type EnumEnergyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnergyLevel'>
    


  /**
   * Reference to a field of type 'EnergyLevel[]'
   */
  export type ListEnumEnergyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnergyLevel[]'>
    


  /**
   * Reference to a field of type 'MilestoneType'
   */
  export type EnumMilestoneTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MilestoneType'>
    


  /**
   * Reference to a field of type 'MilestoneType[]'
   */
  export type ListEnumMilestoneTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MilestoneType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    habits?: HabitListRelationFilter
    habitLogs?: HabitLogListRelationFilter
    reflections?: ReflectionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    habits?: HabitOrderByRelationAggregateInput
    habitLogs?: HabitLogOrderByRelationAggregateInput
    reflections?: ReflectionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    habits?: HabitListRelationFilter
    habitLogs?: HabitLogListRelationFilter
    reflections?: ReflectionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type HabitWhereInput = {
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    id?: StringFilter<"Habit"> | string
    title?: StringFilter<"Habit"> | string
    description?: StringNullableFilter<"Habit"> | string | null
    userId?: StringFilter<"Habit"> | string
    seedDuration?: IntNullableFilter<"Habit"> | number | null
    sproutDuration?: IntNullableFilter<"Habit"> | number | null
    forestDuration?: IntNullableFilter<"Habit"> | number | null
    scheduledTime?: StringNullableFilter<"Habit"> | string | null
    scheduledDate?: DateTimeNullableFilter<"Habit"> | Date | string | null
    frequency?: EnumFrequencyFilter<"Habit"> | $Enums.Frequency
    frequencyCustom?: StringNullableFilter<"Habit"> | string | null
    isActive?: BoolFilter<"Habit"> | boolean
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    habitLogs?: HabitLogListRelationFilter
    milestones?: HabitMilestoneListRelationFilter
    reflections?: ReflectionListRelationFilter
    completions?: HabitCompletionListRelationFilter
  }

  export type HabitOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    seedDuration?: SortOrderInput | SortOrder
    sproutDuration?: SortOrderInput | SortOrder
    forestDuration?: SortOrderInput | SortOrder
    scheduledTime?: SortOrderInput | SortOrder
    scheduledDate?: SortOrderInput | SortOrder
    frequency?: SortOrder
    frequencyCustom?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    habitLogs?: HabitLogOrderByRelationAggregateInput
    milestones?: HabitMilestoneOrderByRelationAggregateInput
    reflections?: ReflectionOrderByRelationAggregateInput
    completions?: HabitCompletionOrderByRelationAggregateInput
  }

  export type HabitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    title?: StringFilter<"Habit"> | string
    description?: StringNullableFilter<"Habit"> | string | null
    userId?: StringFilter<"Habit"> | string
    seedDuration?: IntNullableFilter<"Habit"> | number | null
    sproutDuration?: IntNullableFilter<"Habit"> | number | null
    forestDuration?: IntNullableFilter<"Habit"> | number | null
    scheduledTime?: StringNullableFilter<"Habit"> | string | null
    scheduledDate?: DateTimeNullableFilter<"Habit"> | Date | string | null
    frequency?: EnumFrequencyFilter<"Habit"> | $Enums.Frequency
    frequencyCustom?: StringNullableFilter<"Habit"> | string | null
    isActive?: BoolFilter<"Habit"> | boolean
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    habitLogs?: HabitLogListRelationFilter
    milestones?: HabitMilestoneListRelationFilter
    reflections?: ReflectionListRelationFilter
    completions?: HabitCompletionListRelationFilter
  }, "id">

  export type HabitOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    seedDuration?: SortOrderInput | SortOrder
    sproutDuration?: SortOrderInput | SortOrder
    forestDuration?: SortOrderInput | SortOrder
    scheduledTime?: SortOrderInput | SortOrder
    scheduledDate?: SortOrderInput | SortOrder
    frequency?: SortOrder
    frequencyCustom?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HabitCountOrderByAggregateInput
    _avg?: HabitAvgOrderByAggregateInput
    _max?: HabitMaxOrderByAggregateInput
    _min?: HabitMinOrderByAggregateInput
    _sum?: HabitSumOrderByAggregateInput
  }

  export type HabitScalarWhereWithAggregatesInput = {
    AND?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    OR?: HabitScalarWhereWithAggregatesInput[]
    NOT?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Habit"> | string
    title?: StringWithAggregatesFilter<"Habit"> | string
    description?: StringNullableWithAggregatesFilter<"Habit"> | string | null
    userId?: StringWithAggregatesFilter<"Habit"> | string
    seedDuration?: IntNullableWithAggregatesFilter<"Habit"> | number | null
    sproutDuration?: IntNullableWithAggregatesFilter<"Habit"> | number | null
    forestDuration?: IntNullableWithAggregatesFilter<"Habit"> | number | null
    scheduledTime?: StringNullableWithAggregatesFilter<"Habit"> | string | null
    scheduledDate?: DateTimeNullableWithAggregatesFilter<"Habit"> | Date | string | null
    frequency?: EnumFrequencyWithAggregatesFilter<"Habit"> | $Enums.Frequency
    frequencyCustom?: StringNullableWithAggregatesFilter<"Habit"> | string | null
    isActive?: BoolWithAggregatesFilter<"Habit"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Habit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Habit"> | Date | string
  }

  export type HabitLogWhereInput = {
    AND?: HabitLogWhereInput | HabitLogWhereInput[]
    OR?: HabitLogWhereInput[]
    NOT?: HabitLogWhereInput | HabitLogWhereInput[]
    id?: StringFilter<"HabitLog"> | string
    habitId?: StringFilter<"HabitLog"> | string
    userId?: StringFilter<"HabitLog"> | string
    completedAt?: DateTimeFilter<"HabitLog"> | Date | string
    completedLevel?: EnumEnergyLevelFilter<"HabitLog"> | $Enums.EnergyLevel
    actualDuration?: IntNullableFilter<"HabitLog"> | number | null
    notes?: StringNullableFilter<"HabitLog"> | string | null
    createdAt?: DateTimeFilter<"HabitLog"> | Date | string
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reflection?: XOR<ReflectionNullableScalarRelationFilter, ReflectionWhereInput> | null
  }

  export type HabitLogOrderByWithRelationInput = {
    id?: SortOrder
    habitId?: SortOrder
    userId?: SortOrder
    completedAt?: SortOrder
    completedLevel?: SortOrder
    actualDuration?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    habit?: HabitOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    reflection?: ReflectionOrderByWithRelationInput
  }

  export type HabitLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HabitLogWhereInput | HabitLogWhereInput[]
    OR?: HabitLogWhereInput[]
    NOT?: HabitLogWhereInput | HabitLogWhereInput[]
    habitId?: StringFilter<"HabitLog"> | string
    userId?: StringFilter<"HabitLog"> | string
    completedAt?: DateTimeFilter<"HabitLog"> | Date | string
    completedLevel?: EnumEnergyLevelFilter<"HabitLog"> | $Enums.EnergyLevel
    actualDuration?: IntNullableFilter<"HabitLog"> | number | null
    notes?: StringNullableFilter<"HabitLog"> | string | null
    createdAt?: DateTimeFilter<"HabitLog"> | Date | string
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reflection?: XOR<ReflectionNullableScalarRelationFilter, ReflectionWhereInput> | null
  }, "id">

  export type HabitLogOrderByWithAggregationInput = {
    id?: SortOrder
    habitId?: SortOrder
    userId?: SortOrder
    completedAt?: SortOrder
    completedLevel?: SortOrder
    actualDuration?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: HabitLogCountOrderByAggregateInput
    _avg?: HabitLogAvgOrderByAggregateInput
    _max?: HabitLogMaxOrderByAggregateInput
    _min?: HabitLogMinOrderByAggregateInput
    _sum?: HabitLogSumOrderByAggregateInput
  }

  export type HabitLogScalarWhereWithAggregatesInput = {
    AND?: HabitLogScalarWhereWithAggregatesInput | HabitLogScalarWhereWithAggregatesInput[]
    OR?: HabitLogScalarWhereWithAggregatesInput[]
    NOT?: HabitLogScalarWhereWithAggregatesInput | HabitLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HabitLog"> | string
    habitId?: StringWithAggregatesFilter<"HabitLog"> | string
    userId?: StringWithAggregatesFilter<"HabitLog"> | string
    completedAt?: DateTimeWithAggregatesFilter<"HabitLog"> | Date | string
    completedLevel?: EnumEnergyLevelWithAggregatesFilter<"HabitLog"> | $Enums.EnergyLevel
    actualDuration?: IntNullableWithAggregatesFilter<"HabitLog"> | number | null
    notes?: StringNullableWithAggregatesFilter<"HabitLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"HabitLog"> | Date | string
  }

  export type MilestoneWhereInput = {
    AND?: MilestoneWhereInput | MilestoneWhereInput[]
    OR?: MilestoneWhereInput[]
    NOT?: MilestoneWhereInput | MilestoneWhereInput[]
    id?: StringFilter<"Milestone"> | string
    title?: StringFilter<"Milestone"> | string
    description?: StringNullableFilter<"Milestone"> | string | null
    type?: EnumMilestoneTypeFilter<"Milestone"> | $Enums.MilestoneType
    target?: FloatFilter<"Milestone"> | number
    current?: FloatFilter<"Milestone"> | number
    unit?: StringNullableFilter<"Milestone"> | string | null
    isActive?: BoolFilter<"Milestone"> | boolean
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeFilter<"Milestone"> | Date | string
    habits?: HabitMilestoneListRelationFilter
  }

  export type MilestoneOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    target?: SortOrder
    current?: SortOrder
    unit?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    habits?: HabitMilestoneOrderByRelationAggregateInput
  }

  export type MilestoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MilestoneWhereInput | MilestoneWhereInput[]
    OR?: MilestoneWhereInput[]
    NOT?: MilestoneWhereInput | MilestoneWhereInput[]
    title?: StringFilter<"Milestone"> | string
    description?: StringNullableFilter<"Milestone"> | string | null
    type?: EnumMilestoneTypeFilter<"Milestone"> | $Enums.MilestoneType
    target?: FloatFilter<"Milestone"> | number
    current?: FloatFilter<"Milestone"> | number
    unit?: StringNullableFilter<"Milestone"> | string | null
    isActive?: BoolFilter<"Milestone"> | boolean
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeFilter<"Milestone"> | Date | string
    habits?: HabitMilestoneListRelationFilter
  }, "id">

  export type MilestoneOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    target?: SortOrder
    current?: SortOrder
    unit?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MilestoneCountOrderByAggregateInput
    _avg?: MilestoneAvgOrderByAggregateInput
    _max?: MilestoneMaxOrderByAggregateInput
    _min?: MilestoneMinOrderByAggregateInput
    _sum?: MilestoneSumOrderByAggregateInput
  }

  export type MilestoneScalarWhereWithAggregatesInput = {
    AND?: MilestoneScalarWhereWithAggregatesInput | MilestoneScalarWhereWithAggregatesInput[]
    OR?: MilestoneScalarWhereWithAggregatesInput[]
    NOT?: MilestoneScalarWhereWithAggregatesInput | MilestoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Milestone"> | string
    title?: StringWithAggregatesFilter<"Milestone"> | string
    description?: StringNullableWithAggregatesFilter<"Milestone"> | string | null
    type?: EnumMilestoneTypeWithAggregatesFilter<"Milestone"> | $Enums.MilestoneType
    target?: FloatWithAggregatesFilter<"Milestone"> | number
    current?: FloatWithAggregatesFilter<"Milestone"> | number
    unit?: StringNullableWithAggregatesFilter<"Milestone"> | string | null
    isActive?: BoolWithAggregatesFilter<"Milestone"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Milestone"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Milestone"> | Date | string
  }

  export type HabitMilestoneWhereInput = {
    AND?: HabitMilestoneWhereInput | HabitMilestoneWhereInput[]
    OR?: HabitMilestoneWhereInput[]
    NOT?: HabitMilestoneWhereInput | HabitMilestoneWhereInput[]
    id?: StringFilter<"HabitMilestone"> | string
    habitId?: StringFilter<"HabitMilestone"> | string
    milestoneId?: StringFilter<"HabitMilestone"> | string
    createdAt?: DateTimeFilter<"HabitMilestone"> | Date | string
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
    milestone?: XOR<MilestoneScalarRelationFilter, MilestoneWhereInput>
  }

  export type HabitMilestoneOrderByWithRelationInput = {
    id?: SortOrder
    habitId?: SortOrder
    milestoneId?: SortOrder
    createdAt?: SortOrder
    habit?: HabitOrderByWithRelationInput
    milestone?: MilestoneOrderByWithRelationInput
  }

  export type HabitMilestoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    habitId_milestoneId?: HabitMilestoneHabitIdMilestoneIdCompoundUniqueInput
    AND?: HabitMilestoneWhereInput | HabitMilestoneWhereInput[]
    OR?: HabitMilestoneWhereInput[]
    NOT?: HabitMilestoneWhereInput | HabitMilestoneWhereInput[]
    habitId?: StringFilter<"HabitMilestone"> | string
    milestoneId?: StringFilter<"HabitMilestone"> | string
    createdAt?: DateTimeFilter<"HabitMilestone"> | Date | string
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
    milestone?: XOR<MilestoneScalarRelationFilter, MilestoneWhereInput>
  }, "id" | "habitId_milestoneId">

  export type HabitMilestoneOrderByWithAggregationInput = {
    id?: SortOrder
    habitId?: SortOrder
    milestoneId?: SortOrder
    createdAt?: SortOrder
    _count?: HabitMilestoneCountOrderByAggregateInput
    _max?: HabitMilestoneMaxOrderByAggregateInput
    _min?: HabitMilestoneMinOrderByAggregateInput
  }

  export type HabitMilestoneScalarWhereWithAggregatesInput = {
    AND?: HabitMilestoneScalarWhereWithAggregatesInput | HabitMilestoneScalarWhereWithAggregatesInput[]
    OR?: HabitMilestoneScalarWhereWithAggregatesInput[]
    NOT?: HabitMilestoneScalarWhereWithAggregatesInput | HabitMilestoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HabitMilestone"> | string
    habitId?: StringWithAggregatesFilter<"HabitMilestone"> | string
    milestoneId?: StringWithAggregatesFilter<"HabitMilestone"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HabitMilestone"> | Date | string
  }

  export type ReflectionWhereInput = {
    AND?: ReflectionWhereInput | ReflectionWhereInput[]
    OR?: ReflectionWhereInput[]
    NOT?: ReflectionWhereInput | ReflectionWhereInput[]
    id?: StringFilter<"Reflection"> | string
    habitId?: StringFilter<"Reflection"> | string
    habitLogId?: StringFilter<"Reflection"> | string
    userId?: StringFilter<"Reflection"> | string
    feeling?: StringFilter<"Reflection"> | string
    mood?: IntNullableFilter<"Reflection"> | number | null
    notes?: StringNullableFilter<"Reflection"> | string | null
    aiResponse?: StringNullableFilter<"Reflection"> | string | null
    suggestion?: StringNullableFilter<"Reflection"> | string | null
    createdAt?: DateTimeFilter<"Reflection"> | Date | string
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
    habitLog?: XOR<HabitLogScalarRelationFilter, HabitLogWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReflectionOrderByWithRelationInput = {
    id?: SortOrder
    habitId?: SortOrder
    habitLogId?: SortOrder
    userId?: SortOrder
    feeling?: SortOrder
    mood?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    aiResponse?: SortOrderInput | SortOrder
    suggestion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    habit?: HabitOrderByWithRelationInput
    habitLog?: HabitLogOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReflectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    habitLogId?: string
    AND?: ReflectionWhereInput | ReflectionWhereInput[]
    OR?: ReflectionWhereInput[]
    NOT?: ReflectionWhereInput | ReflectionWhereInput[]
    habitId?: StringFilter<"Reflection"> | string
    userId?: StringFilter<"Reflection"> | string
    feeling?: StringFilter<"Reflection"> | string
    mood?: IntNullableFilter<"Reflection"> | number | null
    notes?: StringNullableFilter<"Reflection"> | string | null
    aiResponse?: StringNullableFilter<"Reflection"> | string | null
    suggestion?: StringNullableFilter<"Reflection"> | string | null
    createdAt?: DateTimeFilter<"Reflection"> | Date | string
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
    habitLog?: XOR<HabitLogScalarRelationFilter, HabitLogWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "habitLogId">

  export type ReflectionOrderByWithAggregationInput = {
    id?: SortOrder
    habitId?: SortOrder
    habitLogId?: SortOrder
    userId?: SortOrder
    feeling?: SortOrder
    mood?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    aiResponse?: SortOrderInput | SortOrder
    suggestion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReflectionCountOrderByAggregateInput
    _avg?: ReflectionAvgOrderByAggregateInput
    _max?: ReflectionMaxOrderByAggregateInput
    _min?: ReflectionMinOrderByAggregateInput
    _sum?: ReflectionSumOrderByAggregateInput
  }

  export type ReflectionScalarWhereWithAggregatesInput = {
    AND?: ReflectionScalarWhereWithAggregatesInput | ReflectionScalarWhereWithAggregatesInput[]
    OR?: ReflectionScalarWhereWithAggregatesInput[]
    NOT?: ReflectionScalarWhereWithAggregatesInput | ReflectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reflection"> | string
    habitId?: StringWithAggregatesFilter<"Reflection"> | string
    habitLogId?: StringWithAggregatesFilter<"Reflection"> | string
    userId?: StringWithAggregatesFilter<"Reflection"> | string
    feeling?: StringWithAggregatesFilter<"Reflection"> | string
    mood?: IntNullableWithAggregatesFilter<"Reflection"> | number | null
    notes?: StringNullableWithAggregatesFilter<"Reflection"> | string | null
    aiResponse?: StringNullableWithAggregatesFilter<"Reflection"> | string | null
    suggestion?: StringNullableWithAggregatesFilter<"Reflection"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Reflection"> | Date | string
  }

  export type HabitCompletionWhereInput = {
    AND?: HabitCompletionWhereInput | HabitCompletionWhereInput[]
    OR?: HabitCompletionWhereInput[]
    NOT?: HabitCompletionWhereInput | HabitCompletionWhereInput[]
    id?: StringFilter<"HabitCompletion"> | string
    habitId?: StringFilter<"HabitCompletion"> | string
    completedAt?: DateTimeFilter<"HabitCompletion"> | Date | string
    createdAt?: DateTimeFilter<"HabitCompletion"> | Date | string
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
  }

  export type HabitCompletionOrderByWithRelationInput = {
    id?: SortOrder
    habitId?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    habit?: HabitOrderByWithRelationInput
  }

  export type HabitCompletionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HabitCompletionWhereInput | HabitCompletionWhereInput[]
    OR?: HabitCompletionWhereInput[]
    NOT?: HabitCompletionWhereInput | HabitCompletionWhereInput[]
    habitId?: StringFilter<"HabitCompletion"> | string
    completedAt?: DateTimeFilter<"HabitCompletion"> | Date | string
    createdAt?: DateTimeFilter<"HabitCompletion"> | Date | string
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
  }, "id">

  export type HabitCompletionOrderByWithAggregationInput = {
    id?: SortOrder
    habitId?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    _count?: HabitCompletionCountOrderByAggregateInput
    _max?: HabitCompletionMaxOrderByAggregateInput
    _min?: HabitCompletionMinOrderByAggregateInput
  }

  export type HabitCompletionScalarWhereWithAggregatesInput = {
    AND?: HabitCompletionScalarWhereWithAggregatesInput | HabitCompletionScalarWhereWithAggregatesInput[]
    OR?: HabitCompletionScalarWhereWithAggregatesInput[]
    NOT?: HabitCompletionScalarWhereWithAggregatesInput | HabitCompletionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HabitCompletion"> | string
    habitId?: StringWithAggregatesFilter<"HabitCompletion"> | string
    completedAt?: DateTimeWithAggregatesFilter<"HabitCompletion"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"HabitCompletion"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitCreateNestedManyWithoutUserInput
    habitLogs?: HabitLogCreateNestedManyWithoutUserInput
    reflections?: ReflectionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutUserInput
    reflections?: ReflectionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUpdateManyWithoutUserNestedInput
    habitLogs?: HabitLogUpdateManyWithoutUserNestedInput
    reflections?: ReflectionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    habitLogs?: HabitLogUncheckedUpdateManyWithoutUserNestedInput
    reflections?: ReflectionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitCreateInput = {
    id?: string
    title: string
    description?: string | null
    seedDuration?: number | null
    sproutDuration?: number | null
    forestDuration?: number | null
    scheduledTime?: string | null
    scheduledDate?: Date | string | null
    frequency?: $Enums.Frequency
    frequencyCustom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHabitsInput
    habitLogs?: HabitLogCreateNestedManyWithoutHabitInput
    milestones?: HabitMilestoneCreateNestedManyWithoutHabitInput
    reflections?: ReflectionCreateNestedManyWithoutHabitInput
    completions?: HabitCompletionCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    userId: string
    seedDuration?: number | null
    sproutDuration?: number | null
    forestDuration?: number | null
    scheduledTime?: string | null
    scheduledDate?: Date | string | null
    frequency?: $Enums.Frequency
    frequencyCustom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutHabitInput
    milestones?: HabitMilestoneUncheckedCreateNestedManyWithoutHabitInput
    reflections?: ReflectionUncheckedCreateNestedManyWithoutHabitInput
    completions?: HabitCompletionUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    sproutDuration?: NullableIntFieldUpdateOperationsInput | number | null
    forestDuration?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    frequencyCustom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
    habitLogs?: HabitLogUpdateManyWithoutHabitNestedInput
    milestones?: HabitMilestoneUpdateManyWithoutHabitNestedInput
    reflections?: ReflectionUpdateManyWithoutHabitNestedInput
    completions?: HabitCompletionUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    seedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    sproutDuration?: NullableIntFieldUpdateOperationsInput | number | null
    forestDuration?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    frequencyCustom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitLogs?: HabitLogUncheckedUpdateManyWithoutHabitNestedInput
    milestones?: HabitMilestoneUncheckedUpdateManyWithoutHabitNestedInput
    reflections?: ReflectionUncheckedUpdateManyWithoutHabitNestedInput
    completions?: HabitCompletionUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    userId: string
    seedDuration?: number | null
    sproutDuration?: number | null
    forestDuration?: number | null
    scheduledTime?: string | null
    scheduledDate?: Date | string | null
    frequency?: $Enums.Frequency
    frequencyCustom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    sproutDuration?: NullableIntFieldUpdateOperationsInput | number | null
    forestDuration?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    frequencyCustom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    seedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    sproutDuration?: NullableIntFieldUpdateOperationsInput | number | null
    forestDuration?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    frequencyCustom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogCreateInput = {
    id?: string
    completedAt?: Date | string
    completedLevel: $Enums.EnergyLevel
    actualDuration?: number | null
    notes?: string | null
    createdAt?: Date | string
    habit: HabitCreateNestedOneWithoutHabitLogsInput
    user: UserCreateNestedOneWithoutHabitLogsInput
    reflection?: ReflectionCreateNestedOneWithoutHabitLogInput
  }

  export type HabitLogUncheckedCreateInput = {
    id?: string
    habitId: string
    userId: string
    completedAt?: Date | string
    completedLevel: $Enums.EnergyLevel
    actualDuration?: number | null
    notes?: string | null
    createdAt?: Date | string
    reflection?: ReflectionUncheckedCreateNestedOneWithoutHabitLogInput
  }

  export type HabitLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedLevel?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    actualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habit?: HabitUpdateOneRequiredWithoutHabitLogsNestedInput
    user?: UserUpdateOneRequiredWithoutHabitLogsNestedInput
    reflection?: ReflectionUpdateOneWithoutHabitLogNestedInput
  }

  export type HabitLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedLevel?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    actualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reflection?: ReflectionUncheckedUpdateOneWithoutHabitLogNestedInput
  }

  export type HabitLogCreateManyInput = {
    id?: string
    habitId: string
    userId: string
    completedAt?: Date | string
    completedLevel: $Enums.EnergyLevel
    actualDuration?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type HabitLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedLevel?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    actualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedLevel?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    actualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneCreateInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.MilestoneType
    target: number
    current?: number
    unit?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitMilestoneCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.MilestoneType
    target: number
    current?: number
    unit?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitMilestoneUncheckedCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMilestoneTypeFieldUpdateOperationsInput | $Enums.MilestoneType
    target?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitMilestoneUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMilestoneTypeFieldUpdateOperationsInput | $Enums.MilestoneType
    target?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitMilestoneUncheckedUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.MilestoneType
    target: number
    current?: number
    unit?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilestoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMilestoneTypeFieldUpdateOperationsInput | $Enums.MilestoneType
    target?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMilestoneTypeFieldUpdateOperationsInput | $Enums.MilestoneType
    target?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitMilestoneCreateInput = {
    id?: string
    createdAt?: Date | string
    habit: HabitCreateNestedOneWithoutMilestonesInput
    milestone: MilestoneCreateNestedOneWithoutHabitsInput
  }

  export type HabitMilestoneUncheckedCreateInput = {
    id?: string
    habitId: string
    milestoneId: string
    createdAt?: Date | string
  }

  export type HabitMilestoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habit?: HabitUpdateOneRequiredWithoutMilestonesNestedInput
    milestone?: MilestoneUpdateOneRequiredWithoutHabitsNestedInput
  }

  export type HabitMilestoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    milestoneId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitMilestoneCreateManyInput = {
    id?: string
    habitId: string
    milestoneId: string
    createdAt?: Date | string
  }

  export type HabitMilestoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitMilestoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    milestoneId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReflectionCreateInput = {
    id?: string
    feeling: string
    mood?: number | null
    notes?: string | null
    aiResponse?: string | null
    suggestion?: string | null
    createdAt?: Date | string
    habit: HabitCreateNestedOneWithoutReflectionsInput
    habitLog: HabitLogCreateNestedOneWithoutReflectionInput
    user: UserCreateNestedOneWithoutReflectionsInput
  }

  export type ReflectionUncheckedCreateInput = {
    id?: string
    habitId: string
    habitLogId: string
    userId: string
    feeling: string
    mood?: number | null
    notes?: string | null
    aiResponse?: string | null
    suggestion?: string | null
    createdAt?: Date | string
  }

  export type ReflectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    feeling?: StringFieldUpdateOperationsInput | string
    mood?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponse?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habit?: HabitUpdateOneRequiredWithoutReflectionsNestedInput
    habitLog?: HabitLogUpdateOneRequiredWithoutReflectionNestedInput
    user?: UserUpdateOneRequiredWithoutReflectionsNestedInput
  }

  export type ReflectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    habitLogId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    feeling?: StringFieldUpdateOperationsInput | string
    mood?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponse?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReflectionCreateManyInput = {
    id?: string
    habitId: string
    habitLogId: string
    userId: string
    feeling: string
    mood?: number | null
    notes?: string | null
    aiResponse?: string | null
    suggestion?: string | null
    createdAt?: Date | string
  }

  export type ReflectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    feeling?: StringFieldUpdateOperationsInput | string
    mood?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponse?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReflectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    habitLogId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    feeling?: StringFieldUpdateOperationsInput | string
    mood?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponse?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitCompletionCreateInput = {
    id?: string
    completedAt?: Date | string
    createdAt?: Date | string
    habit: HabitCreateNestedOneWithoutCompletionsInput
  }

  export type HabitCompletionUncheckedCreateInput = {
    id?: string
    habitId: string
    completedAt?: Date | string
    createdAt?: Date | string
  }

  export type HabitCompletionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habit?: HabitUpdateOneRequiredWithoutCompletionsNestedInput
  }

  export type HabitCompletionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitCompletionCreateManyInput = {
    id?: string
    habitId: string
    completedAt?: Date | string
    createdAt?: Date | string
  }

  export type HabitCompletionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitCompletionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type HabitListRelationFilter = {
    every?: HabitWhereInput
    some?: HabitWhereInput
    none?: HabitWhereInput
  }

  export type HabitLogListRelationFilter = {
    every?: HabitLogWhereInput
    some?: HabitLogWhereInput
    none?: HabitLogWhereInput
  }

  export type ReflectionListRelationFilter = {
    every?: ReflectionWhereInput
    some?: ReflectionWhereInput
    none?: ReflectionWhereInput
  }

  export type HabitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReflectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency | EnumFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumFrequencyFilter<$PrismaModel> | $Enums.Frequency
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type HabitMilestoneListRelationFilter = {
    every?: HabitMilestoneWhereInput
    some?: HabitMilestoneWhereInput
    none?: HabitMilestoneWhereInput
  }

  export type HabitCompletionListRelationFilter = {
    every?: HabitCompletionWhereInput
    some?: HabitCompletionWhereInput
    none?: HabitCompletionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HabitMilestoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitCompletionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    seedDuration?: SortOrder
    sproutDuration?: SortOrder
    forestDuration?: SortOrder
    scheduledTime?: SortOrder
    scheduledDate?: SortOrder
    frequency?: SortOrder
    frequencyCustom?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitAvgOrderByAggregateInput = {
    seedDuration?: SortOrder
    sproutDuration?: SortOrder
    forestDuration?: SortOrder
  }

  export type HabitMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    seedDuration?: SortOrder
    sproutDuration?: SortOrder
    forestDuration?: SortOrder
    scheduledTime?: SortOrder
    scheduledDate?: SortOrder
    frequency?: SortOrder
    frequencyCustom?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    seedDuration?: SortOrder
    sproutDuration?: SortOrder
    forestDuration?: SortOrder
    scheduledTime?: SortOrder
    scheduledDate?: SortOrder
    frequency?: SortOrder
    frequencyCustom?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitSumOrderByAggregateInput = {
    seedDuration?: SortOrder
    sproutDuration?: SortOrder
    forestDuration?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency | EnumFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.Frequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFrequencyFilter<$PrismaModel>
    _max?: NestedEnumFrequencyFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumEnergyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.EnergyLevel | EnumEnergyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EnergyLevel[] | ListEnumEnergyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnergyLevel[] | ListEnumEnergyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEnergyLevelFilter<$PrismaModel> | $Enums.EnergyLevel
  }

  export type HabitScalarRelationFilter = {
    is?: HabitWhereInput
    isNot?: HabitWhereInput
  }

  export type ReflectionNullableScalarRelationFilter = {
    is?: ReflectionWhereInput | null
    isNot?: ReflectionWhereInput | null
  }

  export type HabitLogCountOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    userId?: SortOrder
    completedAt?: SortOrder
    completedLevel?: SortOrder
    actualDuration?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type HabitLogAvgOrderByAggregateInput = {
    actualDuration?: SortOrder
  }

  export type HabitLogMaxOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    userId?: SortOrder
    completedAt?: SortOrder
    completedLevel?: SortOrder
    actualDuration?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type HabitLogMinOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    userId?: SortOrder
    completedAt?: SortOrder
    completedLevel?: SortOrder
    actualDuration?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type HabitLogSumOrderByAggregateInput = {
    actualDuration?: SortOrder
  }

  export type EnumEnergyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnergyLevel | EnumEnergyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EnergyLevel[] | ListEnumEnergyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnergyLevel[] | ListEnumEnergyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEnergyLevelWithAggregatesFilter<$PrismaModel> | $Enums.EnergyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnergyLevelFilter<$PrismaModel>
    _max?: NestedEnumEnergyLevelFilter<$PrismaModel>
  }

  export type EnumMilestoneTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneType | EnumMilestoneTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MilestoneType[] | ListEnumMilestoneTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MilestoneType[] | ListEnumMilestoneTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMilestoneTypeFilter<$PrismaModel> | $Enums.MilestoneType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MilestoneCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    target?: SortOrder
    current?: SortOrder
    unit?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MilestoneAvgOrderByAggregateInput = {
    target?: SortOrder
    current?: SortOrder
  }

  export type MilestoneMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    target?: SortOrder
    current?: SortOrder
    unit?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MilestoneMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    target?: SortOrder
    current?: SortOrder
    unit?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MilestoneSumOrderByAggregateInput = {
    target?: SortOrder
    current?: SortOrder
  }

  export type EnumMilestoneTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneType | EnumMilestoneTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MilestoneType[] | ListEnumMilestoneTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MilestoneType[] | ListEnumMilestoneTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMilestoneTypeWithAggregatesFilter<$PrismaModel> | $Enums.MilestoneType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMilestoneTypeFilter<$PrismaModel>
    _max?: NestedEnumMilestoneTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MilestoneScalarRelationFilter = {
    is?: MilestoneWhereInput
    isNot?: MilestoneWhereInput
  }

  export type HabitMilestoneHabitIdMilestoneIdCompoundUniqueInput = {
    habitId: string
    milestoneId: string
  }

  export type HabitMilestoneCountOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    milestoneId?: SortOrder
    createdAt?: SortOrder
  }

  export type HabitMilestoneMaxOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    milestoneId?: SortOrder
    createdAt?: SortOrder
  }

  export type HabitMilestoneMinOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    milestoneId?: SortOrder
    createdAt?: SortOrder
  }

  export type HabitLogScalarRelationFilter = {
    is?: HabitLogWhereInput
    isNot?: HabitLogWhereInput
  }

  export type ReflectionCountOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    habitLogId?: SortOrder
    userId?: SortOrder
    feeling?: SortOrder
    mood?: SortOrder
    notes?: SortOrder
    aiResponse?: SortOrder
    suggestion?: SortOrder
    createdAt?: SortOrder
  }

  export type ReflectionAvgOrderByAggregateInput = {
    mood?: SortOrder
  }

  export type ReflectionMaxOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    habitLogId?: SortOrder
    userId?: SortOrder
    feeling?: SortOrder
    mood?: SortOrder
    notes?: SortOrder
    aiResponse?: SortOrder
    suggestion?: SortOrder
    createdAt?: SortOrder
  }

  export type ReflectionMinOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    habitLogId?: SortOrder
    userId?: SortOrder
    feeling?: SortOrder
    mood?: SortOrder
    notes?: SortOrder
    aiResponse?: SortOrder
    suggestion?: SortOrder
    createdAt?: SortOrder
  }

  export type ReflectionSumOrderByAggregateInput = {
    mood?: SortOrder
  }

  export type HabitCompletionCountOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type HabitCompletionMaxOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type HabitCompletionMinOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type HabitCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type HabitLogCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitLogCreateWithoutUserInput, HabitLogUncheckedCreateWithoutUserInput> | HabitLogCreateWithoutUserInput[] | HabitLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutUserInput | HabitLogCreateOrConnectWithoutUserInput[]
    createMany?: HabitLogCreateManyUserInputEnvelope
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
  }

  export type ReflectionCreateNestedManyWithoutUserInput = {
    create?: XOR<ReflectionCreateWithoutUserInput, ReflectionUncheckedCreateWithoutUserInput> | ReflectionCreateWithoutUserInput[] | ReflectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReflectionCreateOrConnectWithoutUserInput | ReflectionCreateOrConnectWithoutUserInput[]
    createMany?: ReflectionCreateManyUserInputEnvelope
    connect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
  }

  export type HabitUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type HabitLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitLogCreateWithoutUserInput, HabitLogUncheckedCreateWithoutUserInput> | HabitLogCreateWithoutUserInput[] | HabitLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutUserInput | HabitLogCreateOrConnectWithoutUserInput[]
    createMany?: HabitLogCreateManyUserInputEnvelope
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
  }

  export type ReflectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReflectionCreateWithoutUserInput, ReflectionUncheckedCreateWithoutUserInput> | ReflectionCreateWithoutUserInput[] | ReflectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReflectionCreateOrConnectWithoutUserInput | ReflectionCreateOrConnectWithoutUserInput[]
    createMany?: ReflectionCreateManyUserInputEnvelope
    connect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type HabitUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutUserInput | HabitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutUserInput | HabitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutUserInput | HabitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type HabitLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitLogCreateWithoutUserInput, HabitLogUncheckedCreateWithoutUserInput> | HabitLogCreateWithoutUserInput[] | HabitLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutUserInput | HabitLogCreateOrConnectWithoutUserInput[]
    upsert?: HabitLogUpsertWithWhereUniqueWithoutUserInput | HabitLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitLogCreateManyUserInputEnvelope
    set?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    disconnect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    delete?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    update?: HabitLogUpdateWithWhereUniqueWithoutUserInput | HabitLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitLogUpdateManyWithWhereWithoutUserInput | HabitLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
  }

  export type ReflectionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReflectionCreateWithoutUserInput, ReflectionUncheckedCreateWithoutUserInput> | ReflectionCreateWithoutUserInput[] | ReflectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReflectionCreateOrConnectWithoutUserInput | ReflectionCreateOrConnectWithoutUserInput[]
    upsert?: ReflectionUpsertWithWhereUniqueWithoutUserInput | ReflectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReflectionCreateManyUserInputEnvelope
    set?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    disconnect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    delete?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    connect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    update?: ReflectionUpdateWithWhereUniqueWithoutUserInput | ReflectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReflectionUpdateManyWithWhereWithoutUserInput | ReflectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReflectionScalarWhereInput | ReflectionScalarWhereInput[]
  }

  export type HabitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutUserInput | HabitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutUserInput | HabitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutUserInput | HabitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type HabitLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitLogCreateWithoutUserInput, HabitLogUncheckedCreateWithoutUserInput> | HabitLogCreateWithoutUserInput[] | HabitLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutUserInput | HabitLogCreateOrConnectWithoutUserInput[]
    upsert?: HabitLogUpsertWithWhereUniqueWithoutUserInput | HabitLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitLogCreateManyUserInputEnvelope
    set?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    disconnect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    delete?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    update?: HabitLogUpdateWithWhereUniqueWithoutUserInput | HabitLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitLogUpdateManyWithWhereWithoutUserInput | HabitLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
  }

  export type ReflectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReflectionCreateWithoutUserInput, ReflectionUncheckedCreateWithoutUserInput> | ReflectionCreateWithoutUserInput[] | ReflectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReflectionCreateOrConnectWithoutUserInput | ReflectionCreateOrConnectWithoutUserInput[]
    upsert?: ReflectionUpsertWithWhereUniqueWithoutUserInput | ReflectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReflectionCreateManyUserInputEnvelope
    set?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    disconnect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    delete?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    connect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    update?: ReflectionUpdateWithWhereUniqueWithoutUserInput | ReflectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReflectionUpdateManyWithWhereWithoutUserInput | ReflectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReflectionScalarWhereInput | ReflectionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutHabitsInput = {
    create?: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitsInput
    connect?: UserWhereUniqueInput
  }

  export type HabitLogCreateNestedManyWithoutHabitInput = {
    create?: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput> | HabitLogCreateWithoutHabitInput[] | HabitLogUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitInput | HabitLogCreateOrConnectWithoutHabitInput[]
    createMany?: HabitLogCreateManyHabitInputEnvelope
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
  }

  export type HabitMilestoneCreateNestedManyWithoutHabitInput = {
    create?: XOR<HabitMilestoneCreateWithoutHabitInput, HabitMilestoneUncheckedCreateWithoutHabitInput> | HabitMilestoneCreateWithoutHabitInput[] | HabitMilestoneUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitMilestoneCreateOrConnectWithoutHabitInput | HabitMilestoneCreateOrConnectWithoutHabitInput[]
    createMany?: HabitMilestoneCreateManyHabitInputEnvelope
    connect?: HabitMilestoneWhereUniqueInput | HabitMilestoneWhereUniqueInput[]
  }

  export type ReflectionCreateNestedManyWithoutHabitInput = {
    create?: XOR<ReflectionCreateWithoutHabitInput, ReflectionUncheckedCreateWithoutHabitInput> | ReflectionCreateWithoutHabitInput[] | ReflectionUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: ReflectionCreateOrConnectWithoutHabitInput | ReflectionCreateOrConnectWithoutHabitInput[]
    createMany?: ReflectionCreateManyHabitInputEnvelope
    connect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
  }

  export type HabitCompletionCreateNestedManyWithoutHabitInput = {
    create?: XOR<HabitCompletionCreateWithoutHabitInput, HabitCompletionUncheckedCreateWithoutHabitInput> | HabitCompletionCreateWithoutHabitInput[] | HabitCompletionUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitCompletionCreateOrConnectWithoutHabitInput | HabitCompletionCreateOrConnectWithoutHabitInput[]
    createMany?: HabitCompletionCreateManyHabitInputEnvelope
    connect?: HabitCompletionWhereUniqueInput | HabitCompletionWhereUniqueInput[]
  }

  export type HabitLogUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput> | HabitLogCreateWithoutHabitInput[] | HabitLogUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitInput | HabitLogCreateOrConnectWithoutHabitInput[]
    createMany?: HabitLogCreateManyHabitInputEnvelope
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
  }

  export type HabitMilestoneUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<HabitMilestoneCreateWithoutHabitInput, HabitMilestoneUncheckedCreateWithoutHabitInput> | HabitMilestoneCreateWithoutHabitInput[] | HabitMilestoneUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitMilestoneCreateOrConnectWithoutHabitInput | HabitMilestoneCreateOrConnectWithoutHabitInput[]
    createMany?: HabitMilestoneCreateManyHabitInputEnvelope
    connect?: HabitMilestoneWhereUniqueInput | HabitMilestoneWhereUniqueInput[]
  }

  export type ReflectionUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<ReflectionCreateWithoutHabitInput, ReflectionUncheckedCreateWithoutHabitInput> | ReflectionCreateWithoutHabitInput[] | ReflectionUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: ReflectionCreateOrConnectWithoutHabitInput | ReflectionCreateOrConnectWithoutHabitInput[]
    createMany?: ReflectionCreateManyHabitInputEnvelope
    connect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
  }

  export type HabitCompletionUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<HabitCompletionCreateWithoutHabitInput, HabitCompletionUncheckedCreateWithoutHabitInput> | HabitCompletionCreateWithoutHabitInput[] | HabitCompletionUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitCompletionCreateOrConnectWithoutHabitInput | HabitCompletionCreateOrConnectWithoutHabitInput[]
    createMany?: HabitCompletionCreateManyHabitInputEnvelope
    connect?: HabitCompletionWhereUniqueInput | HabitCompletionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.Frequency
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutHabitsNestedInput = {
    create?: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitsInput
    upsert?: UserUpsertWithoutHabitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHabitsInput, UserUpdateWithoutHabitsInput>, UserUncheckedUpdateWithoutHabitsInput>
  }

  export type HabitLogUpdateManyWithoutHabitNestedInput = {
    create?: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput> | HabitLogCreateWithoutHabitInput[] | HabitLogUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitInput | HabitLogCreateOrConnectWithoutHabitInput[]
    upsert?: HabitLogUpsertWithWhereUniqueWithoutHabitInput | HabitLogUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: HabitLogCreateManyHabitInputEnvelope
    set?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    disconnect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    delete?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    update?: HabitLogUpdateWithWhereUniqueWithoutHabitInput | HabitLogUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: HabitLogUpdateManyWithWhereWithoutHabitInput | HabitLogUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
  }

  export type HabitMilestoneUpdateManyWithoutHabitNestedInput = {
    create?: XOR<HabitMilestoneCreateWithoutHabitInput, HabitMilestoneUncheckedCreateWithoutHabitInput> | HabitMilestoneCreateWithoutHabitInput[] | HabitMilestoneUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitMilestoneCreateOrConnectWithoutHabitInput | HabitMilestoneCreateOrConnectWithoutHabitInput[]
    upsert?: HabitMilestoneUpsertWithWhereUniqueWithoutHabitInput | HabitMilestoneUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: HabitMilestoneCreateManyHabitInputEnvelope
    set?: HabitMilestoneWhereUniqueInput | HabitMilestoneWhereUniqueInput[]
    disconnect?: HabitMilestoneWhereUniqueInput | HabitMilestoneWhereUniqueInput[]
    delete?: HabitMilestoneWhereUniqueInput | HabitMilestoneWhereUniqueInput[]
    connect?: HabitMilestoneWhereUniqueInput | HabitMilestoneWhereUniqueInput[]
    update?: HabitMilestoneUpdateWithWhereUniqueWithoutHabitInput | HabitMilestoneUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: HabitMilestoneUpdateManyWithWhereWithoutHabitInput | HabitMilestoneUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: HabitMilestoneScalarWhereInput | HabitMilestoneScalarWhereInput[]
  }

  export type ReflectionUpdateManyWithoutHabitNestedInput = {
    create?: XOR<ReflectionCreateWithoutHabitInput, ReflectionUncheckedCreateWithoutHabitInput> | ReflectionCreateWithoutHabitInput[] | ReflectionUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: ReflectionCreateOrConnectWithoutHabitInput | ReflectionCreateOrConnectWithoutHabitInput[]
    upsert?: ReflectionUpsertWithWhereUniqueWithoutHabitInput | ReflectionUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: ReflectionCreateManyHabitInputEnvelope
    set?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    disconnect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    delete?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    connect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    update?: ReflectionUpdateWithWhereUniqueWithoutHabitInput | ReflectionUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: ReflectionUpdateManyWithWhereWithoutHabitInput | ReflectionUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: ReflectionScalarWhereInput | ReflectionScalarWhereInput[]
  }

  export type HabitCompletionUpdateManyWithoutHabitNestedInput = {
    create?: XOR<HabitCompletionCreateWithoutHabitInput, HabitCompletionUncheckedCreateWithoutHabitInput> | HabitCompletionCreateWithoutHabitInput[] | HabitCompletionUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitCompletionCreateOrConnectWithoutHabitInput | HabitCompletionCreateOrConnectWithoutHabitInput[]
    upsert?: HabitCompletionUpsertWithWhereUniqueWithoutHabitInput | HabitCompletionUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: HabitCompletionCreateManyHabitInputEnvelope
    set?: HabitCompletionWhereUniqueInput | HabitCompletionWhereUniqueInput[]
    disconnect?: HabitCompletionWhereUniqueInput | HabitCompletionWhereUniqueInput[]
    delete?: HabitCompletionWhereUniqueInput | HabitCompletionWhereUniqueInput[]
    connect?: HabitCompletionWhereUniqueInput | HabitCompletionWhereUniqueInput[]
    update?: HabitCompletionUpdateWithWhereUniqueWithoutHabitInput | HabitCompletionUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: HabitCompletionUpdateManyWithWhereWithoutHabitInput | HabitCompletionUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: HabitCompletionScalarWhereInput | HabitCompletionScalarWhereInput[]
  }

  export type HabitLogUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput> | HabitLogCreateWithoutHabitInput[] | HabitLogUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitInput | HabitLogCreateOrConnectWithoutHabitInput[]
    upsert?: HabitLogUpsertWithWhereUniqueWithoutHabitInput | HabitLogUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: HabitLogCreateManyHabitInputEnvelope
    set?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    disconnect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    delete?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    update?: HabitLogUpdateWithWhereUniqueWithoutHabitInput | HabitLogUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: HabitLogUpdateManyWithWhereWithoutHabitInput | HabitLogUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
  }

  export type HabitMilestoneUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<HabitMilestoneCreateWithoutHabitInput, HabitMilestoneUncheckedCreateWithoutHabitInput> | HabitMilestoneCreateWithoutHabitInput[] | HabitMilestoneUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitMilestoneCreateOrConnectWithoutHabitInput | HabitMilestoneCreateOrConnectWithoutHabitInput[]
    upsert?: HabitMilestoneUpsertWithWhereUniqueWithoutHabitInput | HabitMilestoneUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: HabitMilestoneCreateManyHabitInputEnvelope
    set?: HabitMilestoneWhereUniqueInput | HabitMilestoneWhereUniqueInput[]
    disconnect?: HabitMilestoneWhereUniqueInput | HabitMilestoneWhereUniqueInput[]
    delete?: HabitMilestoneWhereUniqueInput | HabitMilestoneWhereUniqueInput[]
    connect?: HabitMilestoneWhereUniqueInput | HabitMilestoneWhereUniqueInput[]
    update?: HabitMilestoneUpdateWithWhereUniqueWithoutHabitInput | HabitMilestoneUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: HabitMilestoneUpdateManyWithWhereWithoutHabitInput | HabitMilestoneUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: HabitMilestoneScalarWhereInput | HabitMilestoneScalarWhereInput[]
  }

  export type ReflectionUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<ReflectionCreateWithoutHabitInput, ReflectionUncheckedCreateWithoutHabitInput> | ReflectionCreateWithoutHabitInput[] | ReflectionUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: ReflectionCreateOrConnectWithoutHabitInput | ReflectionCreateOrConnectWithoutHabitInput[]
    upsert?: ReflectionUpsertWithWhereUniqueWithoutHabitInput | ReflectionUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: ReflectionCreateManyHabitInputEnvelope
    set?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    disconnect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    delete?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    connect?: ReflectionWhereUniqueInput | ReflectionWhereUniqueInput[]
    update?: ReflectionUpdateWithWhereUniqueWithoutHabitInput | ReflectionUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: ReflectionUpdateManyWithWhereWithoutHabitInput | ReflectionUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: ReflectionScalarWhereInput | ReflectionScalarWhereInput[]
  }

  export type HabitCompletionUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<HabitCompletionCreateWithoutHabitInput, HabitCompletionUncheckedCreateWithoutHabitInput> | HabitCompletionCreateWithoutHabitInput[] | HabitCompletionUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitCompletionCreateOrConnectWithoutHabitInput | HabitCompletionCreateOrConnectWithoutHabitInput[]
    upsert?: HabitCompletionUpsertWithWhereUniqueWithoutHabitInput | HabitCompletionUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: HabitCompletionCreateManyHabitInputEnvelope
    set?: HabitCompletionWhereUniqueInput | HabitCompletionWhereUniqueInput[]
    disconnect?: HabitCompletionWhereUniqueInput | HabitCompletionWhereUniqueInput[]
    delete?: HabitCompletionWhereUniqueInput | HabitCompletionWhereUniqueInput[]
    connect?: HabitCompletionWhereUniqueInput | HabitCompletionWhereUniqueInput[]
    update?: HabitCompletionUpdateWithWhereUniqueWithoutHabitInput | HabitCompletionUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: HabitCompletionUpdateManyWithWhereWithoutHabitInput | HabitCompletionUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: HabitCompletionScalarWhereInput | HabitCompletionScalarWhereInput[]
  }

  export type HabitCreateNestedOneWithoutHabitLogsInput = {
    create?: XOR<HabitCreateWithoutHabitLogsInput, HabitUncheckedCreateWithoutHabitLogsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutHabitLogsInput
    connect?: HabitWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutHabitLogsInput = {
    create?: XOR<UserCreateWithoutHabitLogsInput, UserUncheckedCreateWithoutHabitLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitLogsInput
    connect?: UserWhereUniqueInput
  }

  export type ReflectionCreateNestedOneWithoutHabitLogInput = {
    create?: XOR<ReflectionCreateWithoutHabitLogInput, ReflectionUncheckedCreateWithoutHabitLogInput>
    connectOrCreate?: ReflectionCreateOrConnectWithoutHabitLogInput
    connect?: ReflectionWhereUniqueInput
  }

  export type ReflectionUncheckedCreateNestedOneWithoutHabitLogInput = {
    create?: XOR<ReflectionCreateWithoutHabitLogInput, ReflectionUncheckedCreateWithoutHabitLogInput>
    connectOrCreate?: ReflectionCreateOrConnectWithoutHabitLogInput
    connect?: ReflectionWhereUniqueInput
  }

  export type EnumEnergyLevelFieldUpdateOperationsInput = {
    set?: $Enums.EnergyLevel
  }

  export type HabitUpdateOneRequiredWithoutHabitLogsNestedInput = {
    create?: XOR<HabitCreateWithoutHabitLogsInput, HabitUncheckedCreateWithoutHabitLogsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutHabitLogsInput
    upsert?: HabitUpsertWithoutHabitLogsInput
    connect?: HabitWhereUniqueInput
    update?: XOR<XOR<HabitUpdateToOneWithWhereWithoutHabitLogsInput, HabitUpdateWithoutHabitLogsInput>, HabitUncheckedUpdateWithoutHabitLogsInput>
  }

  export type UserUpdateOneRequiredWithoutHabitLogsNestedInput = {
    create?: XOR<UserCreateWithoutHabitLogsInput, UserUncheckedCreateWithoutHabitLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitLogsInput
    upsert?: UserUpsertWithoutHabitLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHabitLogsInput, UserUpdateWithoutHabitLogsInput>, UserUncheckedUpdateWithoutHabitLogsInput>
  }

  export type ReflectionUpdateOneWithoutHabitLogNestedInput = {
    create?: XOR<ReflectionCreateWithoutHabitLogInput, ReflectionUncheckedCreateWithoutHabitLogInput>
    connectOrCreate?: ReflectionCreateOrConnectWithoutHabitLogInput
    upsert?: ReflectionUpsertWithoutHabitLogInput
    disconnect?: ReflectionWhereInput | boolean
    delete?: ReflectionWhereInput | boolean
    connect?: ReflectionWhereUniqueInput
    update?: XOR<XOR<ReflectionUpdateToOneWithWhereWithoutHabitLogInput, ReflectionUpdateWithoutHabitLogInput>, ReflectionUncheckedUpdateWithoutHabitLogInput>
  }

  export type ReflectionUncheckedUpdateOneWithoutHabitLogNestedInput = {
    create?: XOR<ReflectionCreateWithoutHabitLogInput, ReflectionUncheckedCreateWithoutHabitLogInput>
    connectOrCreate?: ReflectionCreateOrConnectWithoutHabitLogInput
    upsert?: ReflectionUpsertWithoutHabitLogInput
    disconnect?: ReflectionWhereInput | boolean
    delete?: ReflectionWhereInput | boolean
    connect?: ReflectionWhereUniqueInput
    update?: XOR<XOR<ReflectionUpdateToOneWithWhereWithoutHabitLogInput, ReflectionUpdateWithoutHabitLogInput>, ReflectionUncheckedUpdateWithoutHabitLogInput>
  }

  export type HabitMilestoneCreateNestedManyWithoutMilestoneInput = {
    create?: XOR<HabitMilestoneCreateWithoutMilestoneInput, HabitMilestoneUncheckedCreateWithoutMilestoneInput> | HabitMilestoneCreateWithoutMilestoneInput[] | HabitMilestoneUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: HabitMilestoneCreateOrConnectWithoutMilestoneInput | HabitMilestoneCreateOrConnectWithoutMilestoneInput[]
    createMany?: HabitMilestoneCreateManyMilestoneInputEnvelope
    connect?: HabitMilestoneWhereUniqueInput | HabitMilestoneWhereUniqueInput[]
  }

  export type HabitMilestoneUncheckedCreateNestedManyWithoutMilestoneInput = {
    create?: XOR<HabitMilestoneCreateWithoutMilestoneInput, HabitMilestoneUncheckedCreateWithoutMilestoneInput> | HabitMilestoneCreateWithoutMilestoneInput[] | HabitMilestoneUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: HabitMilestoneCreateOrConnectWithoutMilestoneInput | HabitMilestoneCreateOrConnectWithoutMilestoneInput[]
    createMany?: HabitMilestoneCreateManyMilestoneInputEnvelope
    connect?: HabitMilestoneWhereUniqueInput | HabitMilestoneWhereUniqueInput[]
  }

  export type EnumMilestoneTypeFieldUpdateOperationsInput = {
    set?: $Enums.MilestoneType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HabitMilestoneUpdateManyWithoutMilestoneNestedInput = {
    create?: XOR<HabitMilestoneCreateWithoutMilestoneInput, HabitMilestoneUncheckedCreateWithoutMilestoneInput> | HabitMilestoneCreateWithoutMilestoneInput[] | HabitMilestoneUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: HabitMilestoneCreateOrConnectWithoutMilestoneInput | HabitMilestoneCreateOrConnectWithoutMilestoneInput[]
    upsert?: HabitMilestoneUpsertWithWhereUniqueWithoutMilestoneInput | HabitMilestoneUpsertWithWhereUniqueWithoutMilestoneInput[]
    createMany?: HabitMilestoneCreateManyMilestoneInputEnvelope
    set?: HabitMilestoneWhereUniqueInput | HabitMilestoneWhereUniqueInput[]
    disconnect?: HabitMilestoneWhereUniqueInput | HabitMilestoneWhereUniqueInput[]
    delete?: HabitMilestoneWhereUniqueInput | HabitMilestoneWhereUniqueInput[]
    connect?: HabitMilestoneWhereUniqueInput | HabitMilestoneWhereUniqueInput[]
    update?: HabitMilestoneUpdateWithWhereUniqueWithoutMilestoneInput | HabitMilestoneUpdateWithWhereUniqueWithoutMilestoneInput[]
    updateMany?: HabitMilestoneUpdateManyWithWhereWithoutMilestoneInput | HabitMilestoneUpdateManyWithWhereWithoutMilestoneInput[]
    deleteMany?: HabitMilestoneScalarWhereInput | HabitMilestoneScalarWhereInput[]
  }

  export type HabitMilestoneUncheckedUpdateManyWithoutMilestoneNestedInput = {
    create?: XOR<HabitMilestoneCreateWithoutMilestoneInput, HabitMilestoneUncheckedCreateWithoutMilestoneInput> | HabitMilestoneCreateWithoutMilestoneInput[] | HabitMilestoneUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: HabitMilestoneCreateOrConnectWithoutMilestoneInput | HabitMilestoneCreateOrConnectWithoutMilestoneInput[]
    upsert?: HabitMilestoneUpsertWithWhereUniqueWithoutMilestoneInput | HabitMilestoneUpsertWithWhereUniqueWithoutMilestoneInput[]
    createMany?: HabitMilestoneCreateManyMilestoneInputEnvelope
    set?: HabitMilestoneWhereUniqueInput | HabitMilestoneWhereUniqueInput[]
    disconnect?: HabitMilestoneWhereUniqueInput | HabitMilestoneWhereUniqueInput[]
    delete?: HabitMilestoneWhereUniqueInput | HabitMilestoneWhereUniqueInput[]
    connect?: HabitMilestoneWhereUniqueInput | HabitMilestoneWhereUniqueInput[]
    update?: HabitMilestoneUpdateWithWhereUniqueWithoutMilestoneInput | HabitMilestoneUpdateWithWhereUniqueWithoutMilestoneInput[]
    updateMany?: HabitMilestoneUpdateManyWithWhereWithoutMilestoneInput | HabitMilestoneUpdateManyWithWhereWithoutMilestoneInput[]
    deleteMany?: HabitMilestoneScalarWhereInput | HabitMilestoneScalarWhereInput[]
  }

  export type HabitCreateNestedOneWithoutMilestonesInput = {
    create?: XOR<HabitCreateWithoutMilestonesInput, HabitUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: HabitCreateOrConnectWithoutMilestonesInput
    connect?: HabitWhereUniqueInput
  }

  export type MilestoneCreateNestedOneWithoutHabitsInput = {
    create?: XOR<MilestoneCreateWithoutHabitsInput, MilestoneUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: MilestoneCreateOrConnectWithoutHabitsInput
    connect?: MilestoneWhereUniqueInput
  }

  export type HabitUpdateOneRequiredWithoutMilestonesNestedInput = {
    create?: XOR<HabitCreateWithoutMilestonesInput, HabitUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: HabitCreateOrConnectWithoutMilestonesInput
    upsert?: HabitUpsertWithoutMilestonesInput
    connect?: HabitWhereUniqueInput
    update?: XOR<XOR<HabitUpdateToOneWithWhereWithoutMilestonesInput, HabitUpdateWithoutMilestonesInput>, HabitUncheckedUpdateWithoutMilestonesInput>
  }

  export type MilestoneUpdateOneRequiredWithoutHabitsNestedInput = {
    create?: XOR<MilestoneCreateWithoutHabitsInput, MilestoneUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: MilestoneCreateOrConnectWithoutHabitsInput
    upsert?: MilestoneUpsertWithoutHabitsInput
    connect?: MilestoneWhereUniqueInput
    update?: XOR<XOR<MilestoneUpdateToOneWithWhereWithoutHabitsInput, MilestoneUpdateWithoutHabitsInput>, MilestoneUncheckedUpdateWithoutHabitsInput>
  }

  export type HabitCreateNestedOneWithoutReflectionsInput = {
    create?: XOR<HabitCreateWithoutReflectionsInput, HabitUncheckedCreateWithoutReflectionsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutReflectionsInput
    connect?: HabitWhereUniqueInput
  }

  export type HabitLogCreateNestedOneWithoutReflectionInput = {
    create?: XOR<HabitLogCreateWithoutReflectionInput, HabitLogUncheckedCreateWithoutReflectionInput>
    connectOrCreate?: HabitLogCreateOrConnectWithoutReflectionInput
    connect?: HabitLogWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReflectionsInput = {
    create?: XOR<UserCreateWithoutReflectionsInput, UserUncheckedCreateWithoutReflectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReflectionsInput
    connect?: UserWhereUniqueInput
  }

  export type HabitUpdateOneRequiredWithoutReflectionsNestedInput = {
    create?: XOR<HabitCreateWithoutReflectionsInput, HabitUncheckedCreateWithoutReflectionsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutReflectionsInput
    upsert?: HabitUpsertWithoutReflectionsInput
    connect?: HabitWhereUniqueInput
    update?: XOR<XOR<HabitUpdateToOneWithWhereWithoutReflectionsInput, HabitUpdateWithoutReflectionsInput>, HabitUncheckedUpdateWithoutReflectionsInput>
  }

  export type HabitLogUpdateOneRequiredWithoutReflectionNestedInput = {
    create?: XOR<HabitLogCreateWithoutReflectionInput, HabitLogUncheckedCreateWithoutReflectionInput>
    connectOrCreate?: HabitLogCreateOrConnectWithoutReflectionInput
    upsert?: HabitLogUpsertWithoutReflectionInput
    connect?: HabitLogWhereUniqueInput
    update?: XOR<XOR<HabitLogUpdateToOneWithWhereWithoutReflectionInput, HabitLogUpdateWithoutReflectionInput>, HabitLogUncheckedUpdateWithoutReflectionInput>
  }

  export type UserUpdateOneRequiredWithoutReflectionsNestedInput = {
    create?: XOR<UserCreateWithoutReflectionsInput, UserUncheckedCreateWithoutReflectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReflectionsInput
    upsert?: UserUpsertWithoutReflectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReflectionsInput, UserUpdateWithoutReflectionsInput>, UserUncheckedUpdateWithoutReflectionsInput>
  }

  export type HabitCreateNestedOneWithoutCompletionsInput = {
    create?: XOR<HabitCreateWithoutCompletionsInput, HabitUncheckedCreateWithoutCompletionsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutCompletionsInput
    connect?: HabitWhereUniqueInput
  }

  export type HabitUpdateOneRequiredWithoutCompletionsNestedInput = {
    create?: XOR<HabitCreateWithoutCompletionsInput, HabitUncheckedCreateWithoutCompletionsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutCompletionsInput
    upsert?: HabitUpsertWithoutCompletionsInput
    connect?: HabitWhereUniqueInput
    update?: XOR<XOR<HabitUpdateToOneWithWhereWithoutCompletionsInput, HabitUpdateWithoutCompletionsInput>, HabitUncheckedUpdateWithoutCompletionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency | EnumFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumFrequencyFilter<$PrismaModel> | $Enums.Frequency
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Frequency | EnumFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Frequency[] | ListEnumFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.Frequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFrequencyFilter<$PrismaModel>
    _max?: NestedEnumFrequencyFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumEnergyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.EnergyLevel | EnumEnergyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EnergyLevel[] | ListEnumEnergyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnergyLevel[] | ListEnumEnergyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEnergyLevelFilter<$PrismaModel> | $Enums.EnergyLevel
  }

  export type NestedEnumEnergyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnergyLevel | EnumEnergyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EnergyLevel[] | ListEnumEnergyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnergyLevel[] | ListEnumEnergyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEnergyLevelWithAggregatesFilter<$PrismaModel> | $Enums.EnergyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnergyLevelFilter<$PrismaModel>
    _max?: NestedEnumEnergyLevelFilter<$PrismaModel>
  }

  export type NestedEnumMilestoneTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneType | EnumMilestoneTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MilestoneType[] | ListEnumMilestoneTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MilestoneType[] | ListEnumMilestoneTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMilestoneTypeFilter<$PrismaModel> | $Enums.MilestoneType
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumMilestoneTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneType | EnumMilestoneTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MilestoneType[] | ListEnumMilestoneTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MilestoneType[] | ListEnumMilestoneTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMilestoneTypeWithAggregatesFilter<$PrismaModel> | $Enums.MilestoneType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMilestoneTypeFilter<$PrismaModel>
    _max?: NestedEnumMilestoneTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type HabitCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    seedDuration?: number | null
    sproutDuration?: number | null
    forestDuration?: number | null
    scheduledTime?: string | null
    scheduledDate?: Date | string | null
    frequency?: $Enums.Frequency
    frequencyCustom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    habitLogs?: HabitLogCreateNestedManyWithoutHabitInput
    milestones?: HabitMilestoneCreateNestedManyWithoutHabitInput
    reflections?: ReflectionCreateNestedManyWithoutHabitInput
    completions?: HabitCompletionCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    seedDuration?: number | null
    sproutDuration?: number | null
    forestDuration?: number | null
    scheduledTime?: string | null
    scheduledDate?: Date | string | null
    frequency?: $Enums.Frequency
    frequencyCustom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutHabitInput
    milestones?: HabitMilestoneUncheckedCreateNestedManyWithoutHabitInput
    reflections?: ReflectionUncheckedCreateNestedManyWithoutHabitInput
    completions?: HabitCompletionUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutUserInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput>
  }

  export type HabitCreateManyUserInputEnvelope = {
    data: HabitCreateManyUserInput | HabitCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HabitLogCreateWithoutUserInput = {
    id?: string
    completedAt?: Date | string
    completedLevel: $Enums.EnergyLevel
    actualDuration?: number | null
    notes?: string | null
    createdAt?: Date | string
    habit: HabitCreateNestedOneWithoutHabitLogsInput
    reflection?: ReflectionCreateNestedOneWithoutHabitLogInput
  }

  export type HabitLogUncheckedCreateWithoutUserInput = {
    id?: string
    habitId: string
    completedAt?: Date | string
    completedLevel: $Enums.EnergyLevel
    actualDuration?: number | null
    notes?: string | null
    createdAt?: Date | string
    reflection?: ReflectionUncheckedCreateNestedOneWithoutHabitLogInput
  }

  export type HabitLogCreateOrConnectWithoutUserInput = {
    where: HabitLogWhereUniqueInput
    create: XOR<HabitLogCreateWithoutUserInput, HabitLogUncheckedCreateWithoutUserInput>
  }

  export type HabitLogCreateManyUserInputEnvelope = {
    data: HabitLogCreateManyUserInput | HabitLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReflectionCreateWithoutUserInput = {
    id?: string
    feeling: string
    mood?: number | null
    notes?: string | null
    aiResponse?: string | null
    suggestion?: string | null
    createdAt?: Date | string
    habit: HabitCreateNestedOneWithoutReflectionsInput
    habitLog: HabitLogCreateNestedOneWithoutReflectionInput
  }

  export type ReflectionUncheckedCreateWithoutUserInput = {
    id?: string
    habitId: string
    habitLogId: string
    feeling: string
    mood?: number | null
    notes?: string | null
    aiResponse?: string | null
    suggestion?: string | null
    createdAt?: Date | string
  }

  export type ReflectionCreateOrConnectWithoutUserInput = {
    where: ReflectionWhereUniqueInput
    create: XOR<ReflectionCreateWithoutUserInput, ReflectionUncheckedCreateWithoutUserInput>
  }

  export type ReflectionCreateManyUserInputEnvelope = {
    data: ReflectionCreateManyUserInput | ReflectionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HabitUpsertWithWhereUniqueWithoutUserInput = {
    where: HabitWhereUniqueInput
    update: XOR<HabitUpdateWithoutUserInput, HabitUncheckedUpdateWithoutUserInput>
    create: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput>
  }

  export type HabitUpdateWithWhereUniqueWithoutUserInput = {
    where: HabitWhereUniqueInput
    data: XOR<HabitUpdateWithoutUserInput, HabitUncheckedUpdateWithoutUserInput>
  }

  export type HabitUpdateManyWithWhereWithoutUserInput = {
    where: HabitScalarWhereInput
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyWithoutUserInput>
  }

  export type HabitScalarWhereInput = {
    AND?: HabitScalarWhereInput | HabitScalarWhereInput[]
    OR?: HabitScalarWhereInput[]
    NOT?: HabitScalarWhereInput | HabitScalarWhereInput[]
    id?: StringFilter<"Habit"> | string
    title?: StringFilter<"Habit"> | string
    description?: StringNullableFilter<"Habit"> | string | null
    userId?: StringFilter<"Habit"> | string
    seedDuration?: IntNullableFilter<"Habit"> | number | null
    sproutDuration?: IntNullableFilter<"Habit"> | number | null
    forestDuration?: IntNullableFilter<"Habit"> | number | null
    scheduledTime?: StringNullableFilter<"Habit"> | string | null
    scheduledDate?: DateTimeNullableFilter<"Habit"> | Date | string | null
    frequency?: EnumFrequencyFilter<"Habit"> | $Enums.Frequency
    frequencyCustom?: StringNullableFilter<"Habit"> | string | null
    isActive?: BoolFilter<"Habit"> | boolean
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
  }

  export type HabitLogUpsertWithWhereUniqueWithoutUserInput = {
    where: HabitLogWhereUniqueInput
    update: XOR<HabitLogUpdateWithoutUserInput, HabitLogUncheckedUpdateWithoutUserInput>
    create: XOR<HabitLogCreateWithoutUserInput, HabitLogUncheckedCreateWithoutUserInput>
  }

  export type HabitLogUpdateWithWhereUniqueWithoutUserInput = {
    where: HabitLogWhereUniqueInput
    data: XOR<HabitLogUpdateWithoutUserInput, HabitLogUncheckedUpdateWithoutUserInput>
  }

  export type HabitLogUpdateManyWithWhereWithoutUserInput = {
    where: HabitLogScalarWhereInput
    data: XOR<HabitLogUpdateManyMutationInput, HabitLogUncheckedUpdateManyWithoutUserInput>
  }

  export type HabitLogScalarWhereInput = {
    AND?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
    OR?: HabitLogScalarWhereInput[]
    NOT?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
    id?: StringFilter<"HabitLog"> | string
    habitId?: StringFilter<"HabitLog"> | string
    userId?: StringFilter<"HabitLog"> | string
    completedAt?: DateTimeFilter<"HabitLog"> | Date | string
    completedLevel?: EnumEnergyLevelFilter<"HabitLog"> | $Enums.EnergyLevel
    actualDuration?: IntNullableFilter<"HabitLog"> | number | null
    notes?: StringNullableFilter<"HabitLog"> | string | null
    createdAt?: DateTimeFilter<"HabitLog"> | Date | string
  }

  export type ReflectionUpsertWithWhereUniqueWithoutUserInput = {
    where: ReflectionWhereUniqueInput
    update: XOR<ReflectionUpdateWithoutUserInput, ReflectionUncheckedUpdateWithoutUserInput>
    create: XOR<ReflectionCreateWithoutUserInput, ReflectionUncheckedCreateWithoutUserInput>
  }

  export type ReflectionUpdateWithWhereUniqueWithoutUserInput = {
    where: ReflectionWhereUniqueInput
    data: XOR<ReflectionUpdateWithoutUserInput, ReflectionUncheckedUpdateWithoutUserInput>
  }

  export type ReflectionUpdateManyWithWhereWithoutUserInput = {
    where: ReflectionScalarWhereInput
    data: XOR<ReflectionUpdateManyMutationInput, ReflectionUncheckedUpdateManyWithoutUserInput>
  }

  export type ReflectionScalarWhereInput = {
    AND?: ReflectionScalarWhereInput | ReflectionScalarWhereInput[]
    OR?: ReflectionScalarWhereInput[]
    NOT?: ReflectionScalarWhereInput | ReflectionScalarWhereInput[]
    id?: StringFilter<"Reflection"> | string
    habitId?: StringFilter<"Reflection"> | string
    habitLogId?: StringFilter<"Reflection"> | string
    userId?: StringFilter<"Reflection"> | string
    feeling?: StringFilter<"Reflection"> | string
    mood?: IntNullableFilter<"Reflection"> | number | null
    notes?: StringNullableFilter<"Reflection"> | string | null
    aiResponse?: StringNullableFilter<"Reflection"> | string | null
    suggestion?: StringNullableFilter<"Reflection"> | string | null
    createdAt?: DateTimeFilter<"Reflection"> | Date | string
  }

  export type UserCreateWithoutHabitsInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    habitLogs?: HabitLogCreateNestedManyWithoutUserInput
    reflections?: ReflectionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHabitsInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutUserInput
    reflections?: ReflectionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHabitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
  }

  export type HabitLogCreateWithoutHabitInput = {
    id?: string
    completedAt?: Date | string
    completedLevel: $Enums.EnergyLevel
    actualDuration?: number | null
    notes?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutHabitLogsInput
    reflection?: ReflectionCreateNestedOneWithoutHabitLogInput
  }

  export type HabitLogUncheckedCreateWithoutHabitInput = {
    id?: string
    userId: string
    completedAt?: Date | string
    completedLevel: $Enums.EnergyLevel
    actualDuration?: number | null
    notes?: string | null
    createdAt?: Date | string
    reflection?: ReflectionUncheckedCreateNestedOneWithoutHabitLogInput
  }

  export type HabitLogCreateOrConnectWithoutHabitInput = {
    where: HabitLogWhereUniqueInput
    create: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput>
  }

  export type HabitLogCreateManyHabitInputEnvelope = {
    data: HabitLogCreateManyHabitInput | HabitLogCreateManyHabitInput[]
    skipDuplicates?: boolean
  }

  export type HabitMilestoneCreateWithoutHabitInput = {
    id?: string
    createdAt?: Date | string
    milestone: MilestoneCreateNestedOneWithoutHabitsInput
  }

  export type HabitMilestoneUncheckedCreateWithoutHabitInput = {
    id?: string
    milestoneId: string
    createdAt?: Date | string
  }

  export type HabitMilestoneCreateOrConnectWithoutHabitInput = {
    where: HabitMilestoneWhereUniqueInput
    create: XOR<HabitMilestoneCreateWithoutHabitInput, HabitMilestoneUncheckedCreateWithoutHabitInput>
  }

  export type HabitMilestoneCreateManyHabitInputEnvelope = {
    data: HabitMilestoneCreateManyHabitInput | HabitMilestoneCreateManyHabitInput[]
    skipDuplicates?: boolean
  }

  export type ReflectionCreateWithoutHabitInput = {
    id?: string
    feeling: string
    mood?: number | null
    notes?: string | null
    aiResponse?: string | null
    suggestion?: string | null
    createdAt?: Date | string
    habitLog: HabitLogCreateNestedOneWithoutReflectionInput
    user: UserCreateNestedOneWithoutReflectionsInput
  }

  export type ReflectionUncheckedCreateWithoutHabitInput = {
    id?: string
    habitLogId: string
    userId: string
    feeling: string
    mood?: number | null
    notes?: string | null
    aiResponse?: string | null
    suggestion?: string | null
    createdAt?: Date | string
  }

  export type ReflectionCreateOrConnectWithoutHabitInput = {
    where: ReflectionWhereUniqueInput
    create: XOR<ReflectionCreateWithoutHabitInput, ReflectionUncheckedCreateWithoutHabitInput>
  }

  export type ReflectionCreateManyHabitInputEnvelope = {
    data: ReflectionCreateManyHabitInput | ReflectionCreateManyHabitInput[]
    skipDuplicates?: boolean
  }

  export type HabitCompletionCreateWithoutHabitInput = {
    id?: string
    completedAt?: Date | string
    createdAt?: Date | string
  }

  export type HabitCompletionUncheckedCreateWithoutHabitInput = {
    id?: string
    completedAt?: Date | string
    createdAt?: Date | string
  }

  export type HabitCompletionCreateOrConnectWithoutHabitInput = {
    where: HabitCompletionWhereUniqueInput
    create: XOR<HabitCompletionCreateWithoutHabitInput, HabitCompletionUncheckedCreateWithoutHabitInput>
  }

  export type HabitCompletionCreateManyHabitInputEnvelope = {
    data: HabitCompletionCreateManyHabitInput | HabitCompletionCreateManyHabitInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutHabitsInput = {
    update: XOR<UserUpdateWithoutHabitsInput, UserUncheckedUpdateWithoutHabitsInput>
    create: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHabitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHabitsInput, UserUncheckedUpdateWithoutHabitsInput>
  }

  export type UserUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitLogs?: HabitLogUpdateManyWithoutUserNestedInput
    reflections?: ReflectionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitLogs?: HabitLogUncheckedUpdateManyWithoutUserNestedInput
    reflections?: ReflectionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HabitLogUpsertWithWhereUniqueWithoutHabitInput = {
    where: HabitLogWhereUniqueInput
    update: XOR<HabitLogUpdateWithoutHabitInput, HabitLogUncheckedUpdateWithoutHabitInput>
    create: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput>
  }

  export type HabitLogUpdateWithWhereUniqueWithoutHabitInput = {
    where: HabitLogWhereUniqueInput
    data: XOR<HabitLogUpdateWithoutHabitInput, HabitLogUncheckedUpdateWithoutHabitInput>
  }

  export type HabitLogUpdateManyWithWhereWithoutHabitInput = {
    where: HabitLogScalarWhereInput
    data: XOR<HabitLogUpdateManyMutationInput, HabitLogUncheckedUpdateManyWithoutHabitInput>
  }

  export type HabitMilestoneUpsertWithWhereUniqueWithoutHabitInput = {
    where: HabitMilestoneWhereUniqueInput
    update: XOR<HabitMilestoneUpdateWithoutHabitInput, HabitMilestoneUncheckedUpdateWithoutHabitInput>
    create: XOR<HabitMilestoneCreateWithoutHabitInput, HabitMilestoneUncheckedCreateWithoutHabitInput>
  }

  export type HabitMilestoneUpdateWithWhereUniqueWithoutHabitInput = {
    where: HabitMilestoneWhereUniqueInput
    data: XOR<HabitMilestoneUpdateWithoutHabitInput, HabitMilestoneUncheckedUpdateWithoutHabitInput>
  }

  export type HabitMilestoneUpdateManyWithWhereWithoutHabitInput = {
    where: HabitMilestoneScalarWhereInput
    data: XOR<HabitMilestoneUpdateManyMutationInput, HabitMilestoneUncheckedUpdateManyWithoutHabitInput>
  }

  export type HabitMilestoneScalarWhereInput = {
    AND?: HabitMilestoneScalarWhereInput | HabitMilestoneScalarWhereInput[]
    OR?: HabitMilestoneScalarWhereInput[]
    NOT?: HabitMilestoneScalarWhereInput | HabitMilestoneScalarWhereInput[]
    id?: StringFilter<"HabitMilestone"> | string
    habitId?: StringFilter<"HabitMilestone"> | string
    milestoneId?: StringFilter<"HabitMilestone"> | string
    createdAt?: DateTimeFilter<"HabitMilestone"> | Date | string
  }

  export type ReflectionUpsertWithWhereUniqueWithoutHabitInput = {
    where: ReflectionWhereUniqueInput
    update: XOR<ReflectionUpdateWithoutHabitInput, ReflectionUncheckedUpdateWithoutHabitInput>
    create: XOR<ReflectionCreateWithoutHabitInput, ReflectionUncheckedCreateWithoutHabitInput>
  }

  export type ReflectionUpdateWithWhereUniqueWithoutHabitInput = {
    where: ReflectionWhereUniqueInput
    data: XOR<ReflectionUpdateWithoutHabitInput, ReflectionUncheckedUpdateWithoutHabitInput>
  }

  export type ReflectionUpdateManyWithWhereWithoutHabitInput = {
    where: ReflectionScalarWhereInput
    data: XOR<ReflectionUpdateManyMutationInput, ReflectionUncheckedUpdateManyWithoutHabitInput>
  }

  export type HabitCompletionUpsertWithWhereUniqueWithoutHabitInput = {
    where: HabitCompletionWhereUniqueInput
    update: XOR<HabitCompletionUpdateWithoutHabitInput, HabitCompletionUncheckedUpdateWithoutHabitInput>
    create: XOR<HabitCompletionCreateWithoutHabitInput, HabitCompletionUncheckedCreateWithoutHabitInput>
  }

  export type HabitCompletionUpdateWithWhereUniqueWithoutHabitInput = {
    where: HabitCompletionWhereUniqueInput
    data: XOR<HabitCompletionUpdateWithoutHabitInput, HabitCompletionUncheckedUpdateWithoutHabitInput>
  }

  export type HabitCompletionUpdateManyWithWhereWithoutHabitInput = {
    where: HabitCompletionScalarWhereInput
    data: XOR<HabitCompletionUpdateManyMutationInput, HabitCompletionUncheckedUpdateManyWithoutHabitInput>
  }

  export type HabitCompletionScalarWhereInput = {
    AND?: HabitCompletionScalarWhereInput | HabitCompletionScalarWhereInput[]
    OR?: HabitCompletionScalarWhereInput[]
    NOT?: HabitCompletionScalarWhereInput | HabitCompletionScalarWhereInput[]
    id?: StringFilter<"HabitCompletion"> | string
    habitId?: StringFilter<"HabitCompletion"> | string
    completedAt?: DateTimeFilter<"HabitCompletion"> | Date | string
    createdAt?: DateTimeFilter<"HabitCompletion"> | Date | string
  }

  export type HabitCreateWithoutHabitLogsInput = {
    id?: string
    title: string
    description?: string | null
    seedDuration?: number | null
    sproutDuration?: number | null
    forestDuration?: number | null
    scheduledTime?: string | null
    scheduledDate?: Date | string | null
    frequency?: $Enums.Frequency
    frequencyCustom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHabitsInput
    milestones?: HabitMilestoneCreateNestedManyWithoutHabitInput
    reflections?: ReflectionCreateNestedManyWithoutHabitInput
    completions?: HabitCompletionCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutHabitLogsInput = {
    id?: string
    title: string
    description?: string | null
    userId: string
    seedDuration?: number | null
    sproutDuration?: number | null
    forestDuration?: number | null
    scheduledTime?: string | null
    scheduledDate?: Date | string | null
    frequency?: $Enums.Frequency
    frequencyCustom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    milestones?: HabitMilestoneUncheckedCreateNestedManyWithoutHabitInput
    reflections?: ReflectionUncheckedCreateNestedManyWithoutHabitInput
    completions?: HabitCompletionUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutHabitLogsInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutHabitLogsInput, HabitUncheckedCreateWithoutHabitLogsInput>
  }

  export type UserCreateWithoutHabitLogsInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitCreateNestedManyWithoutUserInput
    reflections?: ReflectionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHabitLogsInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    reflections?: ReflectionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHabitLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHabitLogsInput, UserUncheckedCreateWithoutHabitLogsInput>
  }

  export type ReflectionCreateWithoutHabitLogInput = {
    id?: string
    feeling: string
    mood?: number | null
    notes?: string | null
    aiResponse?: string | null
    suggestion?: string | null
    createdAt?: Date | string
    habit: HabitCreateNestedOneWithoutReflectionsInput
    user: UserCreateNestedOneWithoutReflectionsInput
  }

  export type ReflectionUncheckedCreateWithoutHabitLogInput = {
    id?: string
    habitId: string
    userId: string
    feeling: string
    mood?: number | null
    notes?: string | null
    aiResponse?: string | null
    suggestion?: string | null
    createdAt?: Date | string
  }

  export type ReflectionCreateOrConnectWithoutHabitLogInput = {
    where: ReflectionWhereUniqueInput
    create: XOR<ReflectionCreateWithoutHabitLogInput, ReflectionUncheckedCreateWithoutHabitLogInput>
  }

  export type HabitUpsertWithoutHabitLogsInput = {
    update: XOR<HabitUpdateWithoutHabitLogsInput, HabitUncheckedUpdateWithoutHabitLogsInput>
    create: XOR<HabitCreateWithoutHabitLogsInput, HabitUncheckedCreateWithoutHabitLogsInput>
    where?: HabitWhereInput
  }

  export type HabitUpdateToOneWithWhereWithoutHabitLogsInput = {
    where?: HabitWhereInput
    data: XOR<HabitUpdateWithoutHabitLogsInput, HabitUncheckedUpdateWithoutHabitLogsInput>
  }

  export type HabitUpdateWithoutHabitLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    sproutDuration?: NullableIntFieldUpdateOperationsInput | number | null
    forestDuration?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    frequencyCustom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
    milestones?: HabitMilestoneUpdateManyWithoutHabitNestedInput
    reflections?: ReflectionUpdateManyWithoutHabitNestedInput
    completions?: HabitCompletionUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutHabitLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    seedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    sproutDuration?: NullableIntFieldUpdateOperationsInput | number | null
    forestDuration?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    frequencyCustom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestones?: HabitMilestoneUncheckedUpdateManyWithoutHabitNestedInput
    reflections?: ReflectionUncheckedUpdateManyWithoutHabitNestedInput
    completions?: HabitCompletionUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type UserUpsertWithoutHabitLogsInput = {
    update: XOR<UserUpdateWithoutHabitLogsInput, UserUncheckedUpdateWithoutHabitLogsInput>
    create: XOR<UserCreateWithoutHabitLogsInput, UserUncheckedCreateWithoutHabitLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHabitLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHabitLogsInput, UserUncheckedUpdateWithoutHabitLogsInput>
  }

  export type UserUpdateWithoutHabitLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUpdateManyWithoutUserNestedInput
    reflections?: ReflectionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHabitLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    reflections?: ReflectionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReflectionUpsertWithoutHabitLogInput = {
    update: XOR<ReflectionUpdateWithoutHabitLogInput, ReflectionUncheckedUpdateWithoutHabitLogInput>
    create: XOR<ReflectionCreateWithoutHabitLogInput, ReflectionUncheckedCreateWithoutHabitLogInput>
    where?: ReflectionWhereInput
  }

  export type ReflectionUpdateToOneWithWhereWithoutHabitLogInput = {
    where?: ReflectionWhereInput
    data: XOR<ReflectionUpdateWithoutHabitLogInput, ReflectionUncheckedUpdateWithoutHabitLogInput>
  }

  export type ReflectionUpdateWithoutHabitLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    feeling?: StringFieldUpdateOperationsInput | string
    mood?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponse?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habit?: HabitUpdateOneRequiredWithoutReflectionsNestedInput
    user?: UserUpdateOneRequiredWithoutReflectionsNestedInput
  }

  export type ReflectionUncheckedUpdateWithoutHabitLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    feeling?: StringFieldUpdateOperationsInput | string
    mood?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponse?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitMilestoneCreateWithoutMilestoneInput = {
    id?: string
    createdAt?: Date | string
    habit: HabitCreateNestedOneWithoutMilestonesInput
  }

  export type HabitMilestoneUncheckedCreateWithoutMilestoneInput = {
    id?: string
    habitId: string
    createdAt?: Date | string
  }

  export type HabitMilestoneCreateOrConnectWithoutMilestoneInput = {
    where: HabitMilestoneWhereUniqueInput
    create: XOR<HabitMilestoneCreateWithoutMilestoneInput, HabitMilestoneUncheckedCreateWithoutMilestoneInput>
  }

  export type HabitMilestoneCreateManyMilestoneInputEnvelope = {
    data: HabitMilestoneCreateManyMilestoneInput | HabitMilestoneCreateManyMilestoneInput[]
    skipDuplicates?: boolean
  }

  export type HabitMilestoneUpsertWithWhereUniqueWithoutMilestoneInput = {
    where: HabitMilestoneWhereUniqueInput
    update: XOR<HabitMilestoneUpdateWithoutMilestoneInput, HabitMilestoneUncheckedUpdateWithoutMilestoneInput>
    create: XOR<HabitMilestoneCreateWithoutMilestoneInput, HabitMilestoneUncheckedCreateWithoutMilestoneInput>
  }

  export type HabitMilestoneUpdateWithWhereUniqueWithoutMilestoneInput = {
    where: HabitMilestoneWhereUniqueInput
    data: XOR<HabitMilestoneUpdateWithoutMilestoneInput, HabitMilestoneUncheckedUpdateWithoutMilestoneInput>
  }

  export type HabitMilestoneUpdateManyWithWhereWithoutMilestoneInput = {
    where: HabitMilestoneScalarWhereInput
    data: XOR<HabitMilestoneUpdateManyMutationInput, HabitMilestoneUncheckedUpdateManyWithoutMilestoneInput>
  }

  export type HabitCreateWithoutMilestonesInput = {
    id?: string
    title: string
    description?: string | null
    seedDuration?: number | null
    sproutDuration?: number | null
    forestDuration?: number | null
    scheduledTime?: string | null
    scheduledDate?: Date | string | null
    frequency?: $Enums.Frequency
    frequencyCustom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHabitsInput
    habitLogs?: HabitLogCreateNestedManyWithoutHabitInput
    reflections?: ReflectionCreateNestedManyWithoutHabitInput
    completions?: HabitCompletionCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutMilestonesInput = {
    id?: string
    title: string
    description?: string | null
    userId: string
    seedDuration?: number | null
    sproutDuration?: number | null
    forestDuration?: number | null
    scheduledTime?: string | null
    scheduledDate?: Date | string | null
    frequency?: $Enums.Frequency
    frequencyCustom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutHabitInput
    reflections?: ReflectionUncheckedCreateNestedManyWithoutHabitInput
    completions?: HabitCompletionUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutMilestonesInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutMilestonesInput, HabitUncheckedCreateWithoutMilestonesInput>
  }

  export type MilestoneCreateWithoutHabitsInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.MilestoneType
    target: number
    current?: number
    unit?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilestoneUncheckedCreateWithoutHabitsInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.MilestoneType
    target: number
    current?: number
    unit?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilestoneCreateOrConnectWithoutHabitsInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutHabitsInput, MilestoneUncheckedCreateWithoutHabitsInput>
  }

  export type HabitUpsertWithoutMilestonesInput = {
    update: XOR<HabitUpdateWithoutMilestonesInput, HabitUncheckedUpdateWithoutMilestonesInput>
    create: XOR<HabitCreateWithoutMilestonesInput, HabitUncheckedCreateWithoutMilestonesInput>
    where?: HabitWhereInput
  }

  export type HabitUpdateToOneWithWhereWithoutMilestonesInput = {
    where?: HabitWhereInput
    data: XOR<HabitUpdateWithoutMilestonesInput, HabitUncheckedUpdateWithoutMilestonesInput>
  }

  export type HabitUpdateWithoutMilestonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    sproutDuration?: NullableIntFieldUpdateOperationsInput | number | null
    forestDuration?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    frequencyCustom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
    habitLogs?: HabitLogUpdateManyWithoutHabitNestedInput
    reflections?: ReflectionUpdateManyWithoutHabitNestedInput
    completions?: HabitCompletionUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutMilestonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    seedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    sproutDuration?: NullableIntFieldUpdateOperationsInput | number | null
    forestDuration?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    frequencyCustom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitLogs?: HabitLogUncheckedUpdateManyWithoutHabitNestedInput
    reflections?: ReflectionUncheckedUpdateManyWithoutHabitNestedInput
    completions?: HabitCompletionUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type MilestoneUpsertWithoutHabitsInput = {
    update: XOR<MilestoneUpdateWithoutHabitsInput, MilestoneUncheckedUpdateWithoutHabitsInput>
    create: XOR<MilestoneCreateWithoutHabitsInput, MilestoneUncheckedCreateWithoutHabitsInput>
    where?: MilestoneWhereInput
  }

  export type MilestoneUpdateToOneWithWhereWithoutHabitsInput = {
    where?: MilestoneWhereInput
    data: XOR<MilestoneUpdateWithoutHabitsInput, MilestoneUncheckedUpdateWithoutHabitsInput>
  }

  export type MilestoneUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMilestoneTypeFieldUpdateOperationsInput | $Enums.MilestoneType
    target?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneUncheckedUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMilestoneTypeFieldUpdateOperationsInput | $Enums.MilestoneType
    target?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitCreateWithoutReflectionsInput = {
    id?: string
    title: string
    description?: string | null
    seedDuration?: number | null
    sproutDuration?: number | null
    forestDuration?: number | null
    scheduledTime?: string | null
    scheduledDate?: Date | string | null
    frequency?: $Enums.Frequency
    frequencyCustom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHabitsInput
    habitLogs?: HabitLogCreateNestedManyWithoutHabitInput
    milestones?: HabitMilestoneCreateNestedManyWithoutHabitInput
    completions?: HabitCompletionCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutReflectionsInput = {
    id?: string
    title: string
    description?: string | null
    userId: string
    seedDuration?: number | null
    sproutDuration?: number | null
    forestDuration?: number | null
    scheduledTime?: string | null
    scheduledDate?: Date | string | null
    frequency?: $Enums.Frequency
    frequencyCustom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutHabitInput
    milestones?: HabitMilestoneUncheckedCreateNestedManyWithoutHabitInput
    completions?: HabitCompletionUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutReflectionsInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutReflectionsInput, HabitUncheckedCreateWithoutReflectionsInput>
  }

  export type HabitLogCreateWithoutReflectionInput = {
    id?: string
    completedAt?: Date | string
    completedLevel: $Enums.EnergyLevel
    actualDuration?: number | null
    notes?: string | null
    createdAt?: Date | string
    habit: HabitCreateNestedOneWithoutHabitLogsInput
    user: UserCreateNestedOneWithoutHabitLogsInput
  }

  export type HabitLogUncheckedCreateWithoutReflectionInput = {
    id?: string
    habitId: string
    userId: string
    completedAt?: Date | string
    completedLevel: $Enums.EnergyLevel
    actualDuration?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type HabitLogCreateOrConnectWithoutReflectionInput = {
    where: HabitLogWhereUniqueInput
    create: XOR<HabitLogCreateWithoutReflectionInput, HabitLogUncheckedCreateWithoutReflectionInput>
  }

  export type UserCreateWithoutReflectionsInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitCreateNestedManyWithoutUserInput
    habitLogs?: HabitLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReflectionsInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReflectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReflectionsInput, UserUncheckedCreateWithoutReflectionsInput>
  }

  export type HabitUpsertWithoutReflectionsInput = {
    update: XOR<HabitUpdateWithoutReflectionsInput, HabitUncheckedUpdateWithoutReflectionsInput>
    create: XOR<HabitCreateWithoutReflectionsInput, HabitUncheckedCreateWithoutReflectionsInput>
    where?: HabitWhereInput
  }

  export type HabitUpdateToOneWithWhereWithoutReflectionsInput = {
    where?: HabitWhereInput
    data: XOR<HabitUpdateWithoutReflectionsInput, HabitUncheckedUpdateWithoutReflectionsInput>
  }

  export type HabitUpdateWithoutReflectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    sproutDuration?: NullableIntFieldUpdateOperationsInput | number | null
    forestDuration?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    frequencyCustom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
    habitLogs?: HabitLogUpdateManyWithoutHabitNestedInput
    milestones?: HabitMilestoneUpdateManyWithoutHabitNestedInput
    completions?: HabitCompletionUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutReflectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    seedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    sproutDuration?: NullableIntFieldUpdateOperationsInput | number | null
    forestDuration?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    frequencyCustom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitLogs?: HabitLogUncheckedUpdateManyWithoutHabitNestedInput
    milestones?: HabitMilestoneUncheckedUpdateManyWithoutHabitNestedInput
    completions?: HabitCompletionUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitLogUpsertWithoutReflectionInput = {
    update: XOR<HabitLogUpdateWithoutReflectionInput, HabitLogUncheckedUpdateWithoutReflectionInput>
    create: XOR<HabitLogCreateWithoutReflectionInput, HabitLogUncheckedCreateWithoutReflectionInput>
    where?: HabitLogWhereInput
  }

  export type HabitLogUpdateToOneWithWhereWithoutReflectionInput = {
    where?: HabitLogWhereInput
    data: XOR<HabitLogUpdateWithoutReflectionInput, HabitLogUncheckedUpdateWithoutReflectionInput>
  }

  export type HabitLogUpdateWithoutReflectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedLevel?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    actualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habit?: HabitUpdateOneRequiredWithoutHabitLogsNestedInput
    user?: UserUpdateOneRequiredWithoutHabitLogsNestedInput
  }

  export type HabitLogUncheckedUpdateWithoutReflectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedLevel?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    actualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutReflectionsInput = {
    update: XOR<UserUpdateWithoutReflectionsInput, UserUncheckedUpdateWithoutReflectionsInput>
    create: XOR<UserCreateWithoutReflectionsInput, UserUncheckedCreateWithoutReflectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReflectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReflectionsInput, UserUncheckedUpdateWithoutReflectionsInput>
  }

  export type UserUpdateWithoutReflectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUpdateManyWithoutUserNestedInput
    habitLogs?: HabitLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReflectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    habitLogs?: HabitLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HabitCreateWithoutCompletionsInput = {
    id?: string
    title: string
    description?: string | null
    seedDuration?: number | null
    sproutDuration?: number | null
    forestDuration?: number | null
    scheduledTime?: string | null
    scheduledDate?: Date | string | null
    frequency?: $Enums.Frequency
    frequencyCustom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHabitsInput
    habitLogs?: HabitLogCreateNestedManyWithoutHabitInput
    milestones?: HabitMilestoneCreateNestedManyWithoutHabitInput
    reflections?: ReflectionCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutCompletionsInput = {
    id?: string
    title: string
    description?: string | null
    userId: string
    seedDuration?: number | null
    sproutDuration?: number | null
    forestDuration?: number | null
    scheduledTime?: string | null
    scheduledDate?: Date | string | null
    frequency?: $Enums.Frequency
    frequencyCustom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutHabitInput
    milestones?: HabitMilestoneUncheckedCreateNestedManyWithoutHabitInput
    reflections?: ReflectionUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutCompletionsInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutCompletionsInput, HabitUncheckedCreateWithoutCompletionsInput>
  }

  export type HabitUpsertWithoutCompletionsInput = {
    update: XOR<HabitUpdateWithoutCompletionsInput, HabitUncheckedUpdateWithoutCompletionsInput>
    create: XOR<HabitCreateWithoutCompletionsInput, HabitUncheckedCreateWithoutCompletionsInput>
    where?: HabitWhereInput
  }

  export type HabitUpdateToOneWithWhereWithoutCompletionsInput = {
    where?: HabitWhereInput
    data: XOR<HabitUpdateWithoutCompletionsInput, HabitUncheckedUpdateWithoutCompletionsInput>
  }

  export type HabitUpdateWithoutCompletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    sproutDuration?: NullableIntFieldUpdateOperationsInput | number | null
    forestDuration?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    frequencyCustom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
    habitLogs?: HabitLogUpdateManyWithoutHabitNestedInput
    milestones?: HabitMilestoneUpdateManyWithoutHabitNestedInput
    reflections?: ReflectionUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutCompletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    seedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    sproutDuration?: NullableIntFieldUpdateOperationsInput | number | null
    forestDuration?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    frequencyCustom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitLogs?: HabitLogUncheckedUpdateManyWithoutHabitNestedInput
    milestones?: HabitMilestoneUncheckedUpdateManyWithoutHabitNestedInput
    reflections?: ReflectionUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    seedDuration?: number | null
    sproutDuration?: number | null
    forestDuration?: number | null
    scheduledTime?: string | null
    scheduledDate?: Date | string | null
    frequency?: $Enums.Frequency
    frequencyCustom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitLogCreateManyUserInput = {
    id?: string
    habitId: string
    completedAt?: Date | string
    completedLevel: $Enums.EnergyLevel
    actualDuration?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type ReflectionCreateManyUserInput = {
    id?: string
    habitId: string
    habitLogId: string
    feeling: string
    mood?: number | null
    notes?: string | null
    aiResponse?: string | null
    suggestion?: string | null
    createdAt?: Date | string
  }

  export type HabitUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    sproutDuration?: NullableIntFieldUpdateOperationsInput | number | null
    forestDuration?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    frequencyCustom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitLogs?: HabitLogUpdateManyWithoutHabitNestedInput
    milestones?: HabitMilestoneUpdateManyWithoutHabitNestedInput
    reflections?: ReflectionUpdateManyWithoutHabitNestedInput
    completions?: HabitCompletionUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    sproutDuration?: NullableIntFieldUpdateOperationsInput | number | null
    forestDuration?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    frequencyCustom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitLogs?: HabitLogUncheckedUpdateManyWithoutHabitNestedInput
    milestones?: HabitMilestoneUncheckedUpdateManyWithoutHabitNestedInput
    reflections?: ReflectionUncheckedUpdateManyWithoutHabitNestedInput
    completions?: HabitCompletionUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seedDuration?: NullableIntFieldUpdateOperationsInput | number | null
    sproutDuration?: NullableIntFieldUpdateOperationsInput | number | null
    forestDuration?: NullableIntFieldUpdateOperationsInput | number | null
    scheduledTime?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumFrequencyFieldUpdateOperationsInput | $Enums.Frequency
    frequencyCustom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedLevel?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    actualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habit?: HabitUpdateOneRequiredWithoutHabitLogsNestedInput
    reflection?: ReflectionUpdateOneWithoutHabitLogNestedInput
  }

  export type HabitLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedLevel?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    actualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reflection?: ReflectionUncheckedUpdateOneWithoutHabitLogNestedInput
  }

  export type HabitLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedLevel?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    actualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReflectionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    feeling?: StringFieldUpdateOperationsInput | string
    mood?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponse?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habit?: HabitUpdateOneRequiredWithoutReflectionsNestedInput
    habitLog?: HabitLogUpdateOneRequiredWithoutReflectionNestedInput
  }

  export type ReflectionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    habitLogId?: StringFieldUpdateOperationsInput | string
    feeling?: StringFieldUpdateOperationsInput | string
    mood?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponse?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReflectionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    habitLogId?: StringFieldUpdateOperationsInput | string
    feeling?: StringFieldUpdateOperationsInput | string
    mood?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponse?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogCreateManyHabitInput = {
    id?: string
    userId: string
    completedAt?: Date | string
    completedLevel: $Enums.EnergyLevel
    actualDuration?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type HabitMilestoneCreateManyHabitInput = {
    id?: string
    milestoneId: string
    createdAt?: Date | string
  }

  export type ReflectionCreateManyHabitInput = {
    id?: string
    habitLogId: string
    userId: string
    feeling: string
    mood?: number | null
    notes?: string | null
    aiResponse?: string | null
    suggestion?: string | null
    createdAt?: Date | string
  }

  export type HabitCompletionCreateManyHabitInput = {
    id?: string
    completedAt?: Date | string
    createdAt?: Date | string
  }

  export type HabitLogUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedLevel?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    actualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHabitLogsNestedInput
    reflection?: ReflectionUpdateOneWithoutHabitLogNestedInput
  }

  export type HabitLogUncheckedUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedLevel?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    actualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reflection?: ReflectionUncheckedUpdateOneWithoutHabitLogNestedInput
  }

  export type HabitLogUncheckedUpdateManyWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedLevel?: EnumEnergyLevelFieldUpdateOperationsInput | $Enums.EnergyLevel
    actualDuration?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitMilestoneUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestone?: MilestoneUpdateOneRequiredWithoutHabitsNestedInput
  }

  export type HabitMilestoneUncheckedUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    milestoneId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitMilestoneUncheckedUpdateManyWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    milestoneId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReflectionUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    feeling?: StringFieldUpdateOperationsInput | string
    mood?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponse?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitLog?: HabitLogUpdateOneRequiredWithoutReflectionNestedInput
    user?: UserUpdateOneRequiredWithoutReflectionsNestedInput
  }

  export type ReflectionUncheckedUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitLogId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    feeling?: StringFieldUpdateOperationsInput | string
    mood?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponse?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReflectionUncheckedUpdateManyWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitLogId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    feeling?: StringFieldUpdateOperationsInput | string
    mood?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponse?: NullableStringFieldUpdateOperationsInput | string | null
    suggestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitCompletionUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitCompletionUncheckedUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitCompletionUncheckedUpdateManyWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitMilestoneCreateManyMilestoneInput = {
    id?: string
    habitId: string
    createdAt?: Date | string
  }

  export type HabitMilestoneUpdateWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habit?: HabitUpdateOneRequiredWithoutMilestonesNestedInput
  }

  export type HabitMilestoneUncheckedUpdateWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitMilestoneUncheckedUpdateManyWithoutMilestoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}