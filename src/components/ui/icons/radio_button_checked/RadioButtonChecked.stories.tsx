import type { Meta, StoryObj } from '@storybook/react'
import { RadioButtonCheckedIcon } from '@/components/ui/icons/radio_button_checked/RadioButtonCheckedIcon.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: RadioButtonCheckedIcon,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof RadioButtonCheckedIcon>

export default meta
type Story = StoryObj<typeof meta>

export const RadioButtonChecked: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
