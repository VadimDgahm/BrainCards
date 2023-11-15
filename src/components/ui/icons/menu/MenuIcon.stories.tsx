import type { Meta, StoryObj } from '@storybook/react'
import { MenuIcon } from '@/components/ui/icons/menu/MenuIcon.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: MenuIcon,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof MenuIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Menu: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
