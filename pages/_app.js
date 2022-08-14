import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'
import '@fontsource/alice'
import '@fontsource/abril-fatface'
import '@fontsource/source-code-pro/variable.css'
import '@fontsource/source-code-pro/variable-italic.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

import { appOverrides, LayoutWrapperOverrides } from '@/data/wrapperOverrides'
import { useRouter } from 'next/router'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function App(props) {
  const { Component, pageProps } = props
  const router = useRouter()

  if (appOverrides.pages.includes(router.pathname) || appOverrides.paths.includes(router.asPath)) {
    // console.log(
    //   'App:\n\t',
    //   router.pathname,' is useRouter().pathname\n\t',
    //   router.asPath,'is router.asPath'
    // )
    return (
      <>
        <Head>
          {<meta name="viewport" content="width=device-width, initial-scale=0.9" />}
          {/*isDevelopment && (
            <script
              async
              src="scripts/log-undefined-css-classes.js"
              type="text/javascript"
            ></script>
          )*/}
        </Head>
        {isDevelopment && isSocket && <ClientReload />}
        <Analytics />
        <Component {...pageProps} />
      </>
    )
  } else if (
    LayoutWrapperOverrides.pages.includes(router.pathname) ||
    LayoutWrapperOverrides.paths.includes(router.asPath)
  ) {
    // console.log(
    //   'LayoutWrapperOverride in App:\n\t',
    //   router.pathname,' is useRouter().pathname\n\t',
    //   router.asPath,'is router.asPath'
    // )
    return (
      <>
        <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
          <Head>
            {<meta name="viewport" content="width=device-width, initial-scale=0.9" />}
            {/*isDevelopment && (
            <script
              async
              src="scripts/log-undefined-css-classes.js"
              type="text/javascript"
            ></script>
          )*/}
          </Head>
          {isDevelopment && isSocket && <ClientReload />}
          <Analytics />
          <div className="flex h-screen flex-col justify-between">
            {/* {!noNavbar && } */}
            <Navbar />
            <main className="mb-auto">
              <Component {...pageProps} />
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </>
    )
  } else {
    return (
      <>
        <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
          <Head>
            {<meta name="viewport" content="width=device-width, initial-scale=0.9" />}
            {/*isDevelopment && (
            <script
              async
              src="scripts/log-undefined-css-classes.js"
              type="text/javascript"
            ></script>
          )*/}
          </Head>
          {isDevelopment && isSocket && <ClientReload />}
          <Analytics />
          <LayoutWrapper {...pageProps}>
            <Component {...pageProps} />
          </LayoutWrapper>
        </ThemeProvider>
      </>
    )
  }
}
