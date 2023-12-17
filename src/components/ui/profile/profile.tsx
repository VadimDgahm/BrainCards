import { ChangeEvent, forwardRef, useState } from 'react'

import defaultAvatar from '@/components/img/avatar.png'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import SvgButton from '@/components/ui/button/svg/SvgButton'
import { Card } from '@/components/ui/card'
import { EditOutline } from '@/components/ui/icons/edit-outline/EditOutline'
import NameEditor, { FormValues } from '@/components/ui/profile/nameEditor/nameEditor'
import { Typography } from '@/components/ui/typography'
import { useGetMeQuery, useLogOutMutation } from '@/src/services/auth/authService'

import s from './profile.module.scss'

export type UpdateDataProfileType =
  | {
      name?: string
    }
  | FormData
type ProfileProps = {
  onSubmit: (data: UpdateDataProfileType) => void
}

export const Profile = forwardRef<HTMLInputElement, ProfileProps>(({ onSubmit }, ref) => {
  const { data } = useGetMeQuery()
  const [logOut] = useLogOutMutation()
  const [modeOn, setModeOn] = useState(false)
  const onSubmitHandler = (data: FormValues) => {
    onSubmit(data)
    setModeOn(false)
  }

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const formData = new FormData()

      formData.append('avatar', event.target.files[0])

      onSubmit(formData)
    }
  }

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Personal Information
      </Typography>
      <AvatarEdit
        avatar={data?.avatar}
        modeOn={modeOn}
        name={data?.name}
        onChange={handleFileInputChange}
      />
      <div className={s.nameGroup}>
        {!modeOn ? (
          <FieldWithName
            email={data?.email}
            logOut={() => logOut()}
            name={data?.name}
            setModeOn={setModeOn}
          />
        ) : (
          <NameEditor name={data?.name} onSubmit={onSubmitHandler} />
        )}
      </div>
    </Card>
  )
})

type FieldWithNameType = {
  email?: string
  logOut: () => void
  name?: string
  setModeOn: (isOn: boolean) => void
}
const FieldWithName = ({ email, logOut, name = 'User', setModeOn }: FieldWithNameType) => {
  return (
    <>
      <div className={s.editName}>
        <Typography variant={'h1'}>{name}</Typography>

        <EditOutline
          className={s.iconName}
          onClick={() => {
            setModeOn(true)
          }}
          width={16}
        />
      </div>

      <Typography className={s.email} variant={'body2'}>
        {email || ''}
      </Typography>
      <div>
        <Button className={s.button} onClick={() => logOut()} variant={'secondary'}>
          {<SvgButton />}Logout
        </Button>
      </div>
    </>
  )
}

type AvatarEditType = {
  avatar?: null | string
  modeOn: boolean
  name?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
const AvatarEdit = ({ avatar, modeOn, name = 'User', onChange }: AvatarEditType) => {
  return (
    <div className={s.avatarGroup}>
      <Avatar className={s.customAvatar} name={name} src={avatar ?? defaultAvatar} />
      {!modeOn && (
        <label htmlFor={'avatarId'}>
          <span className={s.iconImage}>
            <EditOutline width={16} />{' '}
          </span>

          <input className={s.avatarEditor} id={'avatarId'} onChange={onChange} type={'file'} />
        </label>
      )}
    </div>
  )
}
