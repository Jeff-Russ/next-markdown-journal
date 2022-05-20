import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'
import Phone from './phone.svg'
import CodePen from './codepen.svg'
import Twitch from './twitch.svg'
import Resume from './resume.svg'
import ExternalLink from './externalLink.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  phone: Phone,
  codepen: CodePen,
  twitch: Twitch,
  resume: Resume,
  externalLink: ExternalLink,
}

const SocialLink = ({ textOnly, kind, href, size = 8 }) => {
  if (!href) return null

  const SocialSvg = components[kind]

  let hrefValue = href
  if (kind == 'mail') hrefValue = `mailto:${href}`
  else if (kind == 'phone') hrefValue = `tel:+1${href}`

  if (textOnly) {
    return (
      <a
        className="text-sm text-primary-500 underline hover:text-primary-600 dark:hover:text-primary-400"
        target="_blank"
        rel="noopener noreferrer"
        href={hrefValue}
      >
        {href}
      </a>
    )
  }
  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={hrefValue}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialLink
