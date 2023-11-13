import type { Meta, StoryObj } from '@storybook/react'
import { BookmarkOutline } from '@/components/ui/icons/bookmark-outline/BookmarkOutline.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: BookmarkOutline,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof BookmarkOutline>

export default meta
type Story = StoryObj<typeof meta>

export const Bookmark1: Story = {
  args: {
    onClick: () => alert('ку'),
    color: '',
  },
}
