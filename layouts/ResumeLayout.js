// import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

export default function ResumeLayout({ children, frontMatter, authorDetails }) {
  const {
    name,
    summary,
    title,
    avatar,
    occupation,
    company,
    email,
    twitter,
    facebook,
    linkedin,
    github,
  } = frontMatter
  return (
    <>
      <PageSEO title={`Resume`} description={summary} />
      <ScrollTopAndComment />
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Resume
          </h1>
        </div>
        <div className="items-start space-y-2 xl:space-y-0">
          {/* <div className="flex flex-col items-center pt-8 space-x-2">
            <Image
              src={avatar}
              alt="avatar"
              shouldOpenLightbox={false}
              width="192px"
              height="192px"
              className="w-48 h-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="github" href={github} size={7} />
              <SocialIcon kind="twitter" href={twitter} size={7} />
              <SocialIcon kind="facebook" href={facebook} size={7} />
              <SocialIcon kind="linkedin" href={linkedin} size={7} />
              <SocialIcon kind="mail" href={`mailto:${email}`} size={7} />
            </div>
          </div> */}
          <div className="prose prose-lg max-w-none pt-8 pb-8 dark:prose-dark">{children}</div>
        </div>
      </div>
    </>
  )
}
