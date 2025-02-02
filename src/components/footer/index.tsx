import logoUrl from '@/assets/logo.svg?inline'
import { FC } from 'react'

const Footer: FC = () => (
  <footer className="bg-background">
    <div className="mx-auto w-screen p-4 lg:px-6">
      <div className="flex items-center justify-between">
        <div className="flex">
          <a href="#d" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="logo" src={logoUrl} className="h-8 w-auto" />
          </a>
        </div>
      </div>
      <div className="mt-4 border-t border-foreground/10 pt-4 md:flex md:items-center md:justify-between">
        <p className="mt-8 text-sm/6 text-foreground md:order-1 md:mt-0">
          &copy; {new Date().getFullYear()} Your Company, Inc. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
