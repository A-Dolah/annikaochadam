import cn from 'classnames'
import { Turn as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { useUI } from '@hooks/UIContext'
import useWindowSize from '@hooks/useWindowSize'

import styles from './navbar.module.css'

export const NavLinks = () => {
  const { pathname } = useRouter()

  const isActive = (linkPath: string) => pathname === linkPath
  return (
    <>
      <li
        className={cn(styles.listItem, {
          [styles.listItemActive]: isActive(`/`),
        })}
      >
        <Link href="/">
          <a className={styles.listItemLink}>Hem</a>
        </Link>
      </li>
      <li
        className={cn(styles.listItem, {
          [styles.listItemActive]: isActive(`/schema`),
        })}
      >
        <Link href="/schema">
          <a className={styles.listItemLink}>Schema</a>
        </Link>
      </li>
      <li
        className={cn(styles.listItem, {
          [styles.listItemActive]: isActive(`/osa`),
        })}
      >
        <Link href="/osa">
          <a className={styles.listItemLink}>Anmälan</a>
        </Link>
      </li>
      <li
        className={cn(styles.listItem, {
          [styles.listItemActive]: isActive(`/kontakt`),
        })}
      >
        <Link href="/kontakt">
          <a className={styles.listItemLink}>Kontakt</a>
        </Link>
      </li>
      <li
        className={cn(styles.listItem, {
          [styles.listItemActive]: isActive(`/faq`),
        })}
      >
        <Link href="/faq">
          <a className={styles.listItemLink}>FAQ</a>
        </Link>
      </li>
    </>
  )
}

const MobileNav = () => {
  const { toggleSidebar, displaySidebar } = useUI()
  return (
    <>
      <Hamburger toggled={displaySidebar} toggle={toggleSidebar} />
      {!displaySidebar && (
        <h3 className="font-sans text-gray-900 block font-extralight text-l tracking-wide text-center mx-auto font-white">
          Meny
        </h3>
      )}
    </>
  )
}

const DesktopNav = () => (
  <ul className="flex w-full">
    <NavLinks />
  </ul>
)

const NavbarRoot: FC = () => {
  const { displaySidebar } = useUI()
  const { width } = useWindowSize()

  return (
    <>
      {(width as unknown as number) <= 640 ? (
        <nav className={cn(styles.navbar, `h-15 flex items-center justify-center mb-0 mt-2 z-50`)}>
          <div className={displaySidebar ? `fixed top-2 right-2 z-50` : ``}>
            <MobileNav />
          </div>
        </nav>
      ) : (
        <nav className={cn(styles.navbar, `h-15 flex justify-center my-0`)}>
          <DesktopNav />
        </nav>
      )}
    </>
  )
}

export default NavbarRoot
