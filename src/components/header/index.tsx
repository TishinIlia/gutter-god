'use client'

import { FC } from 'react'

import { Button } from '@/components/ui/button'

interface HeaderProps {
  seModalOpen: (open: boolean) => void
}

import { PhoneIcon } from 'lucide-react'

import Logo from '@/components/logo/logo.tsx'

const Header: FC<HeaderProps> = ({ seModalOpen }) => {
  return (
    <header className="bg-background">
      <nav
        aria-label="global nav"
        className="mx-auto flex w-screen items-center justify-between p-4 lg:px-6"
      >
        <div className="flex">
          <a href="/">
            <span className="flex items-center">
              <Logo className="fill-foreground h-8 w-auto" />
              <span className="text-foreground ml-1.5 font-medium uppercase">
                Roseville Gutter
              </span>
            </span>
          </a>
        </div>

        <div className="flex">
          <Button className="hidden sm:flex" onClick={() => seModalOpen(true)}>
            Contact Us
          </Button>
          <Button className="flex sm:hidden" size="icon">
            <a href="tel:5551234567">
              <PhoneIcon />
            </a>
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Header
