import '../styles/globals.css'

import type { AppProps } from 'next/app'

import Head from '@containers/Head'
import Layout from '@containers/Layout'

function MyApp({ Component, pageProps }: AppProps) {
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
