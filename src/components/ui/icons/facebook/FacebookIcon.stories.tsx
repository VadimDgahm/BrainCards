import type { Meta, StoryObj } from '@storybook/react'
import { FacebookIcon } from '@/components/ui/icons/facebook/FacebookIcon.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: FacebookIcon,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof FacebookIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Facebook: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
