import type { Meta, StoryObj } from '@storybook/react'
import { MaximizeOutline } from '@/components/ui/icons/maximize-outline/MaximizeOutline.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: MaximizeOutline,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof MaximizeOutline>

export default meta
type Story = StoryObj<typeof meta>

export const Maximize1: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
