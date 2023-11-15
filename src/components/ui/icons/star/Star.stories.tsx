import type { Meta, StoryObj } from '@storybook/react'
import { StarIcon } from '@/components/ui/icons/star/StarIcon.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: StarIcon,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof StarIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Star2: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
