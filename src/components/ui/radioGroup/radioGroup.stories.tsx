import { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './radioGroup'

const options = ['one', 'two', 'three', 'four']

const meta = {
  argTypes: {
    value: {
      control: { type: 'radio' },
      options: options,
    },
  },
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
  },
}

export const DefaultDisable: Story = {
  args: {
    disabled: true,
  },
}
