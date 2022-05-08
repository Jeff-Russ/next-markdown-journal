import { useState, useEffect, useRef } from 'react'
import siteMetadata from '@/data/siteMetadata'
import navLinks, { headerNavOrder } from '@/data/navLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import ThemeSwitch from './ThemeSwitch'
// import {useIsScrolling} from '@/hooks/useScrollY'
import useScrollY from '@/hooks/useScrollY'

// Used in components/LayoutWrapper.js
const Navbar = () => {
  /* NAVBAR HIDING ************************************************************
    We don't want to hide the Navbar if:
    1) The page was just loaded (taken care of by useState(true))
    2) The user is scrolling or just has scrolled.
    3) The page is at the top, scrolled up
    4) The mobile user clicked the hamburger button and is currently 
      or just recently viewing the dropdown menu. 

    TODO: we should probably always show Navbar when at bottom of page too!
  */

  const msToHide = 2000 // Tweak the feel: how long Navbar stays visible
  // (The actually time is usually 2x msToHide because it starts at then
  // and takes that long)

  const { isScrolling, scrollPosition } = useScrollY(msToHide) // for 2) and 3)

  // The showMobileDropNav is what is used determine whether or no to show the
  // mobile drop-down nav when button is pushed.
  const [showMobileDropNav, setShowMobileDropNav] = useState(false)

  const onToggleMobileDropNav = () => {
    setShowMobileDropNav((status) => {
      if (status) document.body.style.overflow = 'auto'
      else document.body.style.overflow = 'hidden' // Prevent scrolling
      return !status // Used to toggle the mobile drop-down nav from view.
    })
  }

  const [renderMobileDropNav, setRenderMobileDropNav] = useState(false)
  useEffect(() => {
    let dropNavTimer = null

    if (showMobileDropNav) {
      clearTimeout(dropNavTimer)
      setRenderMobileDropNav(true)
    } else {
      dropNavTimer = setTimeout(() => {
        setRenderMobileDropNav(false)
      }, 300) // THIS MUST MATCH <ms> in duration-<ms> below
    }
    return () => {
      clearTimeout(dropNavTimer) // console.log('\n(clearing timeout)\n')
    }
  }, [showMobileDropNav])

  // state to determing if we show the entire Navbar, which we won't do,
  // after the animiation to hide it is complete.
  const [showNavbar, setShowNavbar] = useState(true)

  useEffect(() => {
    // console.log('\nstate changed at', scrollPosition)
    let scollTimer = null
    if (!showNavbar) {
      // console.log('\ncurrently not showing navbar')
      if (isScrolling || scrollPosition <= 55) {
        clearTimeout(scollTimer)
        setShowNavbar(true)
        // console.log('now showing')
      }
    } else {
      // console.log('\ncurrently showing navbar')
      if (!showMobileDropNav && !isScrolling && scrollPosition > 55) {
        // console.log('scheduled to hide...')
        scollTimer = setTimeout(() => {
          setShowNavbar(false)
        }, msToHide)
      }
    }
    return () => {
      clearTimeout(scollTimer) // console.log('\n(clearing timeout)\n')
    }
  }, [isScrolling, scrollPosition, showMobileDropNav])

  /* Auto marginTop of content after navbar **********************************/
  // Asign margin-top to dummy div after fixed header to the height of the fixed header:
  const ref = useRef(null)
  useEffect(() => {
    let dummyElem = document.querySelector('#site-navbar-dummy-spacer')
    dummyElem.style.marginTop = `${ref.current.clientHeight}px`
  }, [])

  return (
    <>
      <header
        ref={ref}
        id="site-navbar"
        className={`site-navbar fixed top-0 left-1 right-0 z-10
          flex w-screen transform items-center justify-between border-b-2 
          border-gray-300 bg-white opacity-90 dark:border-gray-700 dark:bg-gray-900`}
        // duration-300  ease-in-out ${showNavbar ? 'translate-y-0 ' : '-translate-y-full'}`}
      >
        <div className="py-2 font-display font-light">
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="mr-3 pl-2">
                <Logo />
              </div>
              {typeof siteMetadata.headerTitle === 'string' ? (
                /* <div className="block h-6 text-2xl whitespace-nowrap">{siteMetadata.headerTitle}</div> */
                <div className="hidden h-6 whitespace-nowrap text-2xl sm:block">
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block">
            {headerNavOrder.map((i) => (
              <Link
                key={navLinks[i].title}
                href={navLinks[i].href}
                className="p-0.5 font-medium text-gray-900 dark:text-orange-100 sm:p-2 md:p-3"
              >
                {navLinks[i].title}
              </Link>
            ))}
          </div>
          <div className="mr-0 sm:mr-5">
            <ThemeSwitch />
          </div>
          <div
            className={`mobile-nav sm:hidden ${
              showMobileDropNav && 'bg-gray-200 opacity-95 dark:bg-gray-800'
            }`}
          >
            <button
              type="button"
              className="right-0 ml-1 mr-5 h-10 w-10 rounded py-1 pr-2"
              aria-label="Toggle Menu"
              onClick={onToggleMobileDropNav}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-gray-900 dark:text-orange-100"
              >
                {showMobileDropNav ? (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </button>
            <div
              className={`top-18 fixed right-0 h-auto w-auto transform bg-gray-200 opacity-95 duration-300 
              ease-in-out dark:bg-gray-800 ${
                showMobileDropNav ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <button
                type="button"
                aria-label="toggle modal"
                className="fixed right-0 h-auto w-auto cursor-auto focus:outline-none"
                onClick={onToggleMobileDropNav}
              ></button>
              {renderMobileDropNav && (
                <nav id="mobile-drop-nav" className="grid">
                  {navLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="px-12 py-4 text-2xl font-bold tracking-widest text-gray-900 hover:bg-primary-500 
                      focus:outline-none
                      focus:ring-2 focus:ring-primary-700 focus:ring-offset-2 dark:text-orange-100 dark:ring-offset-black"
                      onClick={onToggleMobileDropNav}
                    >
                      {link.title}
                    </Link>
                  ))}
                </nav>
              )}
            </div>
          </div>
        </div>
      </header>
      <div id="site-navbar-dummy-spacer" className="print-hide m-0 h-0 w-full p-0"></div>
    </>
  )
}

export default Navbar
