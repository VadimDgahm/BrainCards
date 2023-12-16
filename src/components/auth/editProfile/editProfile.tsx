import { useState } from 'react'

import { ChangeNameForm } from '@/components/auth/editProfile/changeNameForm/changeNameForm'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { EditOutline } from '@/components/ui/icons/edit-outline/EditOutline'
import { LogOut } from '@/components/ui/icons/log-out/LogOut'
import { Typography } from '@/components/ui/typography'

import s from './editProfile.module.scss'

export const EditProfile = () => {
  const [isOpenEditName, setIsOpenEditName] = useState(false)
  const handlerEditName = () => {
    setIsOpenEditName(!isOpenEditName)
  }

  return (
    <Card className={s.windowEdit}>
      <Typography className={s.title} variant={'large'}>
        Personal Information
      </Typography>
      <div className={s.avatarBox}>
        <img
          alt={''}
          className={s.avatar}
          src={'https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png'}
        />
        {!isOpenEditName && (
          <button className={s.editAvatarIcon}>
            <EditOutline height={16} width={16} />
          </button>
        )}
      </div>
      {!isOpenEditName ? (
        <>
          <div className={s.editNameBox}>
            <Typography className={s.name} variant={'h1'}>
              Ivan
            </Typography>
            <button className={s.editNameIcon} onClick={handlerEditName}>
              <EditOutline height={16} width={16} />
            </button>
          </div>
          <a className={s.linkEmail} href={'https//:google.com'}>
            <Typography className={s.textLink} variant={'body2'}>
              j&johnson@gmail.com
            </Typography>
          </a>
          <Button className={s.buttonLogout} variant={'secondary'}>
            <div className={s.iconLogOut}>
              <LogOut height={16} width={16} />
            </div>
            <span>LogOut</span>
          </Button>
        </>
      ) : (
        <ChangeNameForm name={'Ivan'} setEdite={setIsOpenEditName} />
      )}
    </Card>
  )
}
