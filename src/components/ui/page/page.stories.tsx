import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { LoginForm } from '@/features'
import { action } from '@storybook/addon-actions'

import { Page } from './page'

const meta = {
  component: Page,
  tags: ['autodocs'],
  title: 'Components/Page',
} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <LoginForm onSubmit={data => action('SignIn data')(data)} />,
  },
  decorators: [story => <MemoryRouter>{story()}</MemoryRouter>],
}
