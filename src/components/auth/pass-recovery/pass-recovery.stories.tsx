import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPass } from '@/components/auth/pass-recovery/pass-recovery'

const meta = {
  component: ForgotPass,
  tags: ['autodocs'],
  title: 'Auth/ForgotPass',
} satisfies Meta<typeof ForgotPass>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
