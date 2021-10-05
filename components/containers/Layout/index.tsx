import cn from 'classnames'
import { NextPage } from 'next'

import Image from 'next/image'
import Link from 'next/link'

import { useRouter } from 'next/router'

import React, { FC, useEffect } from 'react'

import ArtDecoContainer from '@components/ArtDecoContainer/index'
import Footer from '@components/Footer'
import Navbar from '@containers/Navbar'
import Sidebar from '@containers/Sidebar'

import { useUI } from '@hooks/UIContext'
import annikaAdamPic from '@public/annikaadam.png'

import styles from './layout.module.css'

interface Props {
  pageProps: {
    pages?: NextPage[]
  }
}

const Layout: FC<Props> = ({ children }) => {
  const { pathname } = useRouter()
  const { displaySidebar, closeSidebar } = useUI()

  useEffect(() => {
    closeSidebar()
  }, [pathname])

  return (
    <>
      <div className={cn(styles.backgroundPattern, `p-2 font-sans font-black tracking-wider`)}>
        <ArtDecoContainer>
          <Sidebar open={displaySidebar} onClose={closeSidebar} />
          {pathname === `/` && (
            <div
              className={cn(styles.landingImageContainer, `-mx-2 -mt-2 z-0`)}
              style={{ filter: `grayscale(0%)`, overflow: `hidden` }}
            >
              <Image
                quality={100}
                src={annikaAdamPic}
                alt="Gästis sky view"
                priority
                placeholder="blur"
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
          <Navbar />
          <main className="pt-0 p-2 sm:p-11 sm:pt-0 min-h-screen z-40">{children}</main>
          <Footer />
        </ArtDecoContainer>
      </div>
    </>
  )
}

export default Layout
