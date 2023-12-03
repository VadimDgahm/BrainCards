import { FC } from 'react'

import defaultAvatar from '@/components/img/avatar.png'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropDownMenu } from '@/components/ui/dropDownMenu/DropDownMenu'
import Logo from '@/components/ui/header/logo/logo'
import { Typography } from '@/components/ui/typography'

import s from './header.module.scss'

type HeaderProps = {
  isLoggedIn: boolean
  profileInfo?: {
    avatar?: string
    email: string
    name: string
  } | null
}

export const Header: FC<HeaderProps> = ({ isLoggedIn = false, profileInfo }) => {
  return (
    <div className={s.HeaderRoot}>
      {/*<Link to={'/'}>*/}
      <Logo />
      {/*</Link>*/}
      {isLoggedIn ? (
        <div className={s.SignedUser}>
          <Typography className={s.UserName} variant={'subtitle1'}>
            {profileInfo?.name}
          </Typography>
          <DropDownMenu
            email={profileInfo?.email ?? 'user@mail.ru'}
            name={profileInfo?.name ?? 'user'}
            trigger={
              <button className={s.dropDownGroup}>
                <Typography variant={'subtitle1'}>{profileInfo?.name ?? 'user'}</Typography>
                <Avatar
                  name={profileInfo?.name ?? 'user'}
                  src={profileInfo?.avatar ?? defaultAvatar}
                />
              </button>
            }
          />
        </div>
      ) : (
        <Button as={'a'} className={s.SignButton} variant={'primary'}>
          Sign in
        </Button>
      )}
    </div>
  )
}
