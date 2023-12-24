import { useParams } from 'react-router-dom'

import { Cards } from '@/pages/cards/cards'

export const PageCards = () => {
  const params = useParams()
  let deckID = ''

  if (params.id) {
    deckID = params.id
  }

  return <Cards idDeck={deckID} />
}
