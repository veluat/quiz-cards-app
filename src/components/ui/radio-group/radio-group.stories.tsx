import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './radio-group'

const meta = {
  argTypes: {},
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { label: 'RadioGroup-1', value: 'radioGroup-1' },
  { label: 'RadioGroup-2', value: 'radioGroup-2' },
  { label: 'RadioGroup-3', value: 'radioGroup-3' },
  { label: 'RadioGroup-4', value: 'radioGroup-4' },
  { label: 'RadioGroup-5', value: 'radioGroup-5' },
]

export const Primary: Story = {
  args: {
    options: options,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    options: options,
  },
}
