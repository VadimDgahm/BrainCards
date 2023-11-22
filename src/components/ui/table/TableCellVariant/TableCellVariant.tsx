import { ComponentProps, FC } from 'react'

import { StarIcon } from '@/components/ui/icons/star/StarIcon'
import { StarOutline } from '@/components/ui/icons/star-outline/StarOutline'

import s from './TableCellVariant.module.scss'
import { EditOutline } from '@/components/ui/icons/edit-outline/EditOutline'
import { TrashOutline } from '@/components/ui/icons/trash-outline/TrashOutline'
import clsx from 'clsx'
import { PlayCircleOutline } from '@/components/ui/icons/play-circle-outline/PlayCircleOutline'
import { Typography } from '@/components/ui/typography'
import { ArrowDown } from '@/components/ui/icons/arrowDown/ArrowDown'
import { ArrowUp } from '@/components/ui/icons/arrowUp/ArrowUp'

type StarsProps = { numberStar?: number; value: number } & ComponentProps<'div'>
const Stars: FC<StarsProps> = ({ numberStar = 5, value, className, ...rest }) => {
  const starsArrNumber: number[] = []
  const classNames = clsx(className, s.cell)
  for (let i = 0; i < numberStar; i++) {
    starsArrNumber.push(i + 1)
  }

  return (
    <div className={classNames} {...rest}>
      {starsArrNumber.map(n =>
        n <= value ? (
          <StarIcon className={s.star} color={'#E5AC39'} key={n} />
        ) : (
          <StarOutline className={s.star} color={'#E5AC39'} key={n} />
        )
      )}
    </div>
  )
}
type EditAndTrashProps = {
  title: string
  onChangeEdit?: () => void
  onChangeTrash?: () => void
} & ComponentProps<'div'>
const EditAndTrash: FC<EditAndTrashProps> = ({
  title,
  onChangeEdit,
  onChangeTrash,
  className,
  ...rest
}) => {
  const classNames = clsx(className, s.cell)
  const classNamesIcon = clsx(s.icon, s.indentation)
  return (
    <div className={classNames} {...rest}>
      <div className={s.indentation}>
        <Typography variant={'body2'}>{title}</Typography>
      </div>

      <EditOutline onChange={onChangeEdit} className={classNamesIcon} />
      <TrashOutline onChange={onChangeTrash} className={s.icon} />
    </div>
  )
}
type PlayEditAndTrashProps = {
  onChangePlay?: () => void
  onChangeEdit?: () => void
  onChangeTrash?: () => void
} & ComponentProps<'div'>
const PlayEditAndTrash: FC<PlayEditAndTrashProps> = ({
  onChangePlay,
  onChangeEdit,
  onChangeTrash,
  className,
  ...rest
}) => {
  const classNames = clsx(className, s.cell)
  const classNamesIcon = clsx(s.icon, s.indentation)
  return (
    <div className={classNames} {...rest}>
      <PlayCircleOutline onChange={onChangePlay} className={classNamesIcon} />
      <EditOutline onChange={onChangeEdit} className={classNamesIcon} />
      <TrashOutline onChange={onChangeTrash} className={s.icon} />
    </div>
  )
}
type WithImageProps = {
  src?: string
  title: string
} & ComponentProps<'div'>
const WithImage: FC<WithImageProps> = ({
  title,
  className,
  src = 'https://via.placeholder.com/118x48',
  ...rest
}) => {
  const classNames = clsx(className, s.cell)
  return (
    <div className={classNames} {...rest}>
      <img src={src} className={s.indentation} />
      <div className={s.indentation}>
        <Typography variant={'body2'}>{title}</Typography>
      </div>
    </div>
  )
}
type WithSortProps = {
  sort: 'down' | 'up'
  title: string
} & ComponentProps<'div'>
const WithSort: FC<WithSortProps> = ({ title, className, sort = 'down', ...rest }) => {
  const classNames = clsx(className, s.cell, s.attached)
  return (
    <div className={classNames} {...rest}>
      <div className={s.sort}>
        <Typography variant={'body2'}>{title}</Typography>
      </div>
      {sort === 'down' ? <ArrowDown /> : <ArrowUp />}
    </div>
  )
}

export const CellVariant = {
  Stars,
  EditAndTrash,
  PlayEditAndTrash,
  WithImage,
  WithSort,
}
