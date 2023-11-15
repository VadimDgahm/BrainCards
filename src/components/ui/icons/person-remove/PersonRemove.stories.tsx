import type { Meta, StoryObj } from '@storybook/react'
import { PersonRemove } from '@/components/ui/icons/person-remove/PersonRemove.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: PersonRemove,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof PersonRemove>

export default meta
type Story = StoryObj<typeof meta>

export const PersonRemove2: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
