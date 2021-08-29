import dotenv from 'dotenv'

dotenv.config({ path: `../env` })

interface DbVariablesInterface {
  user: string
  uri: string
  host: string
  database: string
  password: string
}

export const ENVIRONMENT = process.env.NODE_ENV

export const ELEPHANTDB_VARIABLES: DbVariablesInterface = {
  user: process.env.ELEPHANTDB_DEV_USER || ``,
  uri: process.env.ELEPHANTDB_DEV_URI_CLOUD || ``,
  host: process.env.ELEPHANTDB_DEV_HOST || ``,
  database: process.env.ELEPHANTDB_DEV_DATABASE || ``,
  password: process.env.ELEPHANTDB_DEV_PASSWORD || ``,
}
