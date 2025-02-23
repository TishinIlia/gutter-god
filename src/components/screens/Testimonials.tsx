import { FC } from 'react'

const Testimonials: FC = () => (
  <section className="bg-background px-6 py-24 sm:py-32 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-foreground text-5xl font-semibold tracking-tight sm:text-7xl">
        Reviews
      </h2>
    </div>
    <div className="mx-auto mt-8 max-w-7xl px-6 lg:mt-16 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="flex flex-col pb-10 sm:pb-16 lg:pr-8 lg:pb-0 xl:pr-20">
          <img
            alt=""
            className="h-12 self-start"
            src="https://tailwindui.com/plus/img/logos/tuple-logo-gray-900.svg"
          />
          <figure className="mt-10 flex flex-auto flex-col justify-between">
            <blockquote className="text-foreground text-lg/8">
              <p>
                “Amet amet eget scelerisque tellus sit neque faucibus non
                eleifend. Integer eu praesent at a. Ornare arcu gravida natoque
                erat et cursus tortor consequat at. Vulputate gravida sociis
                enim nullam ultricies habitant malesuada lorem ac. Tincidunt
                urna dui pellentesque sagittis.”
              </p>
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-x-6">
              <img
                alt=""
                className="size-14 rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <div className="text-base">
                <div className="text-foreground font-semibold">
                  Judith Black
                </div>
                <div className="mt-1 text-gray-500">CEO of Tuple</div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 xl:pl-20">
          <img
            alt=""
            className="h-12 self-start"
            src="https://tailwindui.com/plus/img/logos/reform-logo-gray-900.svg"
          />
          <figure className="mt-10 flex flex-auto flex-col justify-between">
            <blockquote className="text-foreground text-lg/8">
              <p>
                “Excepteur veniam labore ullamco eiusmod. Pariatur consequat
                proident duis dolore nulla veniam reprehenderit nisi officia
                voluptate incididunt exercitation exercitation elit. Nostrud
                veniam sint dolor nisi ullamco.”
              </p>
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-x-6">
              <img
                alt=""
                className="size-14 rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <div className="text-base">
                <div className="text-foreground font-semibold">
                  Joseph Rodriguez
                </div>
                <div className="mt-1 text-gray-500">CEO of Reform</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
)

export default Testimonials
