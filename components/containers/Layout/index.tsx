import cn from 'classnames'
import { NextPage } from 'next'

import { useRouter } from 'next/router'

import React, { FC } from 'react'

import Footer from '@components/Footer'
import Navbar from '@containers/Navbar'

import styles from './layout.module.css'

interface Props {
  pageProps: {
    pages?: NextPage[]
  }
}

const Layout: FC<Props> = ({ children }) => {
  const { locale = `sv-SE` } = useRouter()

  return (
    <div className="p-2">
      <div className={cn(styles.squareDecoContainer, styles.squareDecoContainer)}>
        <div className={`flex flex-col ${styles.squareDecoContent}`}>
          <Navbar />
          <main className="p-6 sm:p-11">{children}</main>
          <Footer />
        </div>
        <div className={styles.squareDecoInner} />
        <div className={styles.squareDecoSquareLeftTop} />
        <div className={styles.squareDecoSquareLeftBottom} />
        <div className={styles.squareDecoSquareRightTop} />
        <div className={styles.squareDecoSquareRightBottom} />
        <div className={styles.squareDecoTall} />
        <div className={styles.squareDecoWide} />
      </div>
    </div>
  )
}

export default Layout
