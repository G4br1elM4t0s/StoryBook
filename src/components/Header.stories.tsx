
import { Meta, StoryObj } from '@storybook/react'
import {HeaderProps,Header } from './Header';



export default {
  title: 'Components/Header',
  component: Header,
  args: {
  },
  argTypes: {},
} as Meta<HeaderProps>

export const Light: StoryObj<HeaderProps> = {
  args:{
    variavel:'Light',
    teste:'1'
  }
}


export const Dark: StoryObj<HeaderProps> = {
  args:{
    variavel:'Dark'
  }
}



