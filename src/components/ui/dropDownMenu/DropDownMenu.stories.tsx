import type { Meta, StoryObj } from '@storybook/react'

import { DropDownMenu } from '@/components/ui/dropDownMenu/DropDownMenu'

const meta = {
  argTypes: {},
  component: DropDownMenu,
  tags: ['autodocs'],
  title: 'Components/DropDownMenu',
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const DropDownMenu1: Story = {
  args: {
    children: <button>click</button>,
  },
}
