import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild: boolean
}

export function Heading({ size = 'md', children, asChild }: HeadingProps) {
  const ComponentHeading = asChild ? Slot : 'h2'
  return (
    <ComponentHeading
      className={clsx('text-zinc-100 font-sans font-bold', {
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-2xl': size === 'lg',
      })}
    >
      {children}
    </ComponentHeading>
  )
}
