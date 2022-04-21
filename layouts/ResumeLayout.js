import PageTitle from '@/components/PageTitle'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function ResumeLayout({ frontMatter, authorDetails, next, prev, children }) {
  // console.log(frontMatter)
  const { summary, title } = frontMatter

  return (
    <div className="resume-layout">
      <PageSEO title={`Resume`} description={summary} />
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
    </div>
  )
}
