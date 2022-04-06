// Used only in components/LayoutWrapper.js, layouts/PostLayout.js, layouts/PostSimpleLayout.js
import HTMLComment from '@/components/HTMLComment'

export default function SectionContainer({ children }) {
  return (
    <>
      <HTMLComment text={'START SectionContainer'} />
      <div className="mx-auto max-w-max px-2 sm:px-6 xl:max-w-5xl xl:px-0">
        <HTMLComment text={'START SectionContainer.children'} />
        {children}
        <HTMLComment text={'END SectionContainer.children'} />
      </div>
      <HTMLComment text={'END SectionContainer'} />
    </>
  )
}
