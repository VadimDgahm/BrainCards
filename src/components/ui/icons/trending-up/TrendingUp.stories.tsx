import type { Meta, StoryObj } from '@storybook/react'
import { TrendingUp } from '@/components/ui/icons/trending-up/TrendingUp.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: TrendingUp,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof TrendingUp>

export default meta
type Story = StoryObj<typeof meta>

export const TrendingUpSvg: Story = {
  args: {
    onClick: () => alert('ку'),
    color: '',
  },
}
