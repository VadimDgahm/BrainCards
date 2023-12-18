import { useState } from 'react'

import DecksBody from '@/pages/decks/decks-body/decksBody'
import DecksHeader from '@/pages/decks/decks-header/decksHeader'
import { selectSliderValues } from '@/pages/decks/selectors'
import { useAppSelector } from '@/src/services/hooks'

const Decks = () => {
  const [isMyButtonPressed, setIsMyButtonPressed] = useState(false)
  const sliderValues = useAppSelector(selectSliderValues)
  const [sliderCardsValues, setSliderCardsValues] = useState(sliderValues)

  return (
    <>
      <DecksHeader
        isMyButtonPressed={isMyButtonPressed}
        setIsMyButtonPressed={setIsMyButtonPressed}
        setSliderCardsValues={setSliderCardsValues}
        sliderCardsValues={sliderCardsValues}
      />
      <DecksBody isMyButtonPressed={isMyButtonPressed} sliderCardsValues={sliderCardsValues} />
    </>
  )
}

export default Decks
