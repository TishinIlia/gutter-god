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
    <div className="relative isolate flex min-h-[calc(100vh-var(--header-height))] flex-1 flex-col justify-center overflow-hidden py-20">
      <ResponsiveImage
        alt="background image with rain gutter"
        className="absolute inset-0 -z-20 size-full object-cover"
        sources={heroImageSources}
        src={heroVSdPng}
      />
      <div className="bg-background/80 mx-4 max-w-lg rounded-xl px-4 py-5 sm:ml-10 sm:px-6 sm:py-10 md:ml-20 md:w-full">
        <h1 className="text-accent-foreground text-xl font-semibold tracking-tight text-balance sm:text-4xl">
          We help you clean your gutters quickly!
        </h1>
        <p className="text-accent-foreground mt-2 text-xs text-pretty sm:mt-3 sm:text-base">
          At Roseville Gutter, we specialize in fast, reliable, and thorough
          gutter cleaning services.
        </p>
        <div className="mt-3 flex items-center justify-start sm:mt-5">
          <Button onClick={() => seModalOpen(true)}>Contact Us</Button>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
