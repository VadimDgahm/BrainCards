import logo from '@/components/ui/header/logo/logo'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    count: 100,
    onChange: (page: number) => console.log(page),
    onPerPageChange: (itemPerPage: number) => console.log(itemPerPage),
    page: 10,
    perPageOptions: [1, 2, 3, 4],
  },
}
