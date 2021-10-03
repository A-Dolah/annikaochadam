import cn from 'classnames'
import { NextPage } from 'next'

import Image from 'next/image'
import Link from 'next/link'

import { useRouter } from 'next/router'

import React, { FC, useEffect } from 'react'

import Footer from '@components/Footer'
import Navbar from '@containers/Navbar'
import Sidebar from '@containers/Sidebar'

import sidebarStyles from '@containers/Sidebar/Sidebar.module.css'
import { useUI } from '@hooks/UIContext'

import dalbyGastisPic from '@public/gastis_sky_view.jpeg'

import styles from './layout.module.css'

interface Props {
  pageProps: {
    pages?: NextPage[]
  }
}

const Layout: FC<Props> = ({ children }) => {
  const { pathname } = useRouter()
  const { displaySidebar, closeSidebar } = useUI()

  const isActive = (linkPath: string) => pathname === linkPath

  useEffect(() => {
    closeSidebar()
  }, [pathname])

  return (
    <>
      <div className={cn(styles.backgroundPattern, `p-2 font-serif font-black tracking-wider`)}>
        <div className={cn(styles.squareDecoContainer, styles.squareDecoContainer)}>
          <div className={`flex flex-col ${styles.squareDecoContent}`}>
            <Navbar />
            <Sidebar open={displaySidebar} onClose={closeSidebar}>
              <ul className="flex-col content-evenly justify-between mx-auto w-60 sm:w-96 font-serif">
                <li
                  className={cn(sidebarStyles.listItem, {
                    [sidebarStyles.listItemActive]: isActive(`/`),
                  })}
                >
                  <Link href="/">
                    <a>Hem</a>
                  </Link>
                </li>
                <li
                  className={cn(sidebarStyles.listItem, {
                    [sidebarStyles.listItemActive]: isActive(`/schema`),
                  })}
                >
                  <Link href="/schema">
                    <a>Schema</a>
                  </Link>
                </li>
                <li
                  className={cn(sidebarStyles.listItem, {
                    [sidebarStyles.listItemActive]: isActive(`/osa`),
                  })}
                >
                  <Link href="/osa">
                    <a>Anmälan</a>
                  </Link>
                </li>
                <li
                  className={cn(sidebarStyles.listItem, {
                    [sidebarStyles.listItemActive]: isActive(`/kontakt`),
                  })}
                >
                  <Link href="/kontakt">
                    <a>Kontakt</a>
                  </Link>
                </li>
              </ul>
            </Sidebar>
            {pathname === `/` && (
              <div
                className={cn(styles.landingImageContainer, `-mx-2 z-0`)}
                style={{ filter: `grayscale(0%)`, overflow: `hidden`, marginBottom: `-4.4rem` }}
              >
                <Image
                  quality={100}
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
