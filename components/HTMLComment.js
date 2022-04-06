export default function HTMLComment({ text }) {
  return <div dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }} />
}
