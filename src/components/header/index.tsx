'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogPortal } from '@/components/ui/dialog.tsx'
import { NAVIGATION } from '@/utils/const.tsx'
import { MenuIcon } from 'lucide-react'
import { FC, useState } from 'react'

interface HeaderProps {
  seModalOpen: (open: boolean) => void
}

const Header: FC<HeaderProps> = ({ seModalOpen }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background">
      <nav
        aria-label="Global nav"
        className="mx-auto flex w-screen items-center justify-between p-4 lg:px-6"
      >
        <div className="flex">
          <img
            alt="logo"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="h-8 w-auto"
          />
          <a href="#d" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
          </a>
        </div>

        <div className="flex lg:hidden">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon aria-hidden="true" />
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {NAVIGATION.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-primary"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Button onClick={() => seModalOpen(true)}>Get In Touch!</Button>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <DialogPortal>
          <DialogContent className="h-screen w-screen max-w-none p-4 sm:rounded-none">
            <div className="w-full flex-col">
              <div className="flex items-center justify-between">
                <a href="#d" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-primary">
                  <div className="space-y-2 py-6">
                    {NAVIGATION.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-primary hover:bg-primary-foreground"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </header>
  )
}

export default Header
