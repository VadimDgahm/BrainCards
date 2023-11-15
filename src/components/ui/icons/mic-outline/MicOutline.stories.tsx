import type { Meta, StoryObj } from '@storybook/react'
import { MicOutline } from '@/components/ui/icons/mic-outline/MicOutline.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: MicOutline,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof MicOutline>

export default meta
type Story = StoryObj<typeof meta>

export const Mic1: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
