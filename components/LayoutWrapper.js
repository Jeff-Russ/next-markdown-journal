import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
// import { VisibleIfScrolling } from '@/hooks/useIsScrolling'

// Used only in pages/_app.js
const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        {/* <VisibleIfScrolling timeout_ms={4000}> */}
        <header
          className="site-navbar border-grey-200 fixed top-0 left-1 right-0 flex w-screen 
              items-center justify-between border-b-2 bg-white font-display font-light opacity-90 dark:bg-gray-900"
        >
          <div className="py-2">
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl sm:block">{siteMetadata.headerTitle}</div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-0.5 font-medium text-gray-900 dark:text-orange-100 sm:p-2 md:p-3"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        {/* </VisibleIfScrolling> */}
        <main className="mb-auto mt-[65px]">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
