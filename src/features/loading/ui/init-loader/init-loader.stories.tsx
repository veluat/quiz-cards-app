import { Meta, StoryObj } from '@storybook/react'

import { InitLoader } from '../.'

const meta = {
  component: InitLoader,
  title: 'Components/Initialization Loading',
} satisfies Meta<typeof InitLoader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
