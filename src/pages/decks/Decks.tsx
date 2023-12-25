import { useState } from 'react'

import { DecksBody } from '@/pages/decks/decksBody/decksBody'
import DecksHeader from '@/pages/decks/decksHeader/decksHeader'
import { selectSliderValues } from '@/pages/decks/selectors'
import { useAppSelector } from '@/services/hooks'

const Decks = () => {
  const [tabSwitcherPosition, setTabSwitcherPosition] = useState('right')
  const sliderValues = useAppSelector(selectSliderValues)
  const [sliderCardsValues, setSliderCardsValues] = useState(sliderValues)

  return (
    <>
      <DecksHeader
        setSliderCardsValues={setSliderCardsValues}
        setTabSwitcherPosition={setTabSwitcherPosition}
        sliderCardsValues={sliderCardsValues}
        tabSwitcherPosition={tabSwitcherPosition}
      />
      <DecksBody sliderCardsValues={sliderCardsValues} tabSwitcherPosition={tabSwitcherPosition} />
    </>
  )
}

export default Decks
