import type { Meta, StoryObj } from '@storybook/react'
import { EditOutline } from '@/components/ui/icons/edit-outline/EditOutline.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: EditOutline,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof EditOutline>

export default meta
type Story = StoryObj<typeof meta>

export const Edit1: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
