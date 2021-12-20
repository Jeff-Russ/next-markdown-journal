import Link from 'next/link'
import matter from 'gray-matter'
import { marked } from 'marked'
import { lsDirFilesWithExt, projPath, trimExtension, readProjFile, mdExt, fileExists } from '@/lib'
import Layout from '@/components/Layout'
import CategoryLabel from '@/components/CategoryLabel'

export default function PostPage({
  frontmatter: { title, category, date, cover_image, author, author_image },
  content,
  slug,
}) {
  return (
    <Layout title={title}>
      <Link href='/blog'>Go Back</Link>
      <div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
        <div className='flex justify-between items-center mt-4'>
          <h1 className='text-5xl mb-7'>{title}</h1>
          <CategoryLabel>{category}</CategoryLabel>
        </div>
        <img src={cover_image} alt='' className='w-full rounded' />

        <div className='flex justify-between items-center bg-gray-100 p-2 my-8'>
          <div className='flex items-center'>
            <img
              src={author_image}
              alt=''
              className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block'
            />
            <h4>{author}</h4>
          </div>
          <div className='mr-4'>{date}</div>
        </div>

        <div className='blog-text mt-2'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() { 
  const files = lsDirFilesWithExt(projPath('posts'), mdExt)

  const paths = files.map((filename) => {
    return {
      params: { slug: trimExtension(filename) }
    }
  })
  return { paths, fallback: false }
}

export async function getStaticProps({ params: { slug } }) {

  // determine extension for slug
  let filename
  const found = mdExt.some(extension => {
    filename = slug + extension
    return fileExists(projPath('posts', filename))
  })
  if (!found) {
    console.log(`getStaticProps in pages/blog/[slug].js failed to find an extension for ${slug}`)
    return
  }

  // get frontmatter and contents of post:
  const { data: frontmatter, content } = matter(readProjFile('posts', filename))

  return {
    props: { frontmatter, slug, content: marked(content) }
  }
}