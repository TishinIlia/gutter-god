import { FC } from 'react'

import Logo from '@/components/logo/logo.tsx'

const Footer: FC = () => (
  <footer className="bg-background">
    <div className="mx-auto w-screen p-4 lg:p-6">
      <div className="flex items-center justify-between">
        <div className="flex">
          <a href="/">
            <span className="flex items-center">
              <Logo className="fill-foreground h-8 w-auto" />
              <span className="text-foreground mr-2 ml-1.5 text-sm font-medium uppercase sm:text-base">
                Roseville Gutter
              </span>
            </span>
          </a>
        </div>
      </div>
      <div className="border-foreground mt-2 border-t pt-2 md:flex md:items-center md:justify-between">
        <p className="text-foreground text-sm sm:mt-8 md:order-1 md:mt-0">
          &copy; {new Date().getFullYear()} Roseville Gutter. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
