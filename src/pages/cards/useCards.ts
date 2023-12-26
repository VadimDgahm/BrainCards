import { useState } from 'react'

import {
  selectCurrentPageCards,
  selectItemsPerPageCards,
  selectOrderByCards,
  selectSearchFieldSettingCards,
} from '@/pages/decks/selectors'
import { useGetMeQuery } from '@/services/auth/authService'
import {
  setCurrentPageCards,
  setItemsPerPageCards,
  setOrderByCards,
} from '@/services/cards/card.slice'
import {
  useAddCardByDeckIdMutation,
  useGetCardsByDeckIdQuery,
} from '@/services/cards/cards.service'
import { useGetDecksByIDQuery } from '@/services/decks/decks.service'
import { useAppDispatch, useAppSelector } from '@/services/hooks'

type PropsType = {
  idDeck: string
}
export const useCards = ({ idDeck }: PropsType) => {
  const { data: meData } = useGetMeQuery()
  const { data: deckData } = useGetDecksByIDQuery({ id: idDeck })

  const [addCard] = useAddCardByDeckIdMutation()
  const [isOpenModuleCreateCard, setIsOpenModuleCreateCard] = useState(false)

  const currentPage = useAppSelector(selectCurrentPageCards)
  const searchText = useAppSelector(selectSearchFieldSettingCards)
  const itemsPerPage = useAppSelector(selectItemsPerPageCards)
  const orderBy = useAppSelector(selectOrderByCards)

  const { data: cardsData } = useGetCardsByDeckIdQuery({
    currentPage,
    id: idDeck,
    itemsPerPage,
    orderBy,
    question: searchText,
  })
  const handleSortChange = (value: 'updated-asc' | 'updated-desc') => {
    dispatch(setOrderByCards({ orderBy: value }))
  }
  const dispatch = useAppDispatch()
  const handleCurrentPageSet = (page: number | string) => {
    dispatch(setCurrentPageCards({ currentPage: Number(page) }))
  }
  const handleItemsPerPageSet = (pageSize: number | string) => {
    dispatch(setItemsPerPageCards({ itemsPerPage: Number(pageSize) }))
  }
  const isMyDeck = deckData?.userId === meData?.id
  const areCardsPresent = !!cardsData?.items.length

  const addCardByDeck = (body: FormData) => {
    addCard({ body, id: idDeck })
  }
  const params = new URLSearchParams(window.location.search)
  const paramSearch = params.get('search')

  return {
    addCardByDeck,
    areCardsPresent,
    cards: cardsData?.items,
    currentPage,
    handleCurrentPageSet,
    handleItemsPerPageSet,
    handleSortChange,
    isMyDeck,
    isOpenModuleCreateCard,
    itemsPerPage,
    nameDeck: deckData?.name,
    paramSearch,
    params,
    setIsOpenModuleCreateCard,
    totalCount: cardsData?.pagination.totalItems,
  }
}
