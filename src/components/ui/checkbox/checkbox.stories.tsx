import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './index'

const meta = {
  argTypes: {},
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    checked: true,
  },
}
export const DefaultWithLabel: Story = {
  args: {
    checked: true,
    label: 'Check-box',
  },
}
export const Active: Story = {
  args: {
    checked: true,
  },
}

export const Hover: Story = {
  args: {
    checked: true,
  },
}
export const Focus: Story = {
  args: {
    checked: true,
  },
}
export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
}
