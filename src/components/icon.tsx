import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface IconProps {
  src?:string;
}



export function Icon({src}: IconProps) {
  return (
    <img 
      src={src}
      className='w-7 h-6'
    /> 
  )
}
