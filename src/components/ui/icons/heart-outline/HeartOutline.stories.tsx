import type { Meta, StoryObj } from '@storybook/react'
import { HeartOutline } from '@/components/ui/icons/heart-outline/HeartOutline.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: HeartOutline,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof HeartOutline>

export default meta
type Story = StoryObj<typeof meta>

export const Heart1: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
