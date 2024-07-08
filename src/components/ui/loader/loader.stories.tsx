import { Loader } from '@/components/ui/loader/loader'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Loader,
  title: 'Components/Loader',
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
