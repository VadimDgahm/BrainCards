import { TabSwitcher } from '@/components/ui/tabSwitcher/tabSwitcher'
import { Meta, StoryObj } from '@storybook/react'

const collection = [
  {
    location: 'left',
    value: 'Switcher',
  },
  {
    location: 'center',
    value: 'Switcher',
  },
  {
    location: 'right',
    value: 'Switcher',
  },
]

const meta = {
  args: {
    valuesCollection: collection,
  },
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSwitcher: Story = {
  args: {
    disable: false,
    value: 'left',
  },
}

export const DisabledSwitcher: Story = {
  args: {
    disable: true,
    value: 'left',
  },
}
