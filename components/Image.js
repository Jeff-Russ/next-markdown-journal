import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
// Used in compoents/MDXComponents.js, components/Card.js, layouts/AuthorLayout.js, layouts/PostLayout.js,
// and various sample posts
const Image = ({ ...rest }) => <NextImage {...rest} />

export default Image
