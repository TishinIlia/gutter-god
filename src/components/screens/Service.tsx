import { FC } from 'react'

import {
  DrillIcon,
  DropletIcon,
  LeafIcon,
  ListCheckIcon,
  PaintbrushIcon,
  Trash2Icon,
} from 'lucide-react'

const features = [
  {
    description:
      'Removing leaves, twigs, dirt, and other debris from the gutters and downspouts.',
    icon: LeafIcon,
    name: 'Debris removal',
  },
  {
    description:
      'Checking for clogs in downspouts and clearing them if necessary.',
    icon: PaintbrushIcon,
    name: 'Downspout inspection and cleaning',
  },
  {
    description:
      'Using a hose to flush the gutters and check for proper water flow.',
    icon: DropletIcon,
    name: 'Gutter flushing',
  },
  {
    description:
      'Assessing the condition of the gutters, including seams, brackets, and fascia boards, for signs of wear and tear.',
    icon: ListCheckIcon,
    name: 'Inspection for damage',
  },
  {
    description:
      'Addressing small issues like loose fasteners or minor leaks with sealant.',
    icon: DrillIcon,
    name: 'Minor repairs',
  },
  {
    description: 'Bagging and removing all debris from the property.',
    icon: Trash2Icon,
    name: 'Cleanup',
  },
]

const Service: FC = () => {
  return (
    <section className="mx-auto px-7 py-7 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-accent-foreground text-sm font-bold tracking-tight sm:text-3xl">
          What does a typical gutter cleaning include?
        </h2>
        <p className="text-accent-foreground mt-1 text-xs font-light text-pretty sm:mt-2 sm:text-2xl">
          Key elements of a gutter cleaning:
        </p>
      </div>
      <div className="max-w-2xl py-4 sm:mx-auto sm:py-20">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 md:max-w-none md:grid-cols-2 md:gap-y-16">
          {features.map((feature) => (
            <div className="flex items-start" key={feature.name}>
              <div className="bg-accent row-span-3 flex size-14 items-center justify-center rounded-xl sm:size-24">
                <feature.icon className="text-foreground size-9 sm:size-14" />
              </div>
              <div className="ml-2 flex-1">
                <dt className="text-accent-foreground col-span-2 text-base sm:text-lg">
                  {feature.name}
                </dt>
                <dd className="text-accent-foreground col-span-2 row-span-2 text-xs font-light sm:text-sm">
                  {feature.description}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Service
