/* eslint-disable prettier/prettier */
import nodemailer from 'nodemailer'

import { Guest } from '@containers/AttendForm'

export const gmailEmail = process.env.GMAIL_EMAIL

const transporter = nodemailer.createTransport({
  host: `smtp.gmail.com`,
   port: 465,
  secure: true,
  auth: {
    type: `OAuth2`,
    user: gmailEmail,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
})


export const makeANiceEmail = (guest: Guest) => {
  const template = `<!DOCTYPE html>
              <html>
                <head>
                  <meta charset="utf-8">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <title></title>
                  <meta name="description" content="">
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                </head>
                <body>
                  <div style="
                    margin: 0 auto;
                    height: 100vh;
                  ">
                    <div style="
                      border: 2px solid black;
                      padding: 5px;
                    ">
                      <div style="
                      border: 1px solid black;
                      padding: 28px;
                    ">
                            <div style="
                              font-family: Didot, Cambria, Georgia, Times, ‘Times New Roman’, serif;
                              font-weight: 200;
                              font-size: 20px;
                              padding: 16px 8px;
                              "
                              >
                            <h1 style="
                              font-size: 32px;
                              margin-bottom: 30px;
                            ">Hej!</h1>
                            <h2 style="
                              font-size: 20px;
                              font-weight: 600;
                            ">Härmed bekräftas att
                            Du har anmält att Du:</h2>
                            <div style="
                              margin-bottom: 10px;
                            ">

                            <ul style="
                              margin-top: 10px;
                              list-style-type: square;
                              list-style-position: inside;
                            ">
                                <li style="
                                  font-size: 15px;
                                ">${
                                  guest.attending27 ? `Kommer` : `Inte kommer`
                                } på grillfesten den 27 maj 2022.</li>
                                <li style="
                                  font-size: 15px;
                                ">${
                                  guest.attending28 ? `Kommer` : `Inte kommer`
                                } på vigsel och bröllop den 28 maj 2022.</li>
                            </ul>

                            </div>
                            <div style="
                              margin: 32px auto 6px;
                              font-size: 18px;
                            ">
                            <p>Vi kommer löpande att tillhandahålla mer information om bröllopshelgen på hemsidan.</p>
                          </div>
                            <a target="_blank" href="https://www.annikaadam.se"  style="
                              margin: 0px auto 16px auto;
                              width: 40%;
                              color: #000000;
                              text-decoration: none;
                              background: #ffffff;
                              padding: 10px;
                              border: 2px solid #000000;
                              display: inline-block;
                              transition: all 0.4s ease 0s;
                              text-align: center;
                          ">Gå till hemsidan</a>

                          <p style="
                            margin-top: 20px;
                            font-size: 18px;
                          ">Om Du har några frågor, tveka inte att höra av Dig till denna mail.</p>

                            <p style="
                              font-size: 18px;
                              margin-top: 10px;
                              font-weight: 600,
                            ">Med kärlek,</p>
                            <h2 style="
                              font-size: 20px;
                            ">Annika & Adam</h2>
                          </div>
                      </div>
                      </div>
                  </div>
                </body>
              </html>
        	`

  return template
}

export default transporter
