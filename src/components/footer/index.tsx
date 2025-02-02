import Logo from '@/components/logo/logo.tsx'
import { FC } from 'react'

const Footer: FC = () => (
  <footer className="bg-background">
    <div className="mx-auto w-screen p-4 lg:px-6">
      <div className="flex items-center justify-between">
        <div className="flex">
          <a href="/">
            <span className="flex items-center">
              <Logo className="h-8 w-auto fill-foreground" />
              <span className="ml-1 text-xl font-medium uppercase text-foreground">
                Roseville Gutter
              </span>
            </span>
          </a>
        </div>
      </div>
      <div className="mt-4 border-t border-foreground/10 pt-4 md:flex md:items-center md:justify-between">
        <p className="mt-8 text-sm/6 text-foreground md:order-1 md:mt-0">
          &copy; {new Date().getFullYear()} Roseville Gutter. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
