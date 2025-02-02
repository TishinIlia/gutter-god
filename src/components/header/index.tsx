'use client'

import { Button } from '@/components/ui/button'
import { FC } from 'react'

interface HeaderProps {
  seModalOpen: (open: boolean) => void
}

import logoUrl from '@/assets/logo.svg?inline'

const Header: FC<HeaderProps> = ({ seModalOpen }) => {
  return (
    <header className="bg-background">
      <nav
        aria-label="Global nav"
        className="mx-auto flex w-screen items-center justify-between p-4 lg:px-6"
      >
        <div className="flex">
          <img alt="logo" src={logoUrl} className="h-8 w-auto" />
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
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
