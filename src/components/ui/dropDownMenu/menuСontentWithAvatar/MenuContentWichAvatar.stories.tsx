import type {Meta, StoryObj} from '@storybook/react'
import {MenuContentWithAvatar} from '@/components/ui/dropDownMenu/menuСontentWithAvatar/MenuContentWichAvatar';

const meta = {
    argTypes: {

    },
    component:  MenuContentWithAvatar,
    tags: ['autodocs'],
    title: 'Components/DropDownMenu',
} satisfies Meta<typeof  MenuContentWithAvatar>

export default meta
type Story = StoryObj<typeof meta>

export const  ContentWithAvatar: Story = {
    args: {
        onClickAvatar: () => alert("ссылка на профил"),
        name: 'Ivan',
        url: 'j&johnson@gmail.com'
    },
}
