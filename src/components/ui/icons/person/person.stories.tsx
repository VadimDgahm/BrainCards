import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
    },
  },
  component: Icon,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const IconPrimary: Story = {
  args: {
    version: 'dark',
  },
}
