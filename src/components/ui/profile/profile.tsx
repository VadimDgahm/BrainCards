import { ChangeEvent, forwardRef, useRef, useState } from 'react'

import defaultAvatar from '@/components/img/avatar.png'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import SvgButton from '@/components/ui/button/svg/SvgButton'
import { Card } from '@/components/ui/card'
import { EditOutline } from '@/components/ui/icons/edit-outline/EditOutline'
import NameEditor, { FormValues } from '@/components/ui/profile/nameEditor/nameEditor'
import { Typography } from '@/components/ui/typography'

import s from './profile.module.scss'

type ProfileProps = {
  avatar?: string
  email: string
  name: string
  onSubmit: (data: FormValues) => void
}

export const Profile = forwardRef<HTMLInputElement, ProfileProps>(
  ({ avatar, email, name, onSubmit }, ref) => {
    const [modeOn, setModeOn] = useState(false)
    const [avatarImg, setAvatar] = useState(avatar)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleIconClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click()
      }
    }

    const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0]

      if (selectedFile) {
        const fileURL = URL.createObjectURL(selectedFile)

        setAvatar(fileURL)
      }
    }

    return (
      <>
        <Card className={s.card}>
          <div className={s.wrapper}>
            <Typography className={s.title} variant={'large'}>
              Personal Information
            </Typography>
            <div className={s.avatarGroup}>
              <Avatar className={s.customAvatar} name={name} src={avatarImg ?? defaultAvatar} />
              {!modeOn && (
                <>
                  {<EditOutline className={s.iconImage} onClick={handleIconClick} />}
                  <input
                    className={s.avatarEditor}
                    onChange={handleFileInputChange}
                    ref={fileInputRef}
                    type={'file'}
                  />
                </>
              )}
            </div>
            <div className={s.nameGroup}>
              {!modeOn && (
                <>
                  <Typography variant={'h1'}>{name}</Typography>
                  <EditOutline
                    className={s.iconName}
                    onDoubleClick={() => {
                      setModeOn(true)
                    }}
                  />
                </>
              )}
              {modeOn && <NameEditor name={name} onSubmit={onSubmit} />}
            </div>
            {!modeOn && (
              <>
                <Typography className={s.email} variant={'body2'}>
                  {email}
                </Typography>
                <Button className={s.button} variant={'secondary'}>
                  {<SvgButton />}Logout
                </Button>
              </>
            )}
          </div>
        </Card>
      </>
    )
  }
)
