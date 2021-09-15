import cn from 'classnames'
import Link from 'next/link'
import { FC, useState, useEffect } from 'react'

import styles from './navbar.module.css'

const NavbarRoot: FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    //   const handleScroll = throttle(() => {
    //     const offset = 0
    //     const { scrollTop } = document.documentElement
    //     const scrolled = scrollTop > offset
    //     if (hasScrolled !== scrolled) {
    //       setHasScrolled(scrolled)
    //     }
    //   }, 200)
    //   document.addEventListener(`scroll`, handleScroll)
    //   return () => {
    //     document.removeEventListener(`scroll`, handleScroll)
    //   }
  }, [hasScrolled])

  return (
    <nav className={cn(styles.navbar, `-mt-2 h-10 flex items-center my-0 mx-auto`)}>
      <ul className="flex content-evenly justify-between w-96">
        <li>
          <Link href="/">
            <a className="text-serif">Annika Adam</a>
          </Link>
        </li>
        <li>
          <Link href="/schema">
            <a>Schema</a>
          </Link>
        </li>
        <li>
          <Link href="/osa">
            <a>OSA</a>
          </Link>
        </li>
        <li>
          <Link href="/kontakt">
            <a>Kontakt</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavbarRoot
