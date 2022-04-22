import Link from '@/components/Link'

// removed element from

export default function TwitterHandle({ twitterUrl, partOfDl }) {
  if (partOfDl) {
    return (
      <>
        <dt className="sr-only">Twitter</dt>
        <dd>
          <Link
            href={twitterUrl}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            {twitterUrl.replace('https://twitter.com/', '@')}
          </Link>
        </dd>
      </>
    )
  }
  return (
    <Link
      href={twitterUrl}
      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {twitterUrl.replace('https://twitter.com/', '@')}
    </Link>
  )
}
