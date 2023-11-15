import type { Meta, StoryObj } from '@storybook/react'
import { LogOut } from '@/components/ui/icons/log-out/LogOut.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: LogOut,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof LogOut>

export default meta
type Story = StoryObj<typeof meta>

export const LogOutIcon: Story = {
  args: {
    onClick: () => alert('ку'),
    color: '',
  },
}
