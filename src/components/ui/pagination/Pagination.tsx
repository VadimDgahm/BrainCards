import { FC } from 'react'

import { usePagination } from '@/components/ui/pagination/usePagination'
import { OptionsType, Selector } from '@/components/ui/selector/Selector'
import { Typography } from '@/components/ui/typography'

import s from './Pagination.module.scss'

export type PaginationProps = {
  currentPage: number
  onChangePageSize: (pageSize: number | string) => void
  onPageChange: (page: number | string) => void
  options: OptionsType[]
  pageSize: number
  siblingCount?: number
  totalCount: number
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  onChangePageSize,
  onPageChange,
  options,
  pageSize,
  siblingCount,
  totalCount,
}) => {
  const paginationRange = usePagination({
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  })

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null
  }
  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }
  const lastPage = paginationRange[paginationRange.length - 1]
  const currentOptions = options.filter(el => totalCount / +el.title > 1)

  return (
    <div className={s.container}>
      <ul className={s.paginationContainer}>
        <li
          className={`${s.paginationItem} ${currentPage === 1 && s.disabled}`}
          onClick={onPrevious}
        >
          <div className={`${s.arrow} ${s.left}`} />
        </li>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === '...') {
            return (
              <li className={`${s.paginationItem} ${s.dots}`} key={index}>
                &#8230;
              </li>
            )
          }

          return (
            <li
              className={`${s.paginationItem} ${pageNumber === currentPage && s.selected}`}
              key={index}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          )
        })}
        <li
          className={`${s.paginationItem} ${currentPage === lastPage && s.disabled}`}
          onClick={onNext}
        >
          <div className={`${s.arrow} ${s.right}`} />
        </li>
      </ul>
      <div className={s.boxSelector}>
        <Typography className={s.text} variant={'body2'}>
          Показать
        </Typography>
        <Selector
          onValueChange={onChangePageSize}
          options={currentOptions}
          variant={'pagination'}
        />
        <Typography className={s.text} variant={'body2'}>
          на странице
        </Typography>
      </div>
    </div>
  )
}
