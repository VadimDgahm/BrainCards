import type { Meta, StoryObj } from '@storybook/react'
import { CopyOutline } from '@/components/ui/icons/copy-outline/CopyOutline.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: CopyOutline,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof CopyOutline>

export default meta
type Story = StoryObj<typeof meta>

export const Copy1: Story = {
  args: {
    onClick: () => alert('ку'),
    color: '',
  },
}
