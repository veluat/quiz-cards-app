import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { CheckEmail } from '@/features'

const meta: Meta<typeof CheckEmail> = {
  component: CheckEmail,
  tags: ['autodocs'],
  title: 'Auth/Check Email',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: 'testEmail@gmail.com',
  },
  decorators: [story => <MemoryRouter>{story()}</MemoryRouter>],
}
