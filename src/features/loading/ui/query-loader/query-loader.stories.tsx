import { Meta, StoryObj } from '@storybook/react'

import { QueryLoader } from '../.'

const meta = {
  component: QueryLoader,
  title: 'Components/Query Loading',
} satisfies Meta<typeof QueryLoader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
