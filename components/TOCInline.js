/**
 * @typedef TocHeading
 * @prop {string} value
 * @prop {number} depth
 * @prop {string} url
 */

/**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {{
 *  toc: TocHeading[],
 *  indentDepth?: number,
 *  fromHeading?: number,
 *  toHeading?: number,
 *  asDisclosure?: boolean,
 *  closed? = boolean,
 *  exclude?: string|string[]
 * }} props
 *
 */
// Used only in components/MDXComponents.js and in a
// sample post (new-features-in-vq.mdx)
const TOCInline = ({
  toc,
  indentRem = 1,
  fromHeading = 1,
  toHeading = 6,
  asDisclosure = false,
  closed = false,
  exclude = '',
}) => {
  const re = Array.isArray(exclude)
    ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
    : new RegExp('^(' + exclude + ')$', 'i')

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
  )

  const min_header = Math.min(...toc.map((heading) => heading.depth))

  const tocList = (
    <ul>
      {filteredToc.map((heading) => (
        <li
          key={heading.value}
          style={{ marginLeft: `${(heading.depth - min_header) * indentRem}rem` }}
        >
          <a href={heading.url}>{heading.value}</a>
        </li>
      ))}
    </ul>
  )

  return (
    <>
      {asDisclosure ? (
        <details open={!closed}>
          <summary className="ml-6 pt-2 pb-2 text-xl font-bold">Table of Contents</summary>
          <div className="ml-6">{tocList}</div>
        </details>
      ) : (
        tocList
      )}
    </>
  )
}

export default TOCInline
