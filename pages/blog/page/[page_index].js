import fs from 'fs'
import path from 'path'
// import Link from 'next/link'
import matter from 'gray-matter'
import Layout from '../../../components/Layout'
import PostPreview from '../../../components/PostPreview'
import Pagination from '../../../components/Pagination'
import {
  lsDirFilesWithExt,
  projPath,
  trimExtension,
  readProjFile,
  sortByFrontmatterDate,
  mdExt,
} from "../../../lib"
import { POSTS_PER_PAGE } from '../../../config'

export default function BlogPage({ posts, numPages, currentPage }) {
  return (
    <Layout>
      <h1 className='text-5xl border-b-4 p-5 font-bold'>Blog</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {posts.map((post, index) => (
          <PostPreview key={index} post={post} />
        ))}
      </div>
      <Pagination currentPage={currentPage} numPages={numPages} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const filenames = lsDirFilesWithExt(projPath('posts'), mdExt)
  const numPages = Math.ceil(filenames.length / POSTS_PER_PAGE)
  let paths = []

  for (let i = 1; i <= numPages; i++) {
    paths.push({ params: { page_index: i.toString() } })
  }

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // Get files from the posts dir:
  const filenames = lsDirFilesWithExt(projPath('posts'), mdExt)
  
  // Get slug and frontmatter from posts
  const posts = filenames.map((filename) => {
    
    // Get frontmatter
    const { data: frontmatter } = matter(readProjFile('posts', filename))

    return { slug: trimExtension(filename), frontmatter }
  })

  const page = parseInt((params && params.page_index) || 1)
  const numPages = Math.ceil(filenames.length / POSTS_PER_PAGE)
  const pageIndex = page - 1
  const orderedPosts = posts
    .sort(sortByFrontmatterDate)
    .slice(pageIndex * POSTS_PER_PAGE, (pageIndex + 1) * POSTS_PER_PAGE)

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
    },
  }
}
