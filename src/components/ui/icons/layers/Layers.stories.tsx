import type { Meta, StoryObj } from '@storybook/react'
import { Layers } from '@/components/ui/icons/layers/Layers.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: Layers,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof Layers>

export default meta
type Story = StoryObj<typeof meta>

export const Layers2: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
