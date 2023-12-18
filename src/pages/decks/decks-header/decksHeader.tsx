import { FC } from 'react'

import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/button'
import { TrashOutline } from '@/components/ui/icons/trash-outline/TrashOutline'
import { Slider } from '@/components/ui/slider/slider'
import { Typography } from '@/components/ui/typography'
import CreateDeck from '@/pages/deck-modals/create-deck/createDeck'
import { selectSearchFieldSetting, selectSliderValues } from '@/pages/decks/selectors'
import {
  setCurrentPage,
  setOrderBy,
  setSearchField,
  setSelectedSortOption,
} from '@/src/services/deck.slice'
import { useGetDecksQuery } from '@/src/services/decks.service'
import { useAppDispatch, useAppSelector } from '@/src/services/hooks'

import s from './decksHeader.module.scss'

type DeckHeaderType = {
  isMyButtonPressed: boolean
  setIsMyButtonPressed: (isMyButtonPressed: boolean) => void
  setSliderCardsValues: (sliderCardsValues: SliderCardsValuesType) => void
  sliderCardsValues: SliderCardsValuesType
}

export type SliderCardsValuesType = {
  maxCardsCount: number
  minCardsCount: number
}

const DecksHeader: FC<DeckHeaderType> = ({
  isMyButtonPressed,
  setIsMyButtonPressed,
  setSliderCardsValues,
  sliderCardsValues,
}) => {
  const { data, error, isError, isLoading } = useGetDecksQuery({})
  const searchField = useAppSelector(selectSearchFieldSetting)
  const dispatch = useAppDispatch()
  const { maxCardsCount, minCardsCount } = useAppSelector(selectSliderValues)
  const handleButtonClick = () => {
    setIsMyButtonPressed(!isMyButtonPressed)
  }

  const handleSliderChange = (values: number[]) => {
    setSliderCardsValues({ maxCardsCount: values[1], minCardsCount: values[0] })
  }

  const handleSearchField = (value: string) => {
    dispatch(setSearchField({ searchField: value }))
  }

  const handlerFilterClean = () => {
    dispatch(setSearchField({ searchField: '' }))
    dispatch(setOrderBy({ orderBy: 'updated-desc' }))
    setIsMyButtonPressed(false)
    setSliderCardsValues({ maxCardsCount: maxCardsCount, minCardsCount })
    dispatch(setCurrentPage({ currentPage: 1 }))
    dispatch(setSelectedSortOption({ selectedSortOption: 'Last Updated' }))
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
        <Typography className={s.packsListText} variant={'large'}>
          Packs List
        </Typography>
        <CreateDeck disabled={isLoading} />
      </div>
      {isLoading ? (
        <Typography className={s.loading} variant={'large'}>
          is Loading
        </Typography>
      ) : (
        <div className={s.searchFields}>
          <Input
            className={s.inputField}
            onValueChange={handleSearchField}
            type={'search'}
            value={searchField}
          />
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
            <Slider
              maxValue={Number(data?.maxCardsCount)}
              updateValues={handleSliderChange}
              values={[sliderCardsValues.minCardsCount, sliderCardsValues.maxCardsCount]}
            />
          </div>
          <div>
            <Button className={s.clearFilter} onClick={handlerFilterClean} variant={'secondary'}>
              <TrashOutline className={s.trashIcon} />
              <span className={s.clearTitle}>Clear Filter</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DecksHeader
