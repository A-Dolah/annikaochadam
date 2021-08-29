import Image from 'next/image'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Annika och Adams bröllopssida</h1>

        <p className={styles.description}>anmäl dig här:</p>

        <div>
          <form>
            <label htmlFor="firstName">
              Förnamn:
              <input type="text" id="firstName" name="Förnamn" />
            </label>

            <label htmlFor="lastName">
              Efternamn:
              <input type="text" id="lastName" name="Efternamn" />
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
