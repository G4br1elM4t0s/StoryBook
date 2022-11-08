import { Button } from '@skynexui/components'
import { Meta, StoryObj } from '@storybook/react'
import {BigButton, ButtonProps } from './Button'



export default {
  title: 'Components/Button',
  component: BigButton,
  args: {
    children: 'Twettar',
    varient:'Default'
  },
  argTypes: {},
} as Meta<ButtonProps>


export const Default: StoryObj<ButtonProps> = {}

export const Small: StoryObj<ButtonProps> = {
  component: Button,
  args: {
    children: 'Twettar',
    varient:'Small'
  },
}as Meta<ButtonProps>

export const DefaultTransparent: StoryObj<ButtonProps> = {
  component: Button,
  args: {
    children: 'Twettar',
    varient:'DefaultTrasparent'
  },
}as Meta<ButtonProps>

export const SmallTransparent: StoryObj<ButtonProps> = {
  component: Button,
  args: {
    children: 'Twettar',
    varient:'SmallTrasparent'
  },
}as Meta<ButtonProps>