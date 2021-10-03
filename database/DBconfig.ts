import { Pool, PoolConfig } from 'pg'

interface DbVariablesInterface {
  user: string
  uri: string
  host: string
  database: string
  password: string
}

const ENVIRONMENT = process.env.NODE_ENV

const ELEPHANTDB_VARIABLES: DbVariablesInterface = {
  user: process.env[`ELEPHANTDB_${ENVIRONMENT}_USER`] || ``,
  uri: process.env[`ELEPHANTDB_${ENVIRONMENT}_URI_CLOUD`] || ``,
  host: process.env[`ELEPHANTDB_${ENVIRONMENT}_HOST`] || ``,
  database: process.env[`ELEPHANTDB_${ENVIRONMENT}_DATABASE`] || ``,
  password: process.env[`ELEPHANTDB_${ENVIRONMENT}_PASSWORD`] || ``,
}

const poolConfig: PoolConfig = {
  user: ELEPHANTDB_VARIABLES.user,
  host: ELEPHANTDB_VARIABLES.host,
  database: ELEPHANTDB_VARIABLES.database,
  password: ELEPHANTDB_VARIABLES.password,
  port: 5432,
  ssl: true,
}

// eslint-disable-next-line import/no-mutable-exports
export let pgPool: Pool

export const setupPgPool = () => {
  pgPool = new Pool(poolConfig)
}
