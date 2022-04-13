import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

import { appOverrides } from '@/data/wrapperOverrides'
import { useRouter } from 'next/router'

import HTMLComment from '@/components/HTMLComment'

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
        {isDevelopment && <HTMLComment text={'START _app.js (with bypass)'} />}
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
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
        {isDevelopment && <HTMLComment text={'END _app.js (with bypass)'} />}
      </>
    )
  } else {
    return (
      <>
        <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
          {isDevelopment && <HTMLComment text={'START _app.js (without bypass)'} />}
          <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
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
          <LayoutWrapper>
            <Component {...pageProps} />
          </LayoutWrapper>
        </ThemeProvider>
        {isDevelopment && <HTMLComment text={'END _app.js (without bypass)'} />}
      </>
    )
  }
}
