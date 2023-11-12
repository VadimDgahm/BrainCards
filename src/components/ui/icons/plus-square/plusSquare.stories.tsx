import type { Meta, StoryObj } from '@storybook/react'

import { PlusSquare } from '@/components/ui/icons/plus-square/PlusSquare'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
    },
  },
  component: PlusSquare,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof PlusSquare>

export default meta
type Story = StoryObj<typeof meta>

export const PlusSquarePrimary: Story = {
  args: {
    version: 'dark',
  },
}
