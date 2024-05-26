import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox, CheckboxProps } from './checkbox'

const meta: Meta<typeof Checkbox> = {
  argTypes: {},
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
}

export default meta
type Story = StoryObj<typeof meta>

const CheckboxWithHooks = (args: CheckboxProps) => {
  const [checked, setChecked] = useState(false)
  const onCheckedChange = () => {
    setChecked(!checked)
  }

  return <Checkbox {...args} checked={checked} onChange={onCheckedChange} />
}

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
  },
}

export const DefaultChecked: Story = {
  args: {
    checked: true,
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
}

export const DefaultWithLabel: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'Click here',
  },
}

export const Controlled: Story = {
  args: {
    checked: false,
    disabled: false,
  },
  render: (args: CheckboxProps) => <CheckboxWithHooks {...args} />,
}

export const ControlledWithLabel: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'Click here',
  },
  render: (args: CheckboxProps) => <CheckboxWithHooks {...args} />,
}
