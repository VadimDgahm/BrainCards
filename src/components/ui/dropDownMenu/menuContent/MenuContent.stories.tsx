import type { Meta, StoryObj } from '@storybook/react'
import {MenuContent} from '@/components/ui/dropDownMenu/menuContent/MenuContent';
import {PersonOutline} from '@/components/ui/icons/person-outline/PersonOutline';

const meta = {
    argTypes: {

    },
    component: MenuContent,
    tags: ['autodocs'],
    title: 'Components/DropDownMenu',
} satisfies Meta<typeof MenuContent>

export default meta
type Story = StoryObj<typeof meta>

export const ContentMenu: Story = {
    args: {
        onClick: () => alert('ку'),
        title: 'Profile',
        svgIcon: <PersonOutline/>
    },
}
