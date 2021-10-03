import '../styles/globals.css'

import type { AppProps } from 'next/app'

import Head from '@containers/Head'
import Layout from '@containers/Layout'
import { ManagedUIContext } from '@hooks/UIContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <ManagedUIContext>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ManagedUIContext>
    </>
  )
}

export default MyApp
