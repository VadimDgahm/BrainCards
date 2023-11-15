import type { Meta, StoryObj } from '@storybook/react'
import { PlayCircle } from '@/components/ui/icons/play-circle/PlayCircle.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: PlayCircle,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof PlayCircle>

export default meta
type Story = StoryObj<typeof meta>

export const PlayCircle2: Story = {
  args: {
    onClick: () => alert('ку'),
    color: '',
  },
}
