import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialLink from '@/components/social-links'

// Used only in components/LayoutWrapper.js
export default function Footer() {
  return (
    <footer>
      <div className="site-footer mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialLink kind="mail" href={siteMetadata.email} size="6" />
          <SocialLink kind="github" href={siteMetadata.github} size="6" />
          <SocialLink kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialLink kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialLink kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialLink kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
    </footer>
  )
}
