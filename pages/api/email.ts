import dotenv from 'dotenv'
import { NextApiRequest, NextApiResponse } from 'next'

import transporter, { makeANiceEmail, gmailEmail } from '../../email/emailConfig'

dotenv.config()

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === `POST`) {
    try {
      const { email, firstName, lastName, attending27, attending28, diet } = req.body

      await transporter.sendMail({
        from: gmailEmail,
        to: email,
        subject: `Bekräftelse`,
        html: makeANiceEmail(
          `
        			Här kommer din bekräftelse ${firstName} ${lastName}!
        			\n\n
        			${attending27 && `Kommer den 27`}
        			${attending28 && `Kommer den 28`}
        			${diet && diet}
        			`
        ),
      })
      res.status(200)
    } catch (e) {
      res.status(500).json({ error: e })
    }
  }
}
