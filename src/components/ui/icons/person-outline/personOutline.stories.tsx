import type { Meta, StoryObj } from '@storybook/react'

import { PersonIcon } from '@/components/ui/icons/person/PersonIcon'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
    },
  },
  component: PersonIcon,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof PersonIcon>

export default meta
type Story = StoryObj<typeof meta>

export const PersonPrimary: Story = {
  args: {
    version: 'dark',
  },
}
