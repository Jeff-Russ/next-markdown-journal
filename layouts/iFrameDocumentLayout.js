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
  const { title, summary, iframe_src, download_href, download_as, download_label } = frontMatter
  // const ref = useRef();

  return (
    // <div className="flex w-full h-full flex-col overflow-hidden">
    <div className="m-0 h-full overflow-auto border-none p-0">
      <PageSEO title={`Resume`} description={summary} />

      <a
        className="styled-link text-lg font-semibold"
        href={download_href}
        target="_blank"
        download={download_as}
        rel="noreferrer"
      >
        {download_label}
      </a>
      <iframe
        className="block h-[100vh] w-full overflow-x-hidden border-none"
        src={iframe_src}
        title={title}
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        width="100%"
        height="100%"
        scrolling="auto"
      ></iframe>
      {/* <iframe src="/My_Resume_iframe.html" className='grow border-none m-0 p-0' title="Jeff Russ Resume"></iframe> */}
    </div>
  )
}
