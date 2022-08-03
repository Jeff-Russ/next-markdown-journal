// import PageTitle from '@/components/PageTitle'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
// import Script from 'next/script'

// import * as React from "react";
// import Image from "next/image";
// import {  useRef } from 'react'
// import dynamic from "next/dynamic";
// const GeneratePDF = dynamic(()=>import("./../components/GeneratePDF"),{ssr:false});

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/posts/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/posts/${slug}`
  )}`

export default function ResumeLayout({ frontMatter, children }) {
  // console.log(frontMatter)
  const { summary /* , title */ } = frontMatter
  // const ref = useRef();

  return (
    <div className="resume-layout" /* generate-pdf" ref={ref} */>
      <PageSEO title={`Resume`} description={summary} />
      {/* <GeneratePDF html={ref}/> */}
      {/* <h1>Hello PDF</h1> */}

      {/* <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700"> */}
      {/* <header className="pt-6 xl:pb-6">
          <div className="space-y-1">
            <PageTitle>{title}</PageTitle>
          </div>
        </header> */}
      {/* <div
          className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
          style={{ gridTemplateRows: 'auto 1fr' }}
        > */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
        <div className="max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
      </div>
      {/*  </div> */}
      {/* </div> */}
      {/* <Script src="scripts/obfuscations.js"></Script> */}
    </div>
  )
}
