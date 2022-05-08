import Document, { Html, Head, Main, NextScript } from 'next/document'

import { documentOverrides } from '@/data/wrapperOverrides'

class MyDocument extends Document {
  render() {
    // https://stackoverflow.com/questions/62893647/how-to-get-url-params-when-using-custom-document-in-nextjs

    const dir = '/static/favicons'
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
            <link rel="apple-touch-icon" sizes="76x76" href={`${dir}/apple-touch-icon.png`} />
            <link rel="icon" type="image/png" sizes="32x32" href={`${dir}/favicon-32x32.png`} />
            <link rel="icon" type="image/png" sizes="16x16" href={`${dir}/favicon-16x16.png`} />
            <link rel="manifest" href={`${dir}/site.webmanifest`} />
            <link rel="mask-icon" href={`${dir}/safari-pinned-tab.svg" color="#7a8b43`} />
            <meta name="msapplication-TileColor" content="#444422" />
            <meta name="theme-color" content="#bbbbaa"></meta>
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
