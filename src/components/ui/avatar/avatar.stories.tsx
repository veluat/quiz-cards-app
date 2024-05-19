import { Avatar } from '@/components/ui/avatar/avatar'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Avatar> = {
  argTypes: {
    userName: String,
  },
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/Avatar',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    userName: 'Jon Krieger',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    userName: 'Jon Krieger',
  },
}

export const DefaultWithImage: Story = {
  args: {
    image: 'https://lastfm.freetls.fastly.net/i/u/avatar170s/1a31ec80fdd1668f41682c4617620d3d',
    userName: 'Jon Krieger',
  },
}

export const LargeWithImage: Story = {
  args: {
    image: 'https://lastfm.freetls.fastly.net/i/u/avatar170s/1a31ec80fdd1668f41682c4617620d3d',
    size: 'large',
    userName: 'John Doe',
  },
}
