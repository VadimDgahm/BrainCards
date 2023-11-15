import type { Meta, StoryObj } from '@storybook/react'
import { ColorPalette } from '@/components/ui/icons/color-palette/ColorPalette.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: ColorPalette,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof ColorPalette>

export default meta
type Story = StoryObj<typeof meta>

export const ColorPaletteIcon: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
