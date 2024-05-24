import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Slider } from './slider'

const meta = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
  //argTypes: {},
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

const commonArgs = {
  max: 10,
  min: 0,
  value: [2, 10],
}

export const SliderStory: Story = {
  args: {
    ...commonArgs,
  },
  render: args => {
    const [sliderValue, setSliderValue] = useState<number[]>(commonArgs.value)

    function onChangeSliderValue(value: number[]) {
      setSliderValue(value)
    }

    return <Slider {...args} onChange={onChangeSliderValue} value={sliderValue} />
  },
}
