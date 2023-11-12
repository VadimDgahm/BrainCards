import type { Meta, StoryObj } from '@storybook/react'

import { HomeIcon } from '@/components/ui/icons/home/HomeIcon'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
    },
  },
  component: HomeIcon,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof HomeIcon>

export default meta
type Story = StoryObj<typeof meta>

export const HomeIconPrimary: Story = {
  args: {
    version: 'dark',
  },
}
