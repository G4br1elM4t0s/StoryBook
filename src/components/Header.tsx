import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface HeaderProps {
  variavel?: 'Light' | 'Dark'
  aschild?:boolean
  campo1?:string
  campo2?:string
  teste: string

}

import theme from './icons/theme.png'
import {Icon} from './icon'

export function Header({ variavel,aschild,teste }: HeaderProps) {
      teste === '1' ? aschild = true : aschild
 
      if (aschild) {
        return(
        <div className={clsx('pb-3 px-3 flex justify-between',{
          'border-b-2 w-[37rem] border-dark-7 ' : variavel === 'Light',
          'border-b-2 w-[37rem] border-dark-4 ' : variavel === 'Dark'
        })}>
          <p className={clsx('text-md font-bold',{
            'text-black ':variavel === 'Light',
            'text-white':variavel === 'Dark'
          })}>Home</p>
          <Icon src={theme}/> 
          </div>
          )
      }else{
        return(
          <h1>no</h1>
        )
       
      }

    
  
}

