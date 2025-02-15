import Logo from '@/components/logo/logo.tsx'
import { FC } from 'react'

const Footer: FC = () => (
  <footer className="bg-background">
    <div className="mx-auto w-screen p-4 lg:px-6">
      <div className="flex items-center justify-between">
        <div className="flex">
          <a href="/">
            <span className="flex items-center">
              <Logo className="fill-foreground h-8 w-auto" />
              <span className="text-foreground ml-1 text-xl font-medium uppercase">
                Roseville Gutter
              </span>
            </span>
          </a>
        </div>
      </div>
      <div className="border-foreground/10 mt-4 border-t pt-4 md:flex md:items-center md:justify-between">
        <p className="text-foreground mt-8 text-sm/6 md:order-1 md:mt-0">
          &copy; {new Date().getFullYear()} Roseville Gutter. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
