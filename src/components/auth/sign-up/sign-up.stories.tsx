import type { Meta, StoryObj } from '@storybook/react'

import { Route, Routes } from 'react-router-dom'

import { SingUpForm } from '@/components/auth/sign-up/sign-up'

const meta = {
  component: SingUpForm,
  decorators: [story => <Routes>{story()}</Routes>],
  tags: ['autodocs'],
  title: 'Auth/SingUpForm',
} satisfies Meta<typeof SingUpForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
