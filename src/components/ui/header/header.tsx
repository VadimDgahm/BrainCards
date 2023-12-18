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
import { useGetMeQuery, useLogOutMutation } from '@/src/services/auth/authService'

import s from './header.module.scss'

export type ProfileInfoType = {
  avatar?: null | string
  email: string
  name: string
} | null

export const Header = () => {
  const { data, error } = useGetMeQuery()

  const navigate = useNavigate()
  const [logout] = useLogOutMutation()
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
      {!error ? (
        <div className={s.SignedUser}>
          <span className={s.dropDownGroup}>
            <Typography variant={'subtitle1'}>{data?.name ?? 'user'}</Typography>
            <DropDownMenu
              trigger={<Avatar name={data?.name ?? 'user'} src={data?.avatar ?? defaultAvatar} />}
            >
              <MenuContentWithAvatar
                avatar={data?.avatar}
                name={data?.name ?? 'user'}
                url={data?.email ?? 'user@mail.ru'}
              />
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
