import type { Meta, StoryObj } from '@storybook/react'
import { SettingsOutline } from '@/components/ui/icons/settings-outline/SettingsOutline.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: SettingsOutline,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof SettingsOutline>

export default meta
type Story = StoryObj<typeof meta>

export const Settings1: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
