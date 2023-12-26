import { ComponentPropsWithoutRef, forwardRef } from 'react'
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

import s from './header.module.scss'

export type HeaderInfoType = {
  avatar?: null | string
  email?: string
  isLoggedIn: boolean
  logout: () => void
  name?: string
} & ComponentPropsWithoutRef<'header'>

export const Header = forwardRef<HTMLHeadElement, HeaderInfoType>(
  ({ avatar, email, isLoggedIn, logout, name }, ref) => {
    const navigate = useNavigate()
    const onSignOutClickHandler = () => {
      logout()
      navigate('/login')
    }
    const onProfileClickHandler = () => {
      navigate('/profile')
    }

    const onLogoClickHandler = () => {
      navigate('/')
    }

    return (
      <div className={s.HeaderRoot}>
        <Logo onClick={onLogoClickHandler} />
        {isLoggedIn ? (
          <div className={s.SignedUser}>
            <span className={s.dropDownGroup}>
              <Typography variant={'subtitle1'}>{name}</Typography>
              <DropDownMenu trigger={<Avatar name={name} src={avatar ?? defaultAvatar} />}>
                <MenuContentWithAvatar avatar={avatar} name={name} url={email} />
                <MenuContent
                  onClick={onProfileClickHandler}
                  svgIcon={<PersonIcon />}
                  title={'MyProfile'}
                />
                <MenuContent
                  isLine={false}
                  onClick={onSignOutClickHandler}
                  svgIcon={<LogOut />}
                  title={'Sign Out'}
                />
              </DropDownMenu>
            </span>
          </div>
        ) : (
          <Button className={s.SignButton} onClick={onSignOutClickHandler} variant={'primary'}>
            Sign in
          </Button>
        )}
      </div>
    )
  }
)
