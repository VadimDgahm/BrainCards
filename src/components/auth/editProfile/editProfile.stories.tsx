import type { Meta, StoryObj } from '@storybook/react'

import { EditProfile } from '@/components/auth/editProfile/editProfile'

const meta = {
  component: EditProfile,
  tags: ['autodocs'],
  title: 'Auth/EditProfile',
} satisfies Meta<typeof EditProfile>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}