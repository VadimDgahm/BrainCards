import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { CellVariant } from '@/components/ui/table/TableCellVariant/TableCellVariant'
import { DeleteModal } from '@/pages/deck-modals/delete-module/deleteModal'
import { EditDeck } from '@/pages/deck-modals/edit-deck/editDeck'
import { useDeleteDeckMutation } from '@/services/decks/decks.service'
import { GetDecksResponseItems } from '@/services/decks/decks.types'

import s from '@/pages/decks/decksBody/decksBody.module.scss'

type CellWithIconType = {
  onChangePlay?: () => void
  onClick?: () => void
} & GetDecksResponseItems
export const CellWithIcon = ({ onChangePlay, ...deck }: CellWithIconType) => {
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openRemoveModal, setOpenRemoveModal] = useState(false)
  const [removeDeck] = useDeleteDeckMutation()
  const removeDeckHandler = async () => {
    await removeDeck({ id: deck.id })
    toast.success('success')
  }

  const navigate = useNavigate()

  const handleClick = () => {
    if (deck?.cardsCount) {
      navigate(`/decks/learn/${deck.id}`)
    } else {
      toast.success('No cards in this deck')
    }
  }

  return (
    <>
      <CellVariant.PlayEditAndTrash className={s.icons} onClick={handleClick} />
      <DeleteModal
        nameDeleteObj={deck.name}
        open={openRemoveModal}
        removeHandler={removeDeckHandler}
        setOpen={setOpenRemoveModal}
        title={'Delete Pack'}
      />
      <EditDeck
        idDeck={deck.id}
        isPrivate={deck.isPrivate}
        name={deck.name}
        open={openEditModal}
        setOpen={setOpenEditModal}
      />
    </>
  )
}
