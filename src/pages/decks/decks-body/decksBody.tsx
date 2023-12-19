import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Pagination } from '@/components/ui/pagination'
import { Selector } from '@/components/ui/selector/Selector'
import { Table } from '@/components/ui/table/Table'
import { CellVariant } from '@/components/ui/table/TableCellVariant/TableCellVariant'
import { Typography } from '@/components/ui/typography'
import { DeleteModal } from '@/pages/deck-modals/delete-module/deleteModal'
import { EditDeck } from '@/pages/deck-modals/edit-deck/editDeck'
import { options, selectOptions } from '@/pages/decks/decks-body/selectorConstants.types'
import { SliderCardsValuesType } from '@/pages/decks/decks-header/decksHeader'
import {
  selectCurrentPage,
  selectItemsPerPage,
  selectOrderBy,
  selectSearchFieldSetting,
  selectSelectedSortOption,
} from '@/pages/decks/selectors'
import { useGetMeQuery } from '@/src/services/auth/authService'
import {
  setCurrentPage,
  setItemsPerPage,
  setOrderBy,
  setSelectedSortOption,
} from '@/src/services/deck.slice'
import { useDeleteDeckMutation, useGetDecksQuery } from '@/src/services/decks.service'
import { GetDecksResponseItems } from '@/src/services/decks.types'
import { useAppDispatch, useAppSelector } from '@/src/services/hooks'

import s from './decksBody.module.scss'

type DeckBodyProps = {
  isMyButtonPressed: boolean
  sliderCardsValues: SliderCardsValuesType
}

const DecksBody: FC<DeckBodyProps> = ({ isMyButtonPressed, sliderCardsValues }) => {
  const navigate = useNavigate()

  const onChangePlay = (idDeck: string) => {}

  const currentPage = useAppSelector(selectCurrentPage)
  const itemsPerPage = useAppSelector(selectItemsPerPage)
  const searchFieldSetting = useAppSelector(selectSearchFieldSetting)
  const orderBy = useAppSelector(selectOrderBy)
  const selectedSortOption = useAppSelector(selectSelectedSortOption)
  const dispatch = useAppDispatch()
  const { data: userData } = useGetMeQuery()
  const { data, error, isError, isLoading } = useGetDecksQuery({
    authorId: isMyButtonPressed ? userData?.id : undefined,
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

  if (isLoading) {
    return <>{/*<Typography variant={'large'}>is Loading</Typography>*/}</>
  }

  const handleCurrentPageSet = (page: number | string) => {
    dispatch(setCurrentPage({ currentPage: Number(page) }))
  }

  const handleItemsPerPageSet = (pageSize: number | string) => {
    dispatch(setItemsPerPage({ itemsPerPage: Number(pageSize) }))
  }

  const handleSortOptionChange = (value: string) => {
    const newOrderBy = value === 'Last Updated' ? 'updated-desc' : 'updated-asc'

    dispatch(setOrderBy({ orderBy: newOrderBy }))
    dispatch(setSelectedSortOption({ selectedSortOption: value }))
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
                <Table.Cell>
                  {/*{deck.author.id === userData?.id ? (*/}
                  {/*  <CellWithIcon onChangePlay={() => onChangePlay(deck.id)} {...deck} />*/}
                  {/*) : (*/}
                  {/*  <PlayCircleOutline onClick={() => onChangePlay(deck.id)} />*/}
                  {/*)}*/}
                  <Selector
                    defaultValue={'Last Updated'}
                    onValueChange={handleSortOptionChange}
                    options={selectOptions}
                    value={selectedSortOption}
                  />
                </Table.Cell>
                <Table.Cell>Created by</Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.HeadRow>
            </Table.Head>
            <Table.Body>
              {data?.items
                .filter(deck => (isMyButtonPressed ? deck.author.id === userData?.id : true))
                .filter(deck => deck.name.startsWith(searchFieldSetting))
                .map(deck => {
                  return (
                    <Table.Row key={deck?.id}>
                      <Table.Cell className={s.cell} onClick={() => navigate(`/cards/${deck.id}`)}>
                        {deck?.name}
                      </Table.Cell>
                      <Table.Cell>{deck?.cardsCount}</Table.Cell>
                      <Table.Cell className={s.selsectorCell}>
                        {new Date(deck?.updated).toLocaleDateString()}
                      </Table.Cell>
                      <Table.Cell>{deck?.author?.name}</Table.Cell>
                      <Table.Cell>
                        {deck.author.id === userData?.id && (
                          <CellWithIcon onChangePlay={() => onChangePlay(deck.id)} {...deck} />
                        )}
                      </Table.Cell>
                    </Table.Row>
                  )
                })}
            </Table.Body>
          </Table.Root>
          <Pagination
            currentPage={currentPage}
            onChangePageSize={handleItemsPerPageSet}
            onPageChange={handleCurrentPageSet}
            options={options}
            pageSize={itemsPerPage}
            totalCount={data?.pagination.totalItems}
          />
        </>
      )}
    </div>
  )
}

export default DecksBody

type CellWithIconType = {
  onChangePlay: () => void
} & GetDecksResponseItems
const CellWithIcon = ({ onChangePlay, ...deck }: CellWithIconType) => {
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openRemoveModal, setOpenRemoveModal] = useState(false)
  const [removeDeck] = useDeleteDeckMutation()
  const removeDeckHandler = async () => {
    await removeDeck({ id: deck.id })
    toast.success('success')
  }

  return (
    <>
      <CellVariant.PlayEditAndTrash
        className={s.icons}
        onChangeEdit={() => setOpenEditModal(true)}
        onChangePlay={onChangePlay}
        onChangeTrash={() => setOpenRemoveModal(true)}
      />
      <DeleteModal
        nameDeleteObj={deck.name}
        open={openRemoveModal}
        removeHandler={removeDeckHandler}
        setOpen={setOpenRemoveModal}
        title={'Delete Pack'}
      />
      <EditDeck
        idDeck={deck.id}
        isPrivate={deck.isPrivate}
        name={deck.name}
        open={openEditModal}
        setOpen={setOpenEditModal}
      />
    </>
  )
}
