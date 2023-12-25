import { FC } from 'react'

import { OptionsType, Select } from '@/components/ui/select/Select'
import { Typography } from '@/components/ui/typography'

import s from './PaginationControls.module.scss'

export type PaginationControlsProps = {
  currentOptions: OptionsType[]
  onChangePageSize: (pageSize: number | string) => void
}

export const PaginationControls: FC<PaginationControlsProps> = ({
  currentOptions,
  onChangePageSize,
}) => {
  return (
    <div className={s.boxSelector}>
      <Typography className={s.text} variant={'body2'}>
        Показать
      </Typography>
      <Select onValueChange={onChangePageSize} options={currentOptions} variant={'pagination'} />
      <Typography className={s.text} variant={'body2'}>
        на странице
      </Typography>
    </div>
  )
}
