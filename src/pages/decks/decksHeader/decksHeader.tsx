import { FC } from 'react'

import { Input } from '@/components/ui/Input'
import { Loader } from '@/components/ui/Loader/Loader'
import { Button } from '@/components/ui/button'
import { TrashOutline } from '@/components/ui/icons/trash-outline/TrashOutline'
import { Preloader } from '@/components/ui/preloader'
import { Slider } from '@/components/ui/slider/slider'
import { TabSwitcher } from '@/components/ui/tabSwitcher'
import { Typography } from '@/components/ui/typography'
import CreateDeck from '@/pages/deck-modals/create-deck/createDeck'
import { collection } from '@/pages/decks/decksHeader/constants'
import { selectSearchFieldSetting, selectSliderValues } from '@/pages/decks/selectors'
import { setCurrentPage, setOrderBy, setSearchField } from '@/services/decks/deck.slice'
import { useGetDecksQuery } from '@/services/decks/decks.service'
import { useAppDispatch, useAppSelector } from '@/services/hooks'

import s from './decksHeader.module.scss'

type DeckHeaderType = {
  setSliderCardsValues: (sliderCardsValues: SliderCardsValuesType) => void
  setTabSwitcherPosition: (tabSwitcherPosition: string) => void
  sliderCardsValues: SliderCardsValuesType
  tabSwitcherPosition: string
}

export type SliderCardsValuesType = {
  maxCardsCount: number
  minCardsCount: number
}

const DecksHeader: FC<DeckHeaderType> = ({
  setSliderCardsValues,
  setTabSwitcherPosition,
  sliderCardsValues,
  tabSwitcherPosition,
}) => {
  const { data, error, isError, isLoading } = useGetDecksQuery({})
  const searchField = useAppSelector(selectSearchFieldSetting)
  const dispatch = useAppDispatch()
  const { maxCardsCount, minCardsCount } = useAppSelector(selectSliderValues)

  const handleSliderChange = (values: number[]) => {
    setSliderCardsValues({ maxCardsCount: values[1], minCardsCount: values[0] })
  }

  const handleSearchField = (value: string) => {
    dispatch(setSearchField({ searchField: value }))
  }

  const handlerFilterClean = () => {
    dispatch(setSearchField({ searchField: '' }))
    dispatch(setOrderBy({ orderBy: 'updated-desc' }))
    setTabSwitcherPosition('right')
    setSliderCardsValues({ maxCardsCount: maxCardsCount, minCardsCount })
    dispatch(setCurrentPage({ currentPage: 1 }))
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
          <Preloader />
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
            <TabSwitcher
              onValueChange={value => setTabSwitcherPosition(value)}
              value={tabSwitcherPosition}
              valuesCollection={collection}
            />
          </div>
          <div className={s.sliderGroup}>
            <Typography variant={'body2'}>Number of cards</Typography>
            <Slider
              maxValue={Number(data?.maxCardsCount)}
              onSliderValuesChange={handleSliderChange}
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
