import Document, { Html, Head, Main, NextScript } from 'next/document'

import { documentOverrides } from '@/data/wrapperOverrides'

class MyDocument extends Document {
  render() {
    // https://stackoverflow.com/questions/62893647/how-to-get-url-params-when-using-custom-document-in-nextjs

    let bypass = false
    if (
      documentOverrides.pages.includes(this.props.__NEXT_DATA__.page) ||
      documentOverrides.paths.includes(this.props.dangerousAsPath)
    ) {
      // console.log(`Document\n\t'${this.props.__NEXT_DATA__.page}' is this.props.__NEXT_DATA__.page`)
      // console.log(`\t'${this.props.dangerousAsPath}' is this.props.dangerousAsPath`)
      // https://stackoverflow.com/questions/52083848/nextjs-main-and-nextscript
      bypass = true
    }
    return (
      <>
        <Html lang="en" className="scroll-smooth">
          <Head>
            <link
              rel="apple-touch-icon"
              sizes="76x76"
              href="/static/favicons/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/static/favicons/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/static/favicons/favicon-16x16.png"
            />
            <link rel="manifest" href="/static/favicons/site.webmanifest" />
            <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="theme-color" content="#000000" />
            <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          </Head>
          <body
            className={`margin-0 p-x h-full w-full overflow-x-hidden antialiased ${
              bypass ? '' : 'bg-white text-black antialiased dark:bg-gray-900 dark:text-orange-100'
            }  bg-image-light bg-fixed dark:bg-image-dark
            `}
          >
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    )
  }
}
export default MyDocument
