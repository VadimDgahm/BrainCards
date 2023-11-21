import type { Meta, StoryObj } from '@storybook/react'

import { Selector } from '@/components/ui/selector/Selector'

const meta = {
  argTypes: {},
  component: Selector,
  tags: ['autodocs'],
  title: 'Components/selector',
} satisfies Meta<typeof Selector>

export default meta
type Story = StoryObj<typeof meta>

export const SelectorDefault: Story = {
  args: {
    disabled: true,
    onValueChange: value => alert(value),
    options: [
      { title: 'Select-box1', value: '1' },
      { title: 'Select-box2', value: '2' },
      { title: 'Select-box3', value: '3' },
    ],
    title: 'Select-box',
  },
}
