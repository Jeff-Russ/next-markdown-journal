import Link from 'next/link'
import matter from 'gray-matter'
import { marked } from 'marked'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { lsDirFilesWithExt, projPath, trimExtension, readProjFile, mdExt, fileExists } from '@/lib'
import components from '@/components'
import Layout from '@/components/Layout'
import CategoryLabel from '@/components/CategoryLabel'


export default function PostPage({
  frontmatter: { title, category, date, cover_image, author, author_image },
  content,
  slug,
  extension
}) {
  if (extension !== '.mdx') {
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
  else {
    return (<MDXRemote {...content} components={components}/>)
  }
}


export async function getStaticPaths() { 
  const files = lsDirFilesWithExt(projPath('markdown'), mdExt)
  const paths = files.map((filename) => {
    return {
      params: { markdown_dir: 'blog', slug: ""+trimExtension(filename) }
    }
  })
  return { paths, fallback: false }
}


export async function getStaticProps({ params: { slug, markdown_dir } }) {
  // determine extension for slug
  let filename, extension
  const found = mdExt.some(exten => {
    extension = exten
    filename = slug + exten
    return fileExists(projPath('markdown', filename))
  })
  if (!found) {
    console.log(`getStaticProps in pages/blog/[slug].js failed to find an extension for ${slug}`)
    return
  }
  // get frontmatter and contents of post:
  const { data: frontmatter, content } = matter(readProjFile('markdown', filename))
  if (extension !== '.mdx') {
    return {
      props: { frontmatter, slug, extension, content: marked(content) }
    }
  } else {
    const mdxSource = await serialize(content)
    return {
      props: { frontmatter, slug, extension, content: mdxSource }
    }
  }
}