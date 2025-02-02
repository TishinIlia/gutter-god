import {
  DrillIcon,
  DropletIcon,
  LeafIcon,
  ListCheckIcon,
  PaintbrushIcon,
  Trash2Icon,
} from 'lucide-react'
import { FC } from 'react'

const features = [
  {
    name: 'Debris removal',
    description:
      'Removing leaves, twigs, dirt, and other debris from the gutters and downspouts.',
    icon: LeafIcon,
  },
  {
    name: 'Downspout inspection and cleaning',
    description:
      'Checking for clogs in downspouts and clearing them if necessary.',
    icon: PaintbrushIcon,
  },
  {
    name: 'Gutter flushing',
    description:
      'Using a hose to flush the gutters and check for proper water flow.',
    icon: DropletIcon,
  },
  {
    name: 'Inspection for damage',
    description:
      'Assessing the condition of the gutters, including seams, brackets, and fascia boards, for signs of wear and tear.',
    icon: ListCheckIcon,
  },
  {
    name: 'Minor repairs',
    description:
      'Addressing small issues like loose fasteners or minor leaks with sealant.',
    icon: DrillIcon,
  },
  {
    name: 'Cleanup',
    description: 'Bagging and removing all debris from the property.',
    icon: Trash2Icon,
  },
]

const Service: FC = () => (
  <section className="mx-auto bg-green-200 px-6 py-24 sm:py-32  lg:px-8">
    <div className="mx-auto max-w-3xl lg:text-center">
      <h2 className="text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
        What does a typical gutter cleaning include?
      </h2>
      <p className="mt-6 text-pretty text-lg/8 text-foreground">
        Key elements of a gutter cleaning:
      </p>
    </div>
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        {features.map((feature) => (
          <div key={feature.name} className="relative pl-16">
            <dt className="text-base/7 font-semibold text-foreground">
              <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-green-700">
                <feature.icon
                  aria-hidden="true"
                  className="size-6 text-background"
                />
              </div>
              {feature.name}
            </dt>
            <dd className="mt-2 text-base/7 text-foreground">
              {feature.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
)

export default Service
