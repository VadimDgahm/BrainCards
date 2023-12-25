import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './emptyDeck.module.scss'

type EmptyDeckProps = {
  isMyDeck: boolean
  openCreateCard: (isOpen: boolean) => void
}
export const EmptyDeck = ({ isMyDeck, openCreateCard }: EmptyDeckProps) => {
  return (
    <>
      <div className={s.title}>
        <Typography className={s.titleText} variant={'body1'}>
          This pack is empty. Click add new card to fill this pack
        </Typography>
        <div>{isMyDeck && <Button onClick={() => openCreateCard(true)}>Add New Card</Button>}</div>
      </div>
    </>
  )
}
