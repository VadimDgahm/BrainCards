import type { Meta, StoryObj } from '@storybook/react'
import { PaypalIcon } from '@/components/ui/icons/paypal/PaypalIcon.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: PaypalIcon,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof PaypalIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Paypal: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
