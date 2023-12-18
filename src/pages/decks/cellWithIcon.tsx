import { useState } from 'react'

import { CellVariant } from '@/components/ui/table/TableCellVariant/TableCellVariant'
import { DeleteDeck } from '@/pages/deck-modals/delete-deck/deleteDeck'
import { EditDeck } from '@/pages/deck-modals/edit-deck/editDeck'
import { GetDecksResponseItems } from '@/src/services/decks.types'

import s from '@/pages/decks/decks-body/decksBody.module.scss'

export const CellWithIcon = ({ ...deck }: GetDecksResponseItems) => {
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openRemoveModal, setOpenRemoveModal] = useState(false)

  return (
    <>
      <CellVariant.PlayEditAndTrash
        className={s.icons}
        onChangeEdit={() => setOpenEditModal(true)}
        onChangeTrash={() => setOpenRemoveModal(true)}
      />
      <DeleteDeck idDeck={deck.id} open={openRemoveModal} setOpen={setOpenRemoveModal} />
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
