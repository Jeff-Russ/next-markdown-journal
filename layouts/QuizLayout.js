import { PageSEO } from '@/components/SEO'
import SectionContainer from '@/components/SectionContainer'

export default function QuizLayout({ title, description, children }) {
  return (
    <SectionContainer>
      <PageSEO title={title} description={description} />
      <div className="quiz-layout divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
        <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
      </div>
    </SectionContainer>
  )
}
