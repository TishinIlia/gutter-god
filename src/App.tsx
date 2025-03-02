import { FC, useState } from 'react'

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

import oaksUrl from '/oaks.svg'

const App: FC = () => {
  // TODO: Wrap with hook
  const [modalOpen, seModalOpen] = useState<boolean>(false)
  const imgUrl = new URL(oaksUrl, import.meta.url).href

  return (
    <>
      <Header />
      <div className="flex flex-col sm:min-h-screen">
        <Hero />
      </div>
      <div
        className="bg-auto bg-repeat"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <Service />
        <FAQ />
      </div>
      {/*<About />*/}
      {/*<Testimonials />*/}
      {/*<CTA />*/}
      <Footer />
      <ContactModal open={modalOpen} setOpen={seModalOpen} />
    </>
  )
}

export default App
