import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import IconLink from '@/components/IconLink'

// Used only in components/LayoutWrapper.js
export default function Footer() {
  return (
    <footer>
      <div className="site-footer mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <IconLink kind="mail" href={siteMetadata.email} size="6" />
          <IconLink kind="github" href={siteMetadata.github} size="6" />
          <IconLink kind="facebook" href={siteMetadata.facebook} size="6" />
          <IconLink kind="youtube" href={siteMetadata.youtube} size="6" />
          <IconLink kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <IconLink kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/">{`© ${new Date().getFullYear()} ${siteMetadata.author}`}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href={siteMetadata.siteRepo}>Built with Next.js Markdown Journal</Link>
        </div>
      </div>
    </footer>
  )
}
