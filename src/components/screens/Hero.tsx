import { FC } from 'react'

import { Button } from '@/components/ui/button'

import heroImg from '/gutter-hero.jpeg'

interface HeroProps {
  seModalOpen: (open: boolean) => void
}

const Hero: FC<HeroProps> = ({ seModalOpen }) => (
  <section className="flex flex-1 flex-col">
    <div className="relative isolate flex h-full flex-1 flex-col justify-center overflow-hidden py-14">
      <div className="bg-primary-foreground/30 dark:bg-primary-foreground/35 absolute inset-0 -z-10 min-h-full min-w-full"></div>
      <img
        alt=""
        className="absolute inset-0 -z-20 size-full object-cover"
        src={heroImg}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h1 className="text-foreground text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
              We help you clean your gutters quickly!
            </h1>
            <p className="text-foreground mt-8 text-lg font-medium text-pretty sm:text-xl/8">
              Efficient gutter cleaning solutions tor a hassle-free experience.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button onClick={() => seModalOpen(true)}>Get started</Button>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  </section>
)

export default Hero
