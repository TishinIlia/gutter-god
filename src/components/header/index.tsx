'use client'

import { Button } from '@/components/ui/button'
import { FC } from 'react'

interface HeaderProps {
  seModalOpen: (open: boolean) => void
}

import Logo from '@/components/logo/logo.tsx'

const Header: FC<HeaderProps> = ({ seModalOpen }) => {
  return (
    <header className="bg-background">
      <nav
        aria-label="Global nav"
        className="mx-auto flex w-screen items-center justify-between p-4 lg:px-6"
      >
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

        <div className="flex">
          <Button onClick={() => seModalOpen(true)}>Get In Touch!</Button>
        </div>
      </nav>
    </header>
  )
}

export default Header
