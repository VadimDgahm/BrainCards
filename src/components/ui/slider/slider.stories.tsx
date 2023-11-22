import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Slider } from '@/components/ui/slider/slider'

const meta = {
  argTypes: {},
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const SliderView: Story = {
  render: () => {
    const [values, setValues] = useState([0, 10])

    return (
      <>
        <Slider maxValue={10} updateValues={numbers => setValues(numbers)} values={values} />
      </>
    )
  },
}
