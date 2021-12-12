import Link from 'next/link'
import matter from 'gray-matter'
import Layout from '../components/Layout' 
import Post from '../components/Post'
import { lsDirFilesWithExt, projPath, trimExtension, readProjFile, sortByFrontmatterDate, mdExt } from '../lib'


export default function HomePage({ posts }) {
  return (
    <Layout>
      <h1 className='text-5xl border-b-4 p-5 font-bold'>Latest Posts</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>

      <Link href='/blog'>
        <a className='block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full'>
          All Posts
        </a>
      </Link>
    </Layout>
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
    props: { posts: posts.sort(sortByFrontmatterDate).slice(0, 6) },
  }
}