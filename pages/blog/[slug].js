import Link from 'next/link'
import matter from 'gray-matter'
import { marked } from 'marked'
import { lsDirFilesWithExt, projPath, trimExtension, readProjFile, mdExt, fileExists } from '../../lib'

export default function postPage(
  { frontmatter: { title, date, cover_image }, slug, content, }) {
  return (
    <>
      <Link href='/'>
        <a className='btn btn-back'>Go Back</a>
      </Link>
      <div className='card card-page'>
        <h1 className='post-title'>{title}</h1>
        <div className='post-date'>Posted on {date}</div>
        <img src={cover_image} alt='' />
        <div className='post-body'>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </div>
    </>
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
  console.log("here")

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