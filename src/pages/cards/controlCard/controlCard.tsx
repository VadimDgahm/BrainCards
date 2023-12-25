import { CellVariant } from '@/components/ui/table/TableCellVariant/TableCellVariant'
import { useControlCard } from '@/pages/cards/controlCard/useControlCard'
import { CardActions } from '@/pages/deck-modals/create-card/cardActions'
import { DeleteModal } from '@/pages/deck-modals/delete-module/deleteModal'
import { CardResponse } from '@/src/services/decks.types'

type ControlCardProps = {
  card: CardResponse
  isMyDeck: boolean
}
export const ControlCard = ({ card, isMyDeck }: ControlCardProps) => {
  const {
    editCardByDeck,
    isOpenModuleEditCard,
    isOpenModuleRemoveCard,
    removeCardById,
    setIsOpenModuleEditCard,
    setIsOpenModuleRemoveCard,
  } = useControlCard({ idCard: card.id })

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
