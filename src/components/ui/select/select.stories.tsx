import type { Meta, StoryObj } from '@storybook/react'

<<<<<<<< HEAD:src/components/ui/select/Selector.stories.tsx
import { Selector } from '@/components/ui/select/select'
========
import { Select } from './select'
>>>>>>>> e420a177178a6ab2475df39cae74ee45720990d5:src/components/ui/select/Select.stories.tsx

const meta = {
  argTypes: {},
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Selector',
} satisfies Meta<typeof Select>

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
