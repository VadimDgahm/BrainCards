import { useParams } from 'react-router-dom'

import { Deck } from '@/pages/cards/deck'

export const PageCards = () => {
  const params = useParams()
  let deckID = ''

  if (params.id) {
    deckID = params.id
  }

  return <Deck idDeck={deckID} />
}
