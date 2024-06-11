import type { Meta, StoryObj } from '@storybook/react'

import { Page } from './page'

const meta = {
  component: Page,
  tags: ['autodocs'],
  title: 'page/Page',
} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
