import { Button } from '@/components/ui/button'
import { FC } from 'react'

const CTA: FC = () => (
  <div className="bg-amber-400  px-6 py-24 sm:py-32  lg:px-8">
    <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:justify-between">
      <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Ready to dive in? <br />
        Start your free trial today.
      </h2>
      <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
        <Button>Get started</Button>
      </div>
    </div>
  </div>
)

export default CTA
