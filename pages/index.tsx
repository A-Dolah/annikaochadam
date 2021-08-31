import axios from 'axios'
import Image from 'next/image'

import { useState } from 'react'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [firstName, setFirstName] = useState(``)
  const [lastName, setLastName] = useState(``)
  const [email, setEmail] = useState(``)

  const submitGuest = async () => {
    const response = await axios.post(`/api/guests`, {
      firstName,
      lastName,
      email,
    })
    const { data } = response
    console.log(`RESPONSE:`, data)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await submitGuest()
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Annika och Adams bröllopssida</h1>

        <p className={styles.description}>Anmäl dig här:</p>

        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-1">
            <label htmlFor="firstName">
              Förnamn:
              <input
                type="text"
                id="firstName"
                name="Förnamn"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>

            <label htmlFor="lastName">
              Efternamn:
              <input
                type="text"
                id="lastName"
                name="Efternamn"
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>

            <label htmlFor="email">
              Email:
              <input
                type="text"
                id="email"
                name="E-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <input type="submit" value="Skicka" />
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{` `}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
