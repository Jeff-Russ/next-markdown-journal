const isDevelopment = process.env.NODE_ENV === 'development'

export default function HTMLComment({ text }) {
  if (isDevelopment) return <div dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }} />
  else return null
}
