'use client'

import { FC } from 'react'

import { PhoneIcon } from 'lucide-react'

import Logo from '@/components/logo/logo.tsx'
import { PHONE } from '@/utils/const.tsx'

const Header: FC = () => {
  return (
    <header className="bg-background sticky top-0 z-10 border-b-2">
      <nav
        aria-label="global nav"
        className="mx-auto flex w-screen items-center justify-between p-4 lg:px-6"
      >
        <div className="flex">
          <span className="flex items-center">
            <Logo className="fill-foreground h-8 w-auto" />
            <span className="text-foreground mr-2 ml-1.5 text-sm font-medium uppercase sm:text-base">
              Roseville Gutter
            </span>
          </span>
        </div>

        <div>
          <a
            className="group hover:text-primary flex items-center"
            href={`tel:${PHONE}`}
          >
            <PhoneIcon
              className="group-hover:fill-primary group-focus:fill-primary"
              size={24}
            />
            <span className="ml-2 hidden text-xl sm:block">{PHONE}</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
