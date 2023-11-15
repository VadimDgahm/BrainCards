import type { Meta, StoryObj } from '@storybook/react'
import { ArrowDown } from '@/components/ui/icons/arrowDown/ArrowDown.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: ArrowDown,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof ArrowDown>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownIcon: Story = {
  args: {
    onClick: () => alert('ку'),
    color: '',
  },
}
