import { PageSEO } from '@/components/SEO'

export default function EmptyLayout({ frontMatter, children }) {
  const { title, summary } = frontMatter

  return (
    <>
      <PageSEO title={title} description={summary} />
      <div>{children}</div>
    </>
  )
}
