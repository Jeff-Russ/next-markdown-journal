import matter from 'gray-matter'
import Layout from '../components/Layout' 
import Post from '../components/Post'
import { lsDirFilesWithExt, projPath, trimExtension, readProjFile, sortByFrontmatterDate, mdExt } from '../lib'


export default function HomePage({ posts }) {
  return (
    <Layout>
      <title>Dev Blog</title>

      <div className='posts'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
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
    props: { posts: posts.sort(sortByFrontmatterDate) },
  }
}