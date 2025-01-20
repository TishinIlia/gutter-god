import { CloudIcon } from 'lucide-react'
import { FC } from 'react'

const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: CloudIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: CloudIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: CloudIcon,
  },
]

const Service: FC = () => (
  <section className="mx-auto bg-amber-400 px-6 py-24 sm:py-32  lg:px-8">
    <div className="mx-auto max-w-2xl lg:text-center">
      <h2 className="text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
        Everything you need to deploy your app
      </h2>
      <p className="mt-6 text-pretty text-lg/8 text-foreground">
        Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
        Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In
        mi viverra elit nunc.
      </p>
    </div>
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        {features.map((feature) => (
          <div key={feature.name} className="relative pl-16">
            <dt className="text-base/7 font-semibold text-foreground">
              <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-amber-700">
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
