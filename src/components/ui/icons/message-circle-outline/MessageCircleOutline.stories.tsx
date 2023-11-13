import type { Meta, StoryObj } from '@storybook/react'
import { MessageCircleOutline } from '@/components/ui/icons/message-circle-outline/MessageCircleOutline.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: MessageCircleOutline,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof MessageCircleOutline>

export default meta
type Story = StoryObj<typeof meta>

export const MessageCircle1: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
