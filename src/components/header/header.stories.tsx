import type { Meta, StoryObj } from '@storybook/react'

import { BrowserRouterDecorator } from '@/app/providers'

import { Header } from './index'

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
      avatar: 'https://lastfm.freetls.fastly.net/i/u/avatar170s/1a31ec80fdd1668f41682c4617620d3d',
      email: 'user-email.gmail.com',
      name: 'Jon Krieger',
    },
    logout: () => {},
  },
}

export const UnauthorizedUser: Story = {
  args: {
    data: {
      avatar: null,
      email: '',
      name: '',
    },
    logout: () => {},
  },
}
