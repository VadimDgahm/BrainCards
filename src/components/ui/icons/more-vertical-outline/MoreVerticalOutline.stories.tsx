import type { Meta, StoryObj } from '@storybook/react'
import { MoreVerticalOutline } from '@/components/ui/icons/more-vertical-outline/MoreVerticalOutline.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: MoreVerticalOutline,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof MoreVerticalOutline>

export default meta
type Story = StoryObj<typeof meta>

export const MoreVertical: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
