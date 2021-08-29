import cn from 'classnames'

import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { useRouter } from 'next/router'

import React, { FC } from 'react'

import Navbar from '@containers/Navbar'

interface Props {
  pageProps: {
    pages?: NextPage[]
  }
}

const Layout: FC<Props> = ({ children, pageProps: { ...pageProps } }) => {
  // const { displaySidebar, displayModal, closeSidebar, closeModal, modalView } = useUI()
  const { locale = `sv-SE` } = useRouter()

  return (
    // <CommerceProvider locale={locale}>
    <div>
      <Navbar />
      <main className="fit">{children}</main>
      {/* <Footer pages={pageProps.pages} /> */}

      {/*
        <Sidebar open={displaySidebar} onClose={closeSidebar}>
          <CartSidebarView />
        </Sidebar> */}
    </div>
    // </CommerceProvider>
  )
}

export default Layout
