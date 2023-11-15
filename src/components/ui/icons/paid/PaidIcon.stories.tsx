import type { Meta, StoryObj } from '@storybook/react'
import { PaidIcon } from '@/components/ui/icons/paid/PaidIcon.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: PaidIcon,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof PaidIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Paid: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
