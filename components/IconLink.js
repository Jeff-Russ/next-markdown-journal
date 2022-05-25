import Mail from './svg/mail.svg'
import Github from './svg/github.svg'
import Facebook from './svg/facebook.svg'
import Youtube from './svg/youtube.svg'
import Linkedin from './svg/linkedin.svg'
import Twitter from './svg/twitter.svg'
import Phone from './svg/phone.svg'
import CodePen from './svg/codepen.svg'
import Twitch from './svg/twitch.svg'
import Resume from './svg/resume.svg'
import ExternalLink from './svg/externalLink.svg'

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

const IconLink = ({ textOnly, kind, href, size = 8 }) => {
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

export default IconLink
