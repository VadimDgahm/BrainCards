import type { Meta, StoryObj } from '@storybook/react'

import { PersonOutline } from '@/components/ui/icons/person-outline/PersonOutline'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: PersonOutline,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof PersonOutline>

export default meta
type Story = StoryObj<typeof meta>

export const Person1: Story = {
  args: {
    onClick: () => alert('ку'),
    color: '',
  },
}
