import type { Meta, StoryObj } from '@storybook/react'
import { LayersOutline } from '@/components/ui/icons/layers-outline/LayersOutline.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: LayersOutline,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof LayersOutline>

export default meta
type Story = StoryObj<typeof meta>

export const Layers1: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
