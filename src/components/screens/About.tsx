import { FC } from 'react'

const About: FC = () => (
  <section className="bg-background px-6 py-24 sm:py-32 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
        <h2 className="text-foreground text-5xl font-semibold tracking-tight sm:text-7xl lg:col-span-2 xl:col-auto">
          Your Trusted Gutter Cleaning Company
        </h2>
        <div className="xl:col-end-1 xl:row-start-1">
          <p className="text-foreground mt-8 text-lg font-medium text-pretty sm:text-xl/8">
            Whatever may be your gutter related issues, we will address it
            promptly and effectively.
          </p>
          <p className="text-foreground mt-8 text-lg font-medium text-pretty sm:text-xl/8">
            My Gutter Pro provides the best gutter cleaning service in Maryland
            with insured and efficient gutter cleaners.
          </p>
          <p className="text-foreground mt-8 text-lg font-medium text-pretty sm:text-xl/8">
            By choosing our gutter cleaning business, you choose the convenience
            of never having to be present for the service to be completed. With
            each gutter cleaning service, we send you reminders ahead of the day
            of service as well as pictures of the job when completed.
          </p>
          <p className="text-foreground mt-8 text-lg font-medium text-pretty sm:text-xl/8">
            Plus, we provide upfront pricing, with never any hidden fees.
          </p>
        </div>
        <img
          alt=""
          className="mt-10 aspect-auto w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          src="/gutter-about.jpg"
        />
      </div>
    </div>
  </section>
)

export default About
