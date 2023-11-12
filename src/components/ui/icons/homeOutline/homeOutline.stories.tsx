import type { Meta, StoryObj } from '@storybook/react'

import { HomeOutline } from '@/components/ui/icons/homeOutline/HomeOutline'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
    },
  },
  component: HomeOutline,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof HomeOutline>

export default meta
type Story = StoryObj<typeof meta>

export const HomeOutlinePrimary: Story = {
  args: {
    version: 'dark',
  },
}
