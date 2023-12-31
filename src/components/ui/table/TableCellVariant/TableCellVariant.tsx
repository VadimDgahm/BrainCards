import { ComponentProps, FC } from 'react'

import { ArrowDown } from '@/components/ui/icons/arrowDown/ArrowDown'
import { ArrowUp } from '@/components/ui/icons/arrowUp/ArrowUp'
import { EditOutline } from '@/components/ui/icons/edit-outline/EditOutline'
import { PlayCircleOutline } from '@/components/ui/icons/play-circle-outline/PlayCircleOutline'
import { StarIcon } from '@/components/ui/icons/star/StarIcon'
import { StarOutline } from '@/components/ui/icons/star-outline/StarOutline'
import { TrashOutline } from '@/components/ui/icons/trash-outline/TrashOutline'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './TableCellVariant.module.scss'

type StarsProps = { numberStar?: number; value: number } & ComponentProps<'div'>
const Stars: FC<StarsProps> = ({ className, numberStar = 5, value, ...rest }) => {
  const starsArrNumber: number[] = []
  const classNames = clsx(className, s.cell)

  for (let i = 0; i < numberStar; i++) {
    starsArrNumber.push(i + 1)
  }

  return (
    <div className={classNames} {...rest}>
      {starsArrNumber.map(n =>
        n <= value ? (
          <StarIcon className={s.star} color={'#E5AC39'} key={n} width={16} />
        ) : (
          <StarOutline className={s.star} color={'#E5AC39'} key={n} width={16} />
        )
      )}
    </div>
  )
}

type EditAndTrashProps = {
  onClickEdit?: () => void
  onClickTrash?: () => void
  title?: string
} & ComponentProps<'div'>
const EditAndTrash: FC<EditAndTrashProps> = ({
  className,
  onClickEdit,
  onClickTrash,
  title = '',
  ...rest
}) => {
  const classNames = clsx(className, s.cell)
  const classNamesIcon = clsx(s.icon, s.indentation)

  return (
    <div className={classNames} {...rest}>
      <div className={s.indentation}>
        <Typography variant={'body2'}>{title}</Typography>
      </div>

      <EditOutline className={classNamesIcon} onClick={onClickEdit} />
      <TrashOutline className={s.icon} onClick={onClickTrash} />
    </div>
  )
}

type PlayEditAndTrashProps = {
  onChangeEdit?: () => undefined | void
  onChangePlay?: () => void
  onChangeTrash?: () => void
} & ComponentProps<'div'>
const PlayEditAndTrash: FC<PlayEditAndTrashProps> = ({
  className,
  onChangeEdit,
  onChangePlay,
  onChangeTrash,
  ...rest
}) => {
  const classNames = clsx(className, s.cell)
  const classNamesIcon = clsx(s.icon, s.indentation)

  return (
    <div className={classNames} {...rest}>
      <PlayCircleOutline className={classNamesIcon} onClick={onChangePlay} />
      <EditOutline className={classNamesIcon} onClick={onChangeEdit} />
      <TrashOutline className={s.icon} onClick={onChangeTrash} />
    </div>
  )
}

type PlayProps = {
  onChangePlay?: () => void
} & ComponentProps<'div'>
const Play: FC<PlayProps> = ({ className, onChangePlay, ...rest }) => {
  const classNames = clsx(className, s.cell)
  const classNamesIcon = clsx(s.icon, s.indentation)

  return (
    <div className={classNames} {...rest}>
      <PlayCircleOutline className={classNamesIcon} onClick={onChangePlay} />
    </div>
  )
}

type WithImageProps = {
  src?: null | string
  title: string
} & ComponentProps<'div'>
const WithImage: FC<WithImageProps> = ({ className, src, title, ...rest }) => {
  const classNames = clsx(className, s.cell)

  return (
    <div className={classNames} {...rest}>
      {src && <img className={`${s.indentation} ${s.img}`} src={src} />}
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
const WithSort: FC<WithSortProps> = ({ className, sort = 'down', title, ...rest }) => {
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
  EditAndTrash,
  Play,
  PlayEditAndTrash,
  Stars,
  WithImage,
  WithSort,
}
