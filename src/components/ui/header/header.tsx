import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import defaultAvatar from '@/components/img/avatar.png'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropDownMenu } from '@/components/ui/dropDownMenu/DropDownMenu'
import { MenuContent } from '@/components/ui/dropDownMenu/menuContent/MenuContent'
import { MenuContentWithAvatar } from '@/components/ui/dropDownMenu/menuСontentWithAvatar/MenuContentWichAvatar'
import Logo from '@/components/ui/header/logo/logo'
import { LogOut } from '@/components/ui/icons/log-out/LogOut'
import { PersonIcon } from '@/components/ui/icons/person/PersonIcon'
import { Typography } from '@/components/ui/typography'
import { useLogOutMutation } from '@/src/services/auth/authService'

import s from './header.module.scss'

export type ProfileInfoType = {
  avatar?: null | string
  email: string
  name: string
} | null
type HeaderProps = {
  isLoggedIn: boolean
  profileInfo?: ProfileInfoType
}

export const Header: FC<HeaderProps> = ({ isLoggedIn, profileInfo }) => {
  const navigate = useNavigate()
  const [logout] = useLogOutMutation()
  const onSignOutClickHandler = async () => {
    await logout()
    navigate('/login')
  }
  const onProfileClickHandler = () => {
    navigate('/profile')
  }

  const onLogoClickHandler = () => {
    console.log('to homepage')
    // navigate('/')
  }

  return (
    <div className={s.HeaderRoot}>
      <Logo onClick={onLogoClickHandler} />
      {isLoggedIn ? (
        <div className={s.SignedUser}>
          <DropDownMenu
            trigger={
              <span className={s.dropDownGroup}>
                <Typography variant={'subtitle1'}>{profileInfo?.name ?? 'user'}</Typography>
                <Avatar
                  name={profileInfo?.name ?? 'user'}
                  src={profileInfo?.avatar ?? defaultAvatar}
                />
              </span>
            }
          >
            <MenuContentWithAvatar
              name={profileInfo?.name ?? 'user'}
              url={profileInfo?.email ?? 'user@mail.ru'}
            />
            <MenuContent
              onClick={onProfileClickHandler}
              svgIcon={<PersonIcon />}
              title={'MyProfile'}
            />
            <MenuContent onClick={onSignOutClickHandler} svgIcon={<LogOut />} title={'Sign Out'} />
          </DropDownMenu>
        </div>
      ) : (
        <Button className={s.SignButton} onClick={onSignOutClickHandler} variant={'primary'}>
          Sign in
        </Button>
      )}
    </div>
  )
}
