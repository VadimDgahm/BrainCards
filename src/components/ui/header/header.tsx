import { FC } from 'react'

import defaultAvatar from '@/components/img/avatar.png'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import Logo from '@/components/ui/header/logo/logo'
import { Typography } from '@/components/ui/typography'

import s from './header.module.scss'

type HeaderProps = {
  isLoggedIn: boolean
  profileInfo?: {
    avatar?: string
    name: string
  } | null
}

export const Header: FC<HeaderProps> = ({ isLoggedIn = false, profileInfo }) => {
  return (
    <div className={s.HeaderRoot}>
      <Logo />
      {isLoggedIn ? (
        <div className={s.SignedUser}>
          <Typography className={s.UserName} variant={'subtitle1'}>
            Ivan
          </Typography>
          <Avatar name={profileInfo?.name ?? 'user'} src={profileInfo?.avatar ?? defaultAvatar} />
        </div>
      ) : (
        <Button className={s.SignButton} variant={'primary'}>
          Sign in
        </Button>
      )}
    </div>
  )
}
