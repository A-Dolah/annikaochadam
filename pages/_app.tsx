import '../styles/globals.css'

import axios from 'axios'
import type { AppProps } from 'next/app'

import { useEffect, useState } from 'react'

import Head from '@containers/Head'
import Layout from '@containers/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  const [guest, setGuests] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.post(`/api/guests`)
      const { data } = response
      console.log(`DATA:`, data)
      setGuests(data)
    }

    fetchUsers()
  }, [])
  return (
    <>
      <Head />
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
