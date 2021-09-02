import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config({ path: `../env` })

export const gmailEmail = process.env.GMAIL_EMAIL
const gmailPassword = process.env.GMAIL_PASSWORD

const transportString = `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`
const transporter = nodemailer.createTransport(transportString)

export const makeANiceEmail = (text: string) => `
  <div className="email" style"
  border: 1px solid black;
  padding: 20px;
  font-family: sans-serif;
  line-height: 2;
  font-size: 20px;
  "
  >
  <h2>Hej!</h2>
  <p>${text}</p>
  <p>Med vänlig hälsning</p><br/>
  <p>Annika & Adam</p>
  </div>
`

export default transporter
