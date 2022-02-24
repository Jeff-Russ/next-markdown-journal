import fs from 'fs'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'PostLayout'

export async function getStaticPaths() {
  const pages = getFiles('pages')
  return {
    paths: pages.map((p) => ({
      params: {
        page_slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPages = await getAllFilesFrontMatter('pages')
  const page = await getFileBySlug('pages', params.page_slug.join('/'))
  const authorList = page.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author])
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)

  // rss
  if (allPages.length > 0) {
    const rss = generateRss(allPages)
    fs.writeFileSync('./public/feed.xml', rss)
  }
  return { props: { page, authorDetails } }
}

export default function Blog({ page, authorDetails }) {
  const { mdxSource, toc, frontMatter } = page

  return (
    <>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          // prev={prev}
          // next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
