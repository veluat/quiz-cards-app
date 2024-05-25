import { useState } from 'react'

import { Tabs } from '@/components/ui/tabs/tabs'
import { Meta } from '@storybook/react'

const meta = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta

const tabs = [
  { text: 'My cards', value: 'myCards' },
  { text: 'All cards', value: 'allCards' },
  { text: 'Other', value: 'other' },
  { disabled: true, text: 'Disabled', value: 'disabled' },
]

export const Default = {
  render: () => {
    const [value, setValue] = useState('myCards')

    return (
      <div>
        <Tabs onValueChange={value => setValue(value)} tabs={tabs} value={value} />
        {value}
      </div>
    )
  },
}
