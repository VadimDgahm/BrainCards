import type { Meta, StoryObj } from '@storybook/react'
import { CreditCardOutline } from '@/components/ui/icons/credit-card-outline/CreditCardOutline.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: CreditCardOutline,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof CreditCardOutline>

export default meta
type Story = StoryObj<typeof meta>

export const CreditCard1: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
