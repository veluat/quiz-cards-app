import type { Meta, StoryObj } from '@storybook/react'

import { BrowserRouterDecorator } from '@/app/providers'

import { Header } from './'

const meta = {
  component: Header,
  decorators: [BrowserRouterDecorator],
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const AuthorizedUser: Story = {
  args: {
    data: {
      avatar: '',
      email: 'user-email.gmail.com',
      name: 'User name',
    },
    logout: () => {},
  },
}

export const UnauthorizedUser: Story = {
  args: {
    data: null,
    logout: () => {},
  },
}
