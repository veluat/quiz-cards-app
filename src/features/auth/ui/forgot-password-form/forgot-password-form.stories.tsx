import { MemoryRouter } from 'react-router-dom'

import { ForgotPasswordForm } from '@/features'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ForgotPasswordForm> = {
  component: ForgotPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/ForgotPasswordForm',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [story => <MemoryRouter>{story()}</MemoryRouter>],
}
