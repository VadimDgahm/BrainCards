import type { Meta, StoryObj } from '@storybook/react'

import ModalTitle from '@/components/ui/modal/modalTitle/modalTitle'

const meta = {
  component: ModalTitle,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof ModalTitle>

export default meta
type Story = StoryObj<typeof meta>

export const ModalTitleDefault: Story = {
  args: {
    setOpen: () => alert('click'),
    title: 'Modal Title Default',
  },
}
