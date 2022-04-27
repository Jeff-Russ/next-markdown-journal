import SectionContainer from './SectionContainer'
import Footer from './Footer'
import Navbar from './Navbar'

// Used only in pages/_app.js
const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <Navbar />
        <main className="mb-auto mt-[65px]">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
