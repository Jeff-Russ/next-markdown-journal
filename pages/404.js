import Layout from '@/components/Layout'

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className='flex flex-col items-center mt-20'>
        <h1 className='text-8xl my-5'>404</h1>
        <h2 className='text-6xl my-5'>Whoops!</h2>
        <h3 className='text-4xl text-gray-400 mb-5'>
          This page does not exist
        </h3>
      </div>
    </Layout>
  )
}
