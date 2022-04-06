/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'

import HTMLComment from '@/components/HTMLComment'

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return (
      <>
        <HTMLComment text={'START MDXComponents (in MDXComponents.js) <Layout {...rest} />'} />
        <Layout {...rest} />
        <HTMLComment text={'END MDXComponents (in MDXComponents.js) <Layout {...rest} />'} />
      </>
    )
  },
}

// Used only in pages/blog/[...slug].js, pages/about.js
export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return (
    <>
      <HTMLComment text={'START MDXLayoutRenderer (in MDXComponents.js)'} />
      <MDXLayout layout={layout} components={MDXComponents} {...rest} />
      <HTMLComment text={'END MDXLayoutRenderer (in MDXComponents.js)'} />
    </>
  )
}
