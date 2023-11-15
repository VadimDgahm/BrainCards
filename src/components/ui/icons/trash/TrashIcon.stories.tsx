import type { Meta, StoryObj } from '@storybook/react'
import { TrashIcon } from '@/components/ui/icons/trash/TrashIcon.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: TrashIcon,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof TrashIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Trash2: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
