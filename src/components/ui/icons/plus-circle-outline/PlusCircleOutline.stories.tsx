import type { Meta, StoryObj } from '@storybook/react'
import { PlusCircleOutline } from '@/components/ui/icons/plus-circle-outline/PlusCircleOutline.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: PlusCircleOutline,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof PlusCircleOutline>

export default meta
type Story = StoryObj<typeof meta>

export const PlusCircle1: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
