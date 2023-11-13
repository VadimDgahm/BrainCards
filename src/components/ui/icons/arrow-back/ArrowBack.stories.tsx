import type { Meta, StoryObj } from '@storybook/react'
import { ArrowBack } from '@/components/ui/icons/arrow-back/ArrowBack.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: ArrowBack,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof ArrowBack>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowBackIcon: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
