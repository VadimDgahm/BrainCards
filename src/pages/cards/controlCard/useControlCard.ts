import { useState } from 'react'
import { toast } from 'react-toastify'

import {
  useRemoveCardByDeckIdMutation,
  useUpdateCardByDeckIdMutation,
} from '@/src/services/cards.service'

type PropsType = {
  idCard: string
}
export const useControlCard = ({ idCard }: PropsType) => {
  const [isOpenModuleRemoveCard, setIsOpenModuleRemoveCard] = useState(false)
  const [isOpenModuleEditCard, setIsOpenModuleEditCard] = useState(false)
  const [removeCard] = useRemoveCardByDeckIdMutation()
  const [updateCard] = useUpdateCardByDeckIdMutation()
  const removeCardById = () => {
    toast.promise(removeCard({ id: idCard }), {
      error: 'error',
      pending: 'pending',
      success: 'success',
    })
    setIsOpenModuleRemoveCard(false)
  }
  const editCardByDeck = async (body: FormData) => {
    updateCard({ body, id: idCard })
  }

  return {
    editCardByDeck,
    isOpenModuleEditCard,
    isOpenModuleRemoveCard,
    removeCardById,
    setIsOpenModuleEditCard,
    setIsOpenModuleRemoveCard,
  }
}
