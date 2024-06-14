import type { Meta, StoryObj } from '@storybook/react'

import { CreateNewPasswordForm } from '@/features'

const meta: Meta<typeof CreateNewPasswordForm> = {
  component: CreateNewPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/Create New Password Form',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
