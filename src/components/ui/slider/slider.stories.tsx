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
  render: x => {
    const [values, setValues] = useState([0, 10])

    return (
      <>
        <Slider cb={numbers => setValues(numbers)} max={10} values={values} />
      </>
    )
  },
}
