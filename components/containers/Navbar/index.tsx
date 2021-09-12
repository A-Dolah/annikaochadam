import cn from 'classnames'
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
    <div className={cn(styles.titleDecoContainer, styles.container)}>
      <h1 className={cn(styles.content, styles.contentDefault)}>Adam &hearts; Annika</h1>
      <div className={styles.contentDot} />
      <div className={styles.mainDiamondOuter} />
      <div className={styles.mainDiamondInner} />
      <div className={styles.midDiamondLeft} />
      <div className={styles.midDiamondRight} />
      <div className={styles.smallDiamondLeftTop} />
      <div className={styles.smallDiamondLeftBottom} />
      <div className={styles.smallDiamondRightTop} />
      <div className={styles.smallDiamondRightBottom} />
    </div>
  )
}

export default NavbarRoot
