import type { Meta, StoryObj } from '@storybook/react'
import { MoreHorizontal } from '@/components/ui/icons/more-horizontal/MoreHorizontal.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: MoreHorizontal,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof MoreHorizontal>

export default meta
type Story = StoryObj<typeof meta>

export const MoreHorizontalIcon: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
