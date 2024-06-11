import { MemoryRouter } from 'react-router-dom'

import { LoginForm } from '@/features'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  tags: ['autodocs'],
  title: 'Auth/LoginForm',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [story => <MemoryRouter>{story()}</MemoryRouter>],
}
