import type { Meta, StoryObj } from '@storybook/react'

import { PersonIcon } from '@/components/ui/icons/person/PersonIcon.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: PersonIcon,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof PersonIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Person2: Story = {
  args: {
    onClick: () => alert('ку'),
    color: '',
  },
}
