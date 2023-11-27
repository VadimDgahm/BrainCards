import type { Meta, StoryObj } from '@storybook/react'

import { BigRadioGroup } from '@/components/ui/deck-variants/deck-variants'

const meta = {
  component: BigRadioGroup,
  tags: ['autodocs'],
  title: 'Auth/BigRadioGroup',
} satisfies Meta<typeof BigRadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    buttonName: 'Next Question', // Добавляем buttonName
    radioQuantity: 5,
    values: ['Did not know', 'Forgot', 'A lot of though', 'Confused', 'Knew the answer'],
  },
}
