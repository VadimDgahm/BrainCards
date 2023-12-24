import type { Meta, StoryObj } from '@storybook/react'

import { Selector } from '@/components/ui/select/Select'

const meta = {
  argTypes: {},
  component: Selector,
  tags: ['autodocs'],
  title: 'Components/Selector',
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

export const SelectorPagination: Story = {
  args: {
    disabled: false,
    onValueChange: value => alert(value),
    options: [
      { title: '10', value: '1' },
      { title: '20', value: '2' },
      { title: '30', value: '3' },
      { title: '50', value: '4' },
      { title: '100', value: '5' },
    ],
    variant: 'pagination',
  },
}
