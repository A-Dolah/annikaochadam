import { NextPage } from 'next'

import { useRouter } from 'next/router'

import React, { FC } from 'react'

import Footer from '@containers/Footer'
import Navbar from '@containers/Navbar'

interface Props {
  pageProps: {
    pages?: NextPage[]
  }
}

const Layout: FC<Props> = ({ children }) => {
  const { locale = `sv-SE` } = useRouter()

  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
