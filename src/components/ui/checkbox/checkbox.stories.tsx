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

export const CheckDefault: Story = {
  args: {
    checked: true,
  },
}
export const UnCheckDefault: Story = {
  args: {
    checked: false,
  },
}
export const CheckDefaultWithLabel: Story = {
  args: {
    checked: true,
    children: 'Check-box',
  },
}
export const UnCheckDefaultWithLabel: Story = {
  args: {
    checked: false,
    children: 'Check-box',
  },
}
export const CheckActive: Story = {
  args: {
    checked: true,
  },
  parameters: {
    pseudo: { active: true },
  },
}
export const UnCheckActive: Story = {
  args: {
    checked: false,
  },
  parameters: {
    pseudo: { active: true },
  },
}

export const CheckHover: Story = {
  args: {
    checked: true,
  },
  parameters: {
    pseudo: { hover: true },
  },
}
export const UnCheckHover: Story = {
  args: {
    checked: false,
  },
  parameters: {
    pseudo: { hover: true },
  },
}

export const CheckFocus: Story = {
  args: {
    checked: true,
  },
  parameters: {
    pseudo: { focus: true },
  },
}
export const UnChekFocus: Story = {
  args: {
    checked: true,
  },
  parameters: {
    pseudo: { focus: true },
  },
}

export const CheckDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
}

export const UnCheckDisabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
}
