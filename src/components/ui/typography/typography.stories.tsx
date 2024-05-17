import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'body1',
        'body2',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'link1',
        'link2',
        'overline',
        'subtitle1',
        'subtitle2',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    children: 'Text for Test',
    variant: 'h1',
  },
}

export const H2: Story = {
  args: {
    children: 'Text for Test',
    variant: 'h2',
  },
}

export const H3: Story = {
  args: {
    children: 'Text for Test',
    variant: 'h3',
  },
}

export const H4: Story = {
  args: {
    children: 'Text for Test',
    variant: 'h4',
  },
}

export const Body1: Story = {
  args: {
    children: 'Text for Test',
    variant: 'body1',
  },
}

export const Body2: Story = {
  args: {
    children: 'Text for Test',
    variant: 'body2',
  },
}

export const Subtitle1: Story = {
  args: {
    children: 'Text for Test',
    variant: 'subtitle1',
  },
}

export const Subtitle2: Story = {
  args: {
    children: 'Text for Test',
    variant: 'subtitle2',
  },
}

export const Caption: Story = {
  args: {
    children: 'Text for Test',
    variant: 'caption',
  },
}

export const Overline: Story = {
  args: {
    children: 'Text for Test',
    variant: 'overline',
  },
}

export const Link1: Story = {
  args: {
    children: 'Text for Test',
    variant: 'link1',
  },
}

export const Link2: Story = {
  args: {
    children: 'Text for Test',
    variant: 'link2',
  },
}
