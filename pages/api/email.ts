import dotenv from 'dotenv'
import { NextApiRequest, NextApiResponse } from 'next'

import transporter, { makeANiceEmail, gmailEmail } from '../../email/emailConfig'

dotenv.config()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === `POST`) {
    try {
      const { guestEmail, state } = req.body

      const html = makeANiceEmail(state)

      await transporter.sendMail({
        from: gmailEmail,
        to: guestEmail,
        subject: `Bekräftelse anmälan`,
        html,
      })

      res.status(200).json(`Email sent`)
    } catch (e) {
      res.status(500).json({ error: e })
    }
  }
}
