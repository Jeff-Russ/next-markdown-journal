import Link from '@/components/Link'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Logo from '@/data/logo.svg'
import ThemeSwitch from '@/components/ThemeSwitch.js'
import navLinks, { homeNavOrder } from '@/data/navLinks'
import NewsletterForm from '@/components/NewsletterForm'
import ListLayout from '@/layouts/ListLayout'
import TypingAnimation from '@/components/TypingAnimation'
import ReactIcon from '@/components/ReactIcon'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  // const posts = await getAllFilesFrontMatter('posts')

  // return { props: { posts, noNavbar: true } }

  const allPosts = await getAllFilesFrontMatter('posts')
  const initialDisplayPosts = allPosts.slice(0, MAX_DISPLAY)
  // console.log(initialDisplayPosts.length )
  return { props: { posts: allPosts, initialDisplayPosts, noNavbar: true } }
}

export default function Home({ posts, initialDisplayPosts }) {
  // let prompt = `${siteMetadata.defaultAuthorSlug}:~ <span style='color:#e0420c'>(dev)</span> % `
  let prompt = `${siteMetadata.author
    .split(' ')[0]
    .toLowerCase()}:~ <span style='color:#e0420c'>(dev)</span> % `
  // `${siteMetadata.siteUrl}

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <header className="flex items-center justify-between">
        <div className="m-4">
          <Logo />
        </div>
        {typeof siteMetadata.headerTitle === 'string' ? (
          <h2 className="left-0 mr-auto whitespace-nowrap font-display text-4xl tracking-wide text-gray-900 dark:text-orange-100">
            {siteMetadata.headerTitle}
          </h2>
        ) : (
          siteMetadata.headerTitle
        )}
        <div className="right-0">
          <ThemeSwitch />
        </div>
      </header>
      <div className="grid h-fit min-w-[400px] max-w-[700px] place-items-center rounded-2xl bg-gray-700 pt-6 pb-2 shadow-2xl dark:bg-inherit">
        {/* 'ml-0 sm:ml-2 md:ml-8 '> */}
        <div className="sm:flex">
          <div
            className="ml-0 mt-2 h-60 w-[24rem] overflow-x-scroll rounded-md border-2 
          border-primary-500 bg-gray-800 p-2 font-mono text-xs 
          text-primary-500 sm:ml-3 
          sm:h-72 sm:w-[28rem] sm:text-sm"
          >
            <TypingAnimation
              uniqueID="1"
              loop={true}
              actions={[
                // { action: 'type', content: "npm run start" },
                { action: 'insert', content: prompt },
                { delay: 10, action: 'type', content: 'who', rate: 100 },
                { delay: 300, action: 'type', content: 'am', rate: 200 },
                { delay: 300, action: 'type', content: 'i\n', rate: 200 },
                { delay: 800, action: 'insert', content: `\n ${siteMetadata.whoamiHTML}\n` },
                { action: 'insert', content: `\n${prompt}` },
                { delay: 200, action: 'type', content: 'npm run star', rate: 100 },
                { delay: 600, action: 'delete', rate: 50 },
                {
                  delay: 300,
                  action: 'type',
                  content: `cd proj/nextjs/${siteMetadata.siteUrl.split('.').slice(-2).join('.')}/`,
                  rate: 60,
                },
                { delay: 500, action: 'insert', content: `\n${prompt}` },
                { delay: 200, action: 'type', content: 'git config ', rate: 60 },
                { delay: 200, action: 'type', content: 'remote', rate: 60 },
                { delay: 20, action: 'delete', rate: 50 },
                { delay: 200, action: 'type', content: '--get remote.origin.url\n', rate: 50 },
                {
                  delay: 500,
                  action: 'insert',
                  content: `\n <u><a href="${
                    siteMetadata.siteRepo
                  }">${siteMetadata.siteRepo.replace(/(^\w+:|^)\/\//, '')}</a></u>.git\n\ns`,
                },
                { delay: 10, action: 'insert', content: prompt },
                { delay: 3000, action: 'type', content: 'clear', rate: 200 },
                { delay: 500, action: 'delete', chars: 'all', rate: 0 },
              ]}
            />
          </div>

          <div className="-mx-1 mt-2 ">
            <div className="flex w-[24.4rem] sm:block sm:w-auto">
              {homeNavOrder.map((i) => (
                <div
                  key={navLinks[i].title}
                  className="mx-1 mb-1 w-[4.6rem] rounded-md border-2 border-primary-500 bg-gray-800 py-3 px-1 text-center leading-none text-primary-500 ring-offset-black hover:bg-primary-500 hover:text-white
                              focus:text-green-400 focus:outline-none focus:ring-2 focus:ring-primary-700 
                              focus:ring-offset-2 
                              sm:w-full sm:px-2 
                              sm:text-left sm:font-medium md:ml-3 md:px-4"
                >
                  <Link href={navLinks[i].href}>
                    <p className="material-icons">
                      {/*navLinks[i].materialIcon[0]*/}
                      <ReactIcon kind={navLinks[i].reactIcon[0]} />
                    </p>
                    &nbsp;
                    <p className="sm:inline sm:align-text-top ">{navLinks[i].title}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {siteMetadata.newsletter.provider !== '' && (
          <div className="left-0 mt-3 flex items-center p-0 text-primary-200 sm:left-2 sm:p-4">
            <NewsletterForm alwaysDark={true} />
          </div>
        )}
      </div>

      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        title="Latest Posts"
        smallHeading
      />
      {
        /* true ||  */ posts.length > MAX_DISPLAY /*check disabled with true ( ... ) */ && (
          // <div className="flex justify-end text-base font-bold leading-6">
          <Link
            href="/posts/page/1"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            See All Posts &rarr;
          </Link>
          // </div>
        )
      }
    </>
  )
}
