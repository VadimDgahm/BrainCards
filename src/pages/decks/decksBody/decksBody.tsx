import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ArrowDown } from '@/components/ui/icons/arrowDown/ArrowDown'
import { ArrowUp } from '@/components/ui/icons/arrowUp/ArrowUp'
import { Pagination } from '@/components/ui/pagination'
import { Table } from '@/components/ui/table/Table'
import { Typography } from '@/components/ui/typography'
import { CellWithIcon } from '@/pages/decks/CellWithIcon'
import { CellWithPlayIcon } from '@/pages/decks/CellWithPlayIcon'
import { options } from '@/pages/decks/decksBody/selectorConstants.types'
import { SliderCardsValuesType } from '@/pages/decks/decksHeader/decksHeader'
import {
  selectCurrentPage,
  selectItemsPerPage,
  selectOrderBy,
  selectSearchFieldSetting,
  selectTabSwitcherValues,
} from '@/pages/decks/selectors'
import { useGetMeQuery } from '@/services/auth/authService'
import { setCurrentPage, setItemsPerPage, setOrderBy } from '@/services/decks/deck.slice'
import { useGetDecksQuery } from '@/services/decks/decks.service'
import { useAppDispatch, useAppSelector } from '@/services/hooks'

import s from './decksBody.module.scss'

type DeckBodyProps = {
  sliderCardsValues: SliderCardsValuesType
  tabSwitcherPosition: string
}

export const DecksBody: FC<DeckBodyProps> = ({ sliderCardsValues, tabSwitcherPosition }) => {
  const navigate = useNavigate()

  const currentPage = useAppSelector(selectCurrentPage)
  const itemsPerPage = useAppSelector(selectItemsPerPage)
  const searchFieldSetting = useAppSelector(selectSearchFieldSetting)
  const orderBy = useAppSelector(selectOrderBy)
  const dispatch = useAppDispatch()
  const { data: userData } = useGetMeQuery()
  const { data, error, isError, isLoading } = useGetDecksQuery({
    authorId: tabSwitcherPosition === 'left' ? userData?.id : undefined,
    currentPage,
    itemsPerPage,
    maxCardsCount: sliderCardsValues.maxCardsCount,
    minCardsCount: sliderCardsValues.minCardsCount,
    name: searchFieldSetting,
    orderBy,
  })

  if (error) {
    return (
      <>
        <Typography variant={'large'}>Some error has occured</Typography>
        <Typography variant={'large'}>{error.data?.message}</Typography>
      </>
    )
  }

  const handleCurrentPageSet = (page: number | string) => {
    dispatch(setCurrentPage({ currentPage: Number(page) }))
  }

  const handleItemsPerPageSet = (pageSize: number | string) => {
    dispatch(setItemsPerPage({ itemsPerPage: Number(pageSize) }))
  }

  const handleSortOptionChange = () => {
    const newSortDirection = orderBy === 'updated-asc' ? 'updated-desc' : 'updated-asc'

    dispatch(setOrderBy({ orderBy: newSortDirection }))
  }

  return (
    <div className={s.body}>
      {!isLoading && (
        <>
          <Table.Root className={s.root}>
            <Table.Head>
              <Table.HeadRow>
                <Table.Cell>Name</Table.Cell>
                <Table.Cell>Cards</Table.Cell>
                <Table.Cell className={s.updatedGroup} onClick={handleSortOptionChange}>
                  <Typography variant={'body1'}>Last Updated</Typography>
                  {orderBy === 'updated-asc' ? (
                    <ArrowUp className={s.arrowIcon} />
                  ) : (
                    <ArrowDown className={s.arrowIcon} />
                  )}
                </Table.Cell>
                <Table.Cell>Created by</Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.HeadRow>
            </Table.Head>
            <Table.Body>
              {data?.items.map(deck => {
                return (
                  <Table.Row key={deck?.id}>
                    <Table.Cell className={s.cell} onClick={() => navigate(`/cards/${deck.id}`)}>
                      {deck?.name}
                    </Table.Cell>
                    <Table.Cell>{deck?.cardsCount}</Table.Cell>
                    <Table.Cell className={s.dataSectorCell}>
                      {new Date(deck?.updated).toLocaleDateString()}
                    </Table.Cell>
                    <Table.Cell>{deck?.author?.name}</Table.Cell>
                    <Table.Cell>
                      {deck.author.id === userData?.id ? (
                        <CellWithIcon {...deck} />
                      ) : (
                        <CellWithPlayIcon {...deck} />
                      )}
                    </Table.Cell>
                  </Table.Row>
                )
              })}
            </Table.Body>
          </Table.Root>
          <Pagination
            availablePageSizes={options}
            currentPage={currentPage}
            onChangePageSize={handleItemsPerPageSet}
            onPageChange={handleCurrentPageSet}
            pageSize={itemsPerPage}
            totalCount={data?.pagination.totalItems}
          />
        </>
      )}
    </div>
  )
}
