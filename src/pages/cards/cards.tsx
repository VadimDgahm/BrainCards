import { Pagination } from '@/components/ui/pagination'
import { CardList } from '@/pages/cards/cardsList/cardsList'
import { EmptyDeck } from '@/pages/cards/emptyDeck/emptyDeck'
import { HeaderCards } from '@/pages/cards/headerCards/headerCards'
import { useCards } from '@/pages/cards/useCards'
import { CardActions } from '@/pages/deck-modals/create-card/cardActions'
import { options } from '@/pages/decks/decks-body/selectorConstants.types'

type PropsType = {
  idDeck: string
}
export const Cards = ({ idDeck = '' }: PropsType) => {
  const {
    addCardByDeck,
    areCardsPresent,
    cards,
    currentPage,
    handleCurrentPageSet,
    handleItemsPerPageSet,
    handleSortChange,
    isMyDeck,
    isOpenModuleCreateCard,
    itemsPerPage,
    nameDeck,
    paramSearch,
    params,
    setIsOpenModuleCreateCard,
    totalCount,
  } = useCards({ idDeck })

  return (
    <div>
      <HeaderCards
        areCardsPresent={areCardsPresent}
        idDeck={idDeck}
        isMyDeck={isMyDeck}
        nameDeck={nameDeck}
        paramsUrl={params}
        setIsOpenModuleCreateCard={setIsOpenModuleCreateCard}
      />
      {paramSearch !== null || areCardsPresent ? (
        <CardList handleSortChange={handleSortChange} isMyDeck={isMyDeck} items={cards} />
      ) : (
        <EmptyDeck isMyDeck={isMyDeck} openCreateCard={setIsOpenModuleCreateCard} />
      )}
      <CardActions
        onSubmit={addCardByDeck}
        open={isOpenModuleCreateCard}
        setOpen={setIsOpenModuleCreateCard}
        title={'Add New Card'}
      />
      <Pagination
        availablePageSizes={options}
        currentPage={currentPage}
        onChangePageSize={handleItemsPerPageSet}
        onPageChange={handleCurrentPageSet}
        pageSize={itemsPerPage}
        totalCount={totalCount || 0}
      />
    </div>
  )
}
