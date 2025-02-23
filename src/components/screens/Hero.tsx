import { FC } from 'react'

import ResponsiveImage, {
  ResponsiveImageSource,
} from '@/components/responsiveImage'
import { Button } from '@/components/ui/button'

import hero2kPng from '/hero_2k.png'
import hero2kWebp from '/hero_2k.webp'
import hero4kPng from '/hero_4k.png'
import hero4kWebp from '/hero_4k.webp'
import heroFullPng from '/hero_full.png'
import heroFullWebp from '/hero_full.webp'
import heroHdPng from '/hero_hd.png'
import heroHdWebp from '/hero_hd.webp'
import heroSdPng from '/hero_sd.png'
import heroSdWebp from '/hero_sd.webp'
import heroVFullPng from '/hero_v_full.png'
import heroVFullWebp from '/hero_v_full.webp'
import heroVHdPng from '/hero_v_hd.png'
import heroVHdWebp from '/hero_v_hd.webp'
import heroVSdPng from '/hero_v_sd.png'
import heroVSdWebp from '/hero_v_sd.webp'

interface HeroProps {
  seModalOpen: (open: boolean) => void
}

const heroImageSources: ResponsiveImageSource[] = [
  {
    media: '(min-width: 3480px) and (orientation: landscape)',
    srcSet: hero4kWebp,
    type: 'image/webp',
  },
  {
    media: '(min-width: 3480px) and (orientation: landscape)',
    srcSet: hero4kPng,
    type: 'image/png',
  },
  {
    media: '(min-width: 2560px) and (orientation: landscape)',
    srcSet: hero2kWebp,
    type: 'image/webp',
  },
  {
    media: '(min-width: 2560px) and (orientation: landscape)',
    srcSet: hero2kPng,
    type: 'image/png',
  },
  {
    media: '(min-width: 1980px) and (orientation: landscape)',
    srcSet: heroFullWebp,
    type: 'image/webp',
  },
  {
    media: '(min-width: 1980px) and (orientation: landscape)',
    srcSet: heroFullPng,
    type: 'image/png',
  },
  {
    media: '(min-width: 1280px) and (orientation: landscape)',
    srcSet: heroHdWebp,
    type: 'image/webp',
  },
  {
    media: '(min-width: 1280px) and (orientation: landscape)',
    srcSet: heroHdPng,
    type: 'image/png',
  },
  {
    media: '(min-width: 720px) and (orientation: landscape)',
    srcSet: heroSdWebp,
    type: 'image/webp',
  },
  {
    media: '(min-width: 720px) and (orientation: landscape)',
    srcSet: heroSdPng,
    type: 'image/png',
  },
  {
    media: '(min-width: 1080px) and (orientation: portrait)',
    srcSet: heroVFullWebp,
    type: 'image/webp',
  },
  {
    media: '(min-width: 1080px) and (orientation: portrait)',
    srcSet: heroVFullPng,
    type: 'image/png',
  },
  {
    media: '(min-width: 720px) and (orientation: portrait)',
    srcSet: heroVHdWebp,
    type: 'image/webp',
  },
  {
    media: '(min-width: 720px) and (orientation: portrait)',
    srcSet: heroVHdPng,
    type: 'image/png',
  },
  {
    media: '(min-width: 480px) and (orientation: portrait)',
    srcSet: heroVSdWebp,
    type: 'image/webp',
  },
  {
    media: '(min-width: 480px) and (orientation: portrait)',
    srcSet: heroVSdPng,
    type: 'image/png',
  },
]

const Hero: FC<HeroProps> = ({ seModalOpen }) => (
  <section className="flex flex-1 flex-col">
    <div className="relative isolate flex min-h-[calc(100vh-var(--header-height))] flex-1 flex-col justify-center overflow-hidden py-14">
      <ResponsiveImage
        alt="herroooooo"
        className="absolute inset-0 -z-20 size-full object-cover"
        sources={heroImageSources}
        src={heroVSdPng}
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
