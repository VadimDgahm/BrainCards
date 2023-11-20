import type { Meta, StoryObj } from '@storybook/react'

import { Selector } from '@/components/ui/Selector/Selector'

const meta = {
  argTypes: {},
  component: Selector,
  tags: ['autodocs'],
  title: 'Components/Selector',
} satisfies Meta<typeof Selector>

export default meta
type Story = StoryObj<typeof meta>

export const SelectorDefault: Story = {
  args: {},
}
