import { FC, useState, useEffect } from 'react'

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

  return <div>NavBar</div>
}

export default NavbarRoot
