import { InitLoader } from '@/features/loading'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: InitLoader,
  title: 'Components/Initialization Loading',
} satisfies Meta<typeof InitLoader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
