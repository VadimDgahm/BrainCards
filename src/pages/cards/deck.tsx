import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/button'
import { ArrowBackOutLine } from '@/components/ui/icons/arrow-back-outline/ArrowBackOutline'
import { Table } from '@/components/ui/table/Table'
import { CellVariant } from '@/components/ui/table/TableCellVariant/TableCellVariant'
import { Typography } from '@/components/ui/typography'
import { CardActions } from '@/pages/deck-modals/create-card/cardActions'
import { DeleteModal } from '@/pages/deck-modals/delete-module/deleteModal'
import { useGetMeQuery } from '@/services/auth/authService'
import {
  useAddCardByDeckIdMutation,
  useGetCardByIdQuery,
  useGetCardsByDeckIdQuery,
  useRemoveCardByDeckIdMutation,
  useUpdateCardByDeckIdMutation,
} from '@/services/cards.service'
import { useGetDecksByIDQuery } from '@/services/decks/decks.service'
import { CardResponse } from '@/services/decks/decks.types'

import s from './deck.module.scss'

type PropsType = {
  idDeck: string
}
export const Deck = ({ idDeck = '' }: PropsType) => {
  const navigate = useNavigate()
  const { data: meData } = useGetMeQuery()
  const { data: deckData } = useGetDecksByIDQuery({ id: idDeck })
  const { data: cardsData } = useGetCardsByDeckIdQuery({ id: idDeck })
  const [addCard] = useAddCardByDeckIdMutation()
  const [isOpenModuleCreateCard, setIsOpenModuleCreateCard] = useState(false)

  const isMyDeck = deckData?.userId === meData?.id
  const areCardsPresent = !!cardsData?.items.length
  const addCardByDeck = (body: FormData) => {
    addCard({ body, id: idDeck })
  }

  return (
    <div>
      <div>
        <Typography className={s.linkBack} onClick={() => navigate('/')} variant={'body2'}>
          <ArrowBackOutLine className={s.iconBack} />
          Back to Packs List
        </Typography>
        {areCardsPresent ? (
          <CardList
            deckName={deckData?.name}
            isMyDeck={isMyDeck}
            items={cardsData?.items}
            openCreateCard={setIsOpenModuleCreateCard}
          />
        ) : (
          <EmptyDeck
            deckName={deckData?.name}
            isMyDeck={isMyDeck}
            openCreateCard={setIsOpenModuleCreateCard}
          />
        )}
        <CardActions
          onSubmit={addCardByDeck}
          open={isOpenModuleCreateCard}
          setOpen={setIsOpenModuleCreateCard}
          title={'Add New Card'}
        />

        {/*<Pagination*/}
        {/*  currentPage={}*/}
        {/*  onChangePageSize={}*/}
        {/*  onPageChange={}*/}
        {/*  options={}*/}
        {/*  pageSize={}*/}
        {/*  totalCount={}*/}
        {/*/>*/}
      </div>
    </div>
  )
}
type EmptyDeckProps = {
  deckName: string | undefined
  isMyDeck: boolean
  openCreateCard: (isOpen: boolean) => void
}
export const EmptyDeck = ({ deckName = '', isMyDeck, openCreateCard }: EmptyDeckProps) => {
  return (
    <>
      <div>
        <Typography className={s.nameDeck} variant={'large'}>
          {deckName}
        </Typography>
      </div>
      <div className={s.title}>
        <Typography className={s.titleText} variant={'body1'}>
          This pack is empty. Click add new card to fill this pack
        </Typography>
        <div>{isMyDeck && <Button onClick={() => openCreateCard(true)}>Add New Card</Button>}</div>
      </div>
    </>
  )
}

type CardListProps = {
  deckName: string | undefined
  isMyDeck: boolean
  items: CardResponse[]
  openCreateCard: (isOpen: boolean) => void
}
const CardList = ({ deckName = '', isMyDeck, items, openCreateCard }: CardListProps) => {
  return (
    <>
      <div className={s.header}>
        <Typography variant={'large'}>{deckName}</Typography>
        <div className={s.btnBox}>
          {isMyDeck ? (
            <Button onClick={() => openCreateCard(true)}>Add New Card</Button>
          ) : (
            <Button>Learn to Pack</Button>
          )}
        </div>
      </div>
      <div className={s.search}>
        <Input type={'search'} />
      </div>
      <Table.Root className={s.table}>
        <Table.Head>
          <Table.HeadRow>
            <Table.Cell>Question</Table.Cell>
            <Table.Cell>Answer</Table.Cell>
            <Table.Cell>Last Updated</Table.Cell>
            <Table.Cell>Grade</Table.Cell>
            <Table.Cell />
          </Table.HeadRow>
        </Table.Head>
        <Table.Body>
          {items.map(card => (
            <Table.Row key={card.id}>
              <Table.Cell>
                <CellVariant.WithImage src={card.questionImg} title={card.question} />
              </Table.Cell>
              <Table.Cell>
                <CellVariant.WithImage src={card.answerImg} title={card.answer} />
              </Table.Cell>
              <Table.Cell>{card.updated}</Table.Cell>
              <Table.Cell>
                <CellVariant.Stars value={card.grade} />
              </Table.Cell>
              <Table.Cell>
                <ControlCard card={card} isMyDeck={isMyDeck} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  )
}

type ControlCardProps = {
  card: CardResponse
  isMyDeck: boolean
}
const ControlCard = ({ card, isMyDeck }: ControlCardProps) => {
  const [isOpenModuleRemoveCard, setIsOpenModuleRemoveCard] = useState(false)
  const [isOpenModuleEditCard, setIsOpenModuleEditCard] = useState(false)
  const [removeCard] = useRemoveCardByDeckIdMutation()
  const [updateCard] = useUpdateCardByDeckIdMutation()
  const removeCardById = () => {
    toast.promise(removeCard({ id: card.id }), {
      error: 'error',
      pending: 'pending',
      success: 'success',
    })
    setIsOpenModuleRemoveCard(false)
  }
  const editCardByDeck = async (body: FormData) => {
    updateCard({ body, id: card.id })
  }

  return (
    <>
      {isMyDeck && (
        <CellVariant.EditAndTrash
          onClickEdit={() => setIsOpenModuleEditCard(true)}
          onClickTrash={() => setIsOpenModuleRemoveCard(true)}
        />
      )}
      <DeleteModal
        nameDeleteObj={card.id}
        open={isOpenModuleRemoveCard}
        removeHandler={() => removeCardById()}
        setOpen={setIsOpenModuleRemoveCard}
        title={'Delete Card'}
      />
      <CardActions
        card={card}
        onSubmit={editCardByDeck}
        open={isOpenModuleEditCard}
        setOpen={setIsOpenModuleEditCard}
        title={'Edit Card'}
      />
    </>
  )
}
