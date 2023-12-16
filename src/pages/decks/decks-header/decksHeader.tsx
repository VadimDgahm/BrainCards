import { FC, useState } from 'react'

import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/button'
import { TrashOutline } from '@/components/ui/icons/trash-outline/TrashOutline'
import { Slider } from '@/components/ui/slider/slider'
import { Typography } from '@/components/ui/typography'
import CreateDeck from '@/pages/deck-modals/create-deck/createDeck'
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
} from '@/src/services/decks.service'

import s from './decksHeader.module.scss'

type DeckHeaderType = {
  isMyButtonPressed: boolean
  setIsMyButtonPressed: (isMyButtonPressed: boolean) => void
}

const DecksHeader: FC<DeckHeaderType> = ({ isMyButtonPressed, setIsMyButtonPressed }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const { data, error, isError, isLoading } = useGetDecksQuery({ currentPage })

  const [createDeck, deckCreationStatus] = useCreateDeckMutation()

  const [deleteDeck, decksStateAfterDeleting] = useDeleteDeckMutation()

  const [updateDeck, updatedDeckStatus] = useUpdateDeckMutation()

  const handleButtonClick = () => {
    setIsMyButtonPressed(!isMyButtonPressed)
  }

  if (error) {
    return (
      <>
        <Typography variant={'large'}>Some error has occured</Typography>
        <Typography variant={'large'}>{error.data.message}</Typography>
      </>
    )
  }

  return (
    <div className={s.body}>
      <div className={s.header}>
        <Typography variant={'large'}>Packs List</Typography>
        {/*<Button*/}
        {/*  className={s.addButton}*/}
        {/*  disabled={deckCreationStatus.isLoading}*/}
        {/*  onClick={() => {*/}
        {/*    createDeck({ name: 'new deck' })*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Add New Pack*/}
        {/*</Button>*/}
        <CreateDeck />
      </div>
      {isLoading ? (
        <Typography variant={'large'}>is Loading</Typography>
      ) : (
        <div className={s.searchFields}>
          <Input className={s.inputField} type={'search'} />
          <div className={s.buttons}>
            <Typography variant={'body2'}>Show packs cards</Typography>
            <span className={s.buttonGroup}>
              <Button
                className={s.myCards}
                onClick={handleButtonClick}
                variant={isMyButtonPressed ? 'primary' : 'secondary'}
              >
                My Cards
              </Button>
              <Button
                className={s.allCards}
                onClick={handleButtonClick}
                variant={!isMyButtonPressed ? 'primary' : 'secondary'}
              >
                All Cards
              </Button>
            </span>
          </div>
          <div className={s.sliderGroup}>
            <Typography variant={'body2'}>Number of cards</Typography>
            <Slider maxValue={10} updateValues={() => {}} values={[0, 10]} />
          </div>
          <div>
            <Button className={s.clearFilter} variant={'secondary'}>
              <TrashOutline className={s.trashIcon} />
              <span className={s.clearTitle}>Clear Filter</span>
            </Button>
          </div>
        </div>
      )}

      {/*<Button*/}
      {/*  disabled={decksStateAfterDeleting.isLoading}*/}
      {/*  onClick={() => {*/}
      {/*    deleteDeck({ id: 'clq1etzl00644ry2xnymzgkeh' })*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Delete Deck*/}
      {/*</Button>*/}
      {/*<Button*/}
      {/*  disabled={updatedDeckStatus.isLoading}*/}
      {/*  onClick={() => {*/}
      {/*    updateDeck({ id: 'clq19l73c05qcry2xn552lggf', name: '123Deck' })*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Update Deck*/}
      {/*</Button>*/}
    </div>
  )
}

export default DecksHeader
