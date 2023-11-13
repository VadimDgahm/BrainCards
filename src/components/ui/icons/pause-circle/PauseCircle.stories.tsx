import type { Meta, StoryObj } from '@storybook/react'
import { PauseCircle } from '@/components/ui/icons/pause-circle/PauseCircle.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: PauseCircle,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof PauseCircle>

export default meta
type Story = StoryObj<typeof meta>

export const PauseCircle2: Story = {
  args: {
    onClick: () => alert('ку'),
    color: '',
  },
}
