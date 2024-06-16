import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon'
import { Uploader } from '@/components/ui/uploader/uploader'
import { Meta, StoryObj } from '@storybook/react'

import s from './uploader.module.scss'

const meta = {
  component: Uploader,
  tags: ['autodocs'],
  title: 'Components/Uploader',
} satisfies Meta<typeof Uploader>

export default meta

type Story = StoryObj<typeof Uploader>

export const DefaultModeButton: Story = {
  args: {
    style: { padding: '0', width: '24px' },
  },
}

export const FullWidthButton: Story = {
  args: {
    as: Button,
    children: 'Choose File',
    style: { width: '100%' },
  },
}

export const ModeDrag: Story = {
  args: {
    children: [
      <span key={'0'}>Upload</span>,
      <Icon className={s.icon} height={16} key={'1'} name={'more'} width={16} />,
    ],
    mode: 'drag',
  },
}
