import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components/ui/typography'

import { Card } from './'

const meta = {
  argTypes: {},
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <Typography variant={'h1'}>Card</Typography>,
  },
}
