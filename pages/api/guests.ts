import dotenv from 'dotenv'
import { NextApiRequest, NextApiResponse } from 'next'

import { Pool, PoolConfig } from 'pg'

import { ELEPHANTDB_VARIABLES } from '@config/DBconfig'

import { selectAllGuestsQuery } from 'queries'

dotenv.config()

let pgPool: Pool

const poolConfig: PoolConfig = {
  user: ELEPHANTDB_VARIABLES.user,
  host: ELEPHANTDB_VARIABLES.host,
  database: ELEPHANTDB_VARIABLES.database,
  password: ELEPHANTDB_VARIABLES.password,
  port: 5432,
  ssl: true,
}

const setupPgPool = () => {
  pgPool = new Pool(poolConfig)
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!pgPool) {
    setupPgPool()
  }

  try {
    const { rows } = await pgPool.query(selectAllGuestsQuery)

    res.status(200).json({ guests: rows })
  } catch (e) {
    res.status(500).json({ error: e })
  }
}
