import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from '@/components/ui/icons/calendar/Calendar.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: Calendar,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Calendar2: Story = {
  args: {
    onClick: () => alert('ку'),
    color: '',
  },
}
