'use client'

import * as React from 'react'

import * as TogglePrimitive from '@radix-ui/react-toggle'
import { type VariantProps } from 'class-variance-authority'

import { toggleVariants } from '@/components/ui/toggle/toggleVariants.tsx'
import { cn } from '@/lib/utils'

function Toggle({
  className,
  size,
  variant,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      className={cn(toggleVariants({ className, size, variant }))}
      data-slot="toggle"
      {...props}
    />
  )
}

export { Toggle }
