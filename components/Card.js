import Image from './Image'
import Link from './Link'
import { TechIcon } from './ReactIcon'
import MD from '@/components/MD'

// Used only in pages/projects.js
const Card = ({ title, description, imgSrc, href, date, techIcons }) => (
  <div className="p-3 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div
      className={`h-full overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 shadow-md dark:border-gray-700 dark:shadow-stone-900`}
    >
      <div className="p-6">
        <h2 className="mb-3 text-base font-bold leading-8 tracking-normal">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
              {date && (
                <span className="float-right text-sm font-normal leading-8 tracking-normal">
                  {date}
                </span>
              )}
            </Link>
          ) : (
            <>
              {title}
              {date && (
                <span className="float-right text-sm font-normal leading-8 tracking-normal">
                  {date}
                </span>
              )}
            </>
          )}
        </h2>
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={306}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          ))}
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
          <MD>{description}</MD>
          {href && (
            <Link
              href={href}
              className="float-right text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Learn more &rarr;
            </Link>
          )}
        </p>
        {techIcons && (
          <div className="mx-0.5 mt-8 mb-2 flex flex-wrap gap-2">
            {/* grid grid-flow-row-dense grid-cols-4 sm:grid-cols-4 lg:grid-cols-6 */}
            {techIcons.map((tech) => (
              <TechIcon key={tech} kind={tech} className="flex-[0_0_65px]" />
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
)

export default Card
