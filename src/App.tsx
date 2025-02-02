import ContactModal from '@/components/contactModal'
import Footer from '@/components/footer'
import Header from '@/components/header'
import {
  // About,
  // CTA,
  Hero,
  Service,
  // Testimonials,
  FAQ,
} from '@/components/screens'
import { FC, useState } from 'react'

const App: FC = () => {
  // TODO: Wrap with hook
  const [modalOpen, seModalOpen] = useState<boolean>(false)

  return (
    <>
      <div className="flex flex-col sm:min-h-screen">
        <Header seModalOpen={seModalOpen} />
        <Hero seModalOpen={seModalOpen} />
      </div>
      <Service />
      {/*<About />*/}
      {/*<Testimonials />*/}
      {/*<CTA />*/}
      <FAQ />
      <Footer />
      <ContactModal open={modalOpen} setOpen={seModalOpen} />
    </>
  )
}

export default App
