import { FC } from 'react'

import s from '@/components/ui/avatar/avatar.module.scss'

type AvatarProps = {
  name: string
  src: string
}
export const Avatar: FC<AvatarProps> = ({ name, src }) => {
  return <img alt={name} className={s.Avatar} src={src} />
}
