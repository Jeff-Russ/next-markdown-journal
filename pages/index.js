import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import { lsDirFilesWithExt, projPath, trimExtension, readProjFile, sortByFrontmatterDate, mdExt } from '../lib'


export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>

      <div className='posts'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir:
  const filenames = lsDirFilesWithExt(projPath('posts'), mdExt)
  
  // Get slug and frontmatter from posts
  const posts = filenames.map((filename) => {
    
    // Get frontmatter
    const { data: frontmatter } = matter(readProjFile('posts', filename))

    return { slug: trimExtension(filename), frontmatter }
  })
    
  return {
    props: { posts: posts.sort(sortByFrontmatterDate) },
  }
}