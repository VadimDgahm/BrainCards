import type { Meta, StoryObj } from '@storybook/react'
import { ArrowUp } from '@/components/ui/icons/arrowUp/ArrowUp.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: ArrowUp,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof ArrowUp>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpIcon: Story = {
  args: {
    onClick: () => alert('ку'),
    color: '',
  },
}
