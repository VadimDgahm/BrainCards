import type { Meta, StoryObj } from '@storybook/react'
import { ImageOutline } from '@/components/ui/icons/image-outline/ImageOutline.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: ImageOutline,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof ImageOutline>

export default meta
type Story = StoryObj<typeof meta>

export const Image1: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
