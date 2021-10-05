import Portal from '@reach/portal'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { FC, useEffect, useRef } from 'react'

import { NavLinks } from '@containers/Navbar'

import s from './Sidebar.module.css'

interface Props {
  open: boolean
  onClose: () => void
}

const Sidebar: FC<Props> = ({ open = false, onClose }) => {
  const { pathname } = useRouter()

  const ref = useRef() as React.MutableRefObject<HTMLDivElement>

  const isActive = (linkPath: string) => pathname === linkPath

  useEffect(() => {
    if (ref.current) {
      if (open) {
        disableBodyScroll(ref.current)
      } else {
        enableBodyScroll(ref.current)
      }
    }
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [open])

  return (
    <Portal>
      <div
        className={classNames(s.root, {
          [s.closed]: !open,
          [s.open]: open,
        })}
        ref={ref}
      >
        <div className="absolute right-0 inset-0 overflow-hidden sm:overflow-visible">
          <div
            role="button"
            aria-label="Close button"
            className="absolute inset-0 bg-black bg-opacity-50 transition-all"
            onClick={onClose}
            onKeyDown={onClose}
            tabIndex={0}
          />

          <section className="absolute inset-y-0 right-0 px-5 pt-44 sm:pt-16 max-w-full w-screen sm:w-auto flex sm:pl-16 outline-none bg-white">
            <div className="h-full w-full md:w-screen md:max-w-md">
              <div className="h-full w-full flex flex-col text-base w-100 overflow-y-auto">
                <ul className="flex-col content-evenly justify-between mx-auto w-60 sm:w-96 font-sans">
                  <NavLinks />
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Portal>
  )
}

export default Sidebar
