import type { Meta, StoryObj } from '@storybook/react'
import { EyeIcon } from '@/components/ui/icons/eye/EyeIcon.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: EyeIcon,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof EyeIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Eye2: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
