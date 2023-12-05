import type { Meta, StoryObj } from '@storybook/react'

import defaultAvatar from '@/components/img/avatar.png'

import { Header } from './header'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const SignInHeader: Story = {
  args: {
    isLoggedIn: false,
  },
}

export const ProfileHeader: Story = {
  args: {
    isLoggedIn: true,
    profileInfo: {
      avatar: defaultAvatar,
      email: 'eee@mail.ru',
      name: 'Ivan',
    },
  },
}
