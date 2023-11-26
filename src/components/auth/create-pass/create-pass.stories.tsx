import type { Meta, StoryObj } from '@storybook/react'

import { CreatePass } from '@/components/auth/create-pass/create-pass'

const meta = {
  component: CreatePass,
  tags: ['autodocs'],
  title: 'Auth/CreatePass',
} satisfies Meta<typeof CreatePass>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
