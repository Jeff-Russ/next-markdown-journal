import BlogPage, { getStaticProps } from './page/[page_index]'

export { getStaticProps }
export default BlogPage

export function getStaticPaths () {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}