import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { PlayCircleOutline } from '@/components/ui/icons/play-circle-outline/PlayCircleOutline'
import { Selector } from '@/components/ui/selector/Selector'
import { Table } from '@/components/ui/table/Table'
import { CellVariant } from '@/components/ui/table/TableCellVariant/TableCellVariant'
import { Typography } from '@/components/ui/typography'
import { DeleteModal } from '@/pages/deck-modals/delete-module/deleteModal'
import { EditDeck } from '@/pages/deck-modals/edit-deck/editDeck'
import { useGetMeQuery } from '@/src/services/auth/authService'
import { useDeleteDeckMutation, useGetDecksQuery } from '@/src/services/decks.service'
import { GetDecksResponseItems } from '@/src/services/decks.types'

import s from './decksBody.module.scss'

type DeckBodyProps = {
  isMyButtonPressed: boolean
}

const DecksBody: FC<DeckBodyProps> = ({ isMyButtonPressed }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const navigate = useNavigate()

  const { data, error, isError, isLoading } = useGetDecksQuery({ currentPage })

  const { data: userData } = useGetMeQuery()
  const onChangePlay = (idDeck: string) => {
    navigate(`/cards/${idDeck}`)
  }

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

  // const navigate = useNavigate()
  //
  // const onCardsNavigate = (id: string) => {
  //   navigate(`cards/${id}`)
  // }

  return (
    <div className={s.body}>
      <Table.Root className={s.root}>
        <Table.Head>
          <Table.HeadRow>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Cards</Table.Cell>
            <Table.Cell>
              <Selector
                defaultValue={'Last Updated'}
                options={[
                  { title: 'Last Updated', value: 'Last Updated' },
                  { title: 'First Updated', value: 'First Updated' },
                ]}
              />
            </Table.Cell>
            <Table.Cell>Created by</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.HeadRow>
        </Table.Head>
        <Table.Body>
          {/*{if {isMyButtonPressed) data = data.filter(i => i.id = user.id) }*/}
          {data?.items.map(deck => {
            return (
              <Table.Row key={deck?.id}>
                <Table.Cell
                // onClick={() => {
                //   onCardsNavigate(deck?.id)
                // }}
                >
                  {deck?.name}
                </Table.Cell>
                <Table.Cell>{deck?.cardsCount}</Table.Cell>
                <Table.Cell className={s.selsectorCell}>
                  {new Date(deck?.updated).toLocaleDateString()}
                </Table.Cell>
                <Table.Cell>{deck?.author?.name}</Table.Cell>
                <Table.Cell>
                  {deck.author.id === userData?.id ? (
                    <CellWithIcon onChangePlay={() => onChangePlay(deck.id)} {...deck} />
                  ) : (
                    <PlayCircleOutline onClick={() => onChangePlay(deck.id)} />
                  )}
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
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
