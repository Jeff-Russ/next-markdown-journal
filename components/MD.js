import Markdown from 'markdown-to-jsx'

export default function MD({ children, ...rest }) {
  if (children.startsWith('<!--MD')) {
    return <Markdown {...rest}>{children}</Markdown>
  } else return children
}
