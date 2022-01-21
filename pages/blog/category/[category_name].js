import fs from 'fs'
import path from 'path'
// import Link from 'next/link'
import matter from 'gray-matter'
import Layout from '@/components/Layout'
import Post from '@/components/PostPreview'
import { sortByDate, mdExt, lsDirFilesWithExt, readProjFile, projPath} from '@/lib'

export default function CategoryBlogPage({ posts, categoryName }) {
  return (
    <Layout>
      <h1 className='text-5xl border-b-4 p-5 font-bold'>
        Posts in {categoryName}
      </h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  // Get files from the posts dir:
  const filenames = lsDirFilesWithExt(projPath('posts'), mdExt)

  // Get categories from frontmatter of posts
  const categories = filenames.map((filename) => {

    // Get frontmatter
    const { data: frontmatter } = matter(readProjFile('posts', filename))
    
    if (!frontmatter.hasOwnProperty('category')) {
      console.log(frontmatter)
    }

    return frontmatter.category//.toLowerCase()
  })

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { category_name } }) {

  // // Get files from the posts dir:
  // const filenames = lsDirFilesWithExt(projPath('posts'), mdExt)
  
  // // Get slug and frontmatter from posts
  // const posts = filenames.map((filename) => {
    
  //   // Get frontmatter
  //   const { data: frontmatter } = matter(readProjFile('posts', filename))

  //   return { slug: trimExtension(filename), frontmatter }
  // })
  
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  // Filter posts by category
  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  )

  return {
    props: {
      posts: categoryPosts.sort(sortByDate),
      categoryName: category_name,
    },
  }
}
