import fs from 'fs'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'

const DEFAULT_LAYOUT = 'PostLayout'

export async function getStaticPaths() {
  const posts = getFiles('posts')
  const paths = posts.map((p) => ({
    params: {
      post_slug: formatSlug(p).split('/'),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('posts')
  const postIndex = allPosts.findIndex(
    (post) => formatSlug(post.slug) === params.post_slug.join('/')
  )
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug('posts', params.post_slug.join('/'))
  const authorList = post.frontMatter.authors || [siteMetadata.defaultAuthorSlug]
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author])
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)

  // rss
  if (allPosts.length > 0) {
    const rss = generateRss(allPosts)
    fs.writeFileSync('./public/feed.xml', rss)
  }
  /* When rendering /posts/deriving-ols-estimator (which has LaTeX):

    "Warning: data for page "/posts/[...post_slug]" is 143 kB, this amount of data can reduce performance.
     See more info here: https://nextjs.org/docs/messages/large-page-data"
     
     The main problem is that post.mdxSource is in the 200KB+ for most posts
  */
  return { props: { post, authorDetails, prev, next } }
}

/* Required frontmatter:
  toc?
  Optional frontmatter:
  layout
 */
export default function Blog({ post, authorDetails, prev, next }) {
  const { mdxSource, toc, frontMatter } = post

  return (
    <>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
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
