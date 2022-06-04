export function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}

// export function replaceAll(str, find, replace) {
//   return str.replace(new RegExp(escapeRegExp(find), 'g'), replace)
// }

export function splitLinesKeepNLs(str) {
  return str.match(/[^\n]+(?:\r?\n|$)/g)
}

export function firstContentIs(str, pattern) {
  if (!Array.isArray(pattern)) {
    return str.trimStart().startsWith(pattern)
  }
  pattern.forEach((pat) => {
    if (str.trimStart().startsWith(pat)) return true
  })
  return false
}

export function newlinesCount(str) {
  return str.split(/\r\n|\r|\n/).length
}

export function indexOfNth(str, subString, nth) {
  const pos = str.split(subString, nth).join(subString).length
  return pos === str.length ? -1 : pos
}

export function splitBeforeIndex(str, index) {
  return [str.slice(0, index), str.slice(index)]
}

export function splitAfterIndex(str, index) {
  return [str.slice(0, index + 1), str.slice(index + 1)]
}

export function splitAtIndex(str, index) {
  return [str.slice(0, index), str.slice(index + 1)]
}

export function splitAfterNth(str, delimiter, nth = 1) {
  const pos = indexOfNth(str, delimiter, nth)
  if (pos === -1) return [str, '']
  return splitAfterIndex(str, pos)
}

export function splitBeforeNth(str, delimiter, nth = 1) {
  const pos = indexOfNth(str, delimiter, nth)
  if (pos === -1) return [str, '']
  return splitBeforeIndex(str, pos)
}

export function splitAtNth(str, delimiter, nth = 1) {
  const pos = indexOfNth(str, delimiter, nth)
  if (pos === -1) return [str, '']
  return splitAtIndex(str, pos)
}
