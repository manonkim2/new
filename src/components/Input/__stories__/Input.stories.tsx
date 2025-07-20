import React from 'react'
import { Input } from '../index'
import { Meta, StoryFn } from '@storybook/nextjs-vite'

export default {
  title: 'components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export const Default: StoryFn = () => {
  return <Input placeholder="Default input" />
}

export const Error: StoryFn = () => {
  return <Input errors={['Something went wrong']} value="Error value" />
}

export const Disabled: StoryFn = () => {
  return <Input disabled value="Disabled value" />
}

export const Placeholder: StoryFn = () => {
  return <Input placeholder="Enter something..." />
}
