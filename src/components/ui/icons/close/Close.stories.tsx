import type { Meta, StoryObj } from '@storybook/react'
import { Close } from '@/components/ui/icons/close/Close.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: Close,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof Close>

export default meta
type Story = StoryObj<typeof meta>

export const CloseIcon: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
