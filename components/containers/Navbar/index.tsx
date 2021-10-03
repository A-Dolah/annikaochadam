import cn from 'classnames'
import { Cross as Hamburger } from 'hamburger-react'
import { FC } from 'react'

import { useUI } from '@hooks/UIContext'

import styles from './navbar.module.css'

const NavbarRoot: FC = () => {
  const { toggleSidebar, displaySidebar } = useUI()

  return (
    <nav
      className={cn(
        styles.navbar,
        `-mt-2 h-10 flex items-center justify-center sm:justify-end my-0`
      )}
    >
      <Hamburger toggled={displaySidebar} toggle={toggleSidebar} />
    </nav>
  )
}

export default NavbarRoot
