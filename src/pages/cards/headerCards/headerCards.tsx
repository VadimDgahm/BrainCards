import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/button'
import { ArrowBackOutLine } from '@/components/ui/icons/arrow-back-outline/ArrowBackOutline'
import { Typography } from '@/components/ui/typography'
import { CardsDropMenu } from '@/pages/cards/cardsDropMenu/cardsDropMenu'
import { useHeaderCards } from '@/pages/cards/headerCards/useHeaderCards'

import s from './headerCards.module.scss'

type HeaderCardsProps = {
  areCardsPresent: boolean
  idDeck: string
  isMyDeck: boolean
  nameDeck: string | undefined
  paramsUrl: URLSearchParams
  setIsOpenModuleCreateCard: (value: boolean) => void
}
export const HeaderCards = ({
  areCardsPresent,
  idDeck,
  isMyDeck,
  nameDeck = 'Name Deck',
  paramsUrl,
  setIsOpenModuleCreateCard,
}: HeaderCardsProps) => {
  const { navigate, onSearchHandler, paramSearch } = useHeaderCards({ paramsUrl })

  return (
    <>
      <Typography className={s.linkBack} onClick={() => navigate('/')} variant={'body2'}>
        <ArrowBackOutLine className={s.iconBack} />
        Back to Packs List
      </Typography>
      <div className={s.header}>
        <div className={s.nameCard}>
          <Typography variant={'large'}>{nameDeck}</Typography>
          {isMyDeck && <CardsDropMenu idDeck={idDeck} />}
        </div>

        <div className={s.btnBox}>
          {areCardsPresent &&
            (isMyDeck ? (
              <Button onClick={() => setIsOpenModuleCreateCard(true)}>Add New Card</Button>
            ) : (
              <Button>Learn to Pack</Button>
            ))}
        </div>
      </div>
      {(areCardsPresent || paramSearch !== null) && (
        <div className={s.search}>
          <Input onValueChange={onSearchHandler} type={'search'} />
        </div>
      )}
    </>
  )
}
