import type {Meta, StoryObj} from '@storybook/react'
import {DropDownMenu} from '@/components/ui/dropDownMenu/DropDownMenu';
import {MenuContentWithAvatar} from '@/components/ui/dropDownMenu/menuСontentWithAvatar/MenuContentWichAvatar';
import {MenuContent} from '@/components/ui/dropDownMenu/menuContent/MenuContent';
import {PersonOutline} from '@/components/ui/icons/person-outline/PersonOutline';
import {LogOut} from '@/components/ui/icons/log-out/LogOut';
import {PlayCircleOutline} from '@/components/ui/icons/play-circle-outline/PlayCircleOutline';
import {EditOutline} from '@/components/ui/icons/edit-outline/EditOutline';
import {TrashOutline} from '@/components/ui/icons/trash-outline/TrashOutline';

const meta = {
    argTypes: {

    },
    component: DropDownMenu,
    tags: ['autodocs'],
    title: 'Components/DropDownMenu',
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const DropDownMenu1: Story = {
    args: {
        children:  <>
            <MenuContentWithAvatar name={'Ivan'} url={'j&johnson@gmail.com'}/>
            <MenuContent svgIcon={<PersonOutline/>} title={'My Profile'} onClick={() => alert('my profile')}/>
            <MenuContent isLine={false} svgIcon={<LogOut/>} title={'Sing Out'} onClick={() => alert('Sing Out')}/>
        </>
    },
}
export const DropDownMenu2: Story = {
    args: {
        width: '80px',
        children:  <>
            <MenuContent svgIcon={<PlayCircleOutline/>} title={'Learn'} onClick={() => alert('Learn')}/>
            <MenuContent svgIcon={<EditOutline/>} title={'Edit'} onClick={() => alert('Edit')}/>
            <MenuContent isLine={false} svgIcon={<TrashOutline/>} title={'Delete'} onClick={() => alert('Delete')}/>
        </>
    },
}
