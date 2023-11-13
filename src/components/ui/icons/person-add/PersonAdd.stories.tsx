import type { Meta, StoryObj } from '@storybook/react'
import { PersonAdd } from '@/components/ui/icons/person-add/PersonAdd.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: PersonAdd,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof PersonAdd>

export default meta
type Story = StoryObj<typeof meta>

export const PersonAdd2: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
