// Used only in components/LayoutWrapper.js, layouts/PostLayout.js, layouts/PostSimpleLayout.js
import HTMLComment from '@/components/HTMLComment'

const isDevelopment = process.env.NODE_ENV === 'development'

export default function SectionContainer({ children }) {
  return (
    <>
      {isDevelopment && <HTMLComment text={'START SectionContainer'} />}
      <div className="mx-auto max-w-max px-2 sm:px-6 xl:max-w-5xl xl:px-0">
        {isDevelopment && <HTMLComment text={'START SectionContainer.children'} />}
        {children}
        {isDevelopment && <HTMLComment text={'END SectionContainer.children'} />}
      </div>
      {isDevelopment && <HTMLComment text={'END SectionContainer'} />}
    </>
  )
}
