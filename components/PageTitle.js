// Used only in layouts/PostLayout.js, layouts/PostSimpleLayout.js, pages/posts/[...slug].js
export default function PageTitle({ children }) {
  return (
    <h1 className="text-3xl font-extrabold leading-9 tracking-normal text-gray-900 dark:text-orange-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {children}
    </h1>
  )
}
