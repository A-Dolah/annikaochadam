import { NextApiRequest, NextApiResponse } from 'next'

import { pgPool, setupPgPool } from 'database/DBconfig'

import { insertGuestQuery } from 'database/queries'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!pgPool) {
    setupPgPool()
  }

  // if (req.method === `GET`) {
  //   try {
  //     const { rows } = await pgPool.query(selectAllGuestsQuery)
  //     res.status(200).json({ guests: rows })
  //   } catch (e) {
  //     res.status(500).json({ error: e })
  //   }
  // }

  if (req.method === `POST`) {
    const { email, firstName, lastName, attending27, attending28, notAttending, diet } = req.body
    try {
      const { rows } = await pgPool.query(insertGuestQuery, [
        email,
        firstName,
        lastName,
        attending27,
        attending28,
        notAttending,
        diet,
      ])

      console.log(
        `Guest ${firstName} ${lastName} registered and will ${
          attending27 ? `attend the 27th` : `not attend the 27th`
        },
          ${attending27 ? `attend the 28th` : `not attend the 28th`}.
        `
      )
      res.status(200).json({ data: rows })
    } catch (e) {
      console.error(`POST GUESTS ERROR`, e)
      res.status(500).json({ error: e })
    }
  }
}
