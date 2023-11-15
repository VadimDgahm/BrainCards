import type { Meta, StoryObj } from '@storybook/react'
import { PlusCircle } from '@/components/ui/icons/plus-circle/PlusCircle.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: PlusCircle,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof PlusCircle>

export default meta
type Story = StoryObj<typeof meta>

export const PlusCircle2: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
