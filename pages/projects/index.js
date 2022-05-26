import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  // Showcase your projects with a hero image (16 x 9)

  const sections = projectsData[siteMetadata.defaultAuthorSlug].filter(
    (section) => !section.hideAll && section.projects.length !== 0
  )
  sections.forEach((section, index) => {
    sections[index].projects = section.projects.filter((project) => !project.hidden)
  })

  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="">
        <div className="space-y-2 pt-6 pb-1 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-normal text-gray-900 dark:text-orange-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
        </div>
        {sections.map((section) => (
          <div
            key={section.sectionHeading}
            className="divide-gray-200 border-b py-8 dark:divide-gray-700"
          >
            <h2 className="-ml-0.5 pb-4 text-lg font-bold leading-8 tracking-normal">
              {section.sectionHeading}
            </h2>
            <div className="container">
              <div className="-m-4 flex flex-wrap">
                {section.projects.map((entry) => (
                  <Card
                    key={entry.title}
                    imgSrc={entry.imgSrc}
                    title={entry.title}
                    date={entry.date}
                    description={entry.description}
                    techIcons={entry.techIcons}
                    href={entry.href}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
