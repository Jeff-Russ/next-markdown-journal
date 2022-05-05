import { useRouter } from 'next/router'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import Navbar from './Navbar'

// Used only in pages/_app.js
const LayoutWrapper = (props) => {
  const { children, noNavbar } = props
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        {!noNavbar && <Navbar />}
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
