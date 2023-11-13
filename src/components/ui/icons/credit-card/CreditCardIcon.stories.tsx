import type { Meta, StoryObj } from '@storybook/react'
import { CreditCardIcon } from '@/components/ui/icons/credit-card/CreditCardIcon.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: CreditCardIcon,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof CreditCardIcon>

export default meta
type Story = StoryObj<typeof meta>

export const CreditCard2: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
