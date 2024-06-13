import { MemoryRouter } from 'react-router-dom'

import { RecoverPasswordForm } from '@/features'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof RecoverPasswordForm> = {
  component: RecoverPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/Recover Password Form',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [story => <MemoryRouter>{story()}</MemoryRouter>],
}
