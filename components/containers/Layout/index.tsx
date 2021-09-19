import cn from 'classnames'
import { NextPage } from 'next'

import Image from 'next/image'
import { useRouter } from 'next/router'

import React, { FC } from 'react'

import Footer from '@components/Footer'
import Navbar from '@containers/Navbar'

import dalbyGastisPic from '@public/gastis_sky_view.jpeg'

import styles from './layout.module.css'

interface Props {
  pageProps: {
    pages?: NextPage[]
  }
}

const Layout: FC<Props> = ({ children }) => {
  const { locale = `sv-SE`, pathname } = useRouter()

  return (
    <>
      <div className="p-2 font-serif font-black tracking-wider	">
        <div className={cn(styles.squareDecoContainer, styles.squareDecoContainer)}>
          <div className={`flex flex-col ${styles.squareDecoContent}`}>
            <Navbar />
            {pathname === `/` && (
              <div
                className={cn(styles.landingImageContainer, `-mb-2 -mx-2 z-0`)}
                style={{ filter: `grayscale(0%)`, overflow: `hidden` }}
              >
                <Image
                  src={dalbyGastisPic}
                  alt="Gästis sky view"
                  priority
                  placeholder="blur"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            <main className="pt-0 p-2 sm:p-11 sm:pt-0 min-h-screen z-40">{children}</main>
            <Footer />
          </div>
          <div className={cn(styles.squareDecoInner, `z-10`)} />
          <div className={cn(styles.squareDecoSquareLeftTop, `z-10`)} />
          <div className={cn(styles.squareDecoSquareLeftBottom, `z-10`)} />
          <div className={cn(styles.squareDecoSquareRightTop, `z-10`)} />
          <div className={cn(styles.squareDecoSquareRightBottom, `z-10`)} />
          <div className={cn(styles.squareDecoTall, `z-10`)} />
          <div className={cn(styles.squareDecoWide, `z-10`)} />
        </div>
      </div>
    </>
  )
}

export default Layout
