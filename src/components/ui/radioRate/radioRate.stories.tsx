import type { Meta, StoryObj } from '@storybook/react'

import { RadioRate } from '@/components/ui/radioRate/radioRate'

const meta = {
  component: RadioRate,
  tags: ['autodocs'],
  title: 'Auth/RadioRate',
} satisfies Meta<typeof RadioRate>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}