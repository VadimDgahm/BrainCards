import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { DropDownMenu } from '@/components/ui/dropDownMenu/DropDownMenu'
import { MenuContent } from '@/components/ui/dropDownMenu/menuContent/MenuContent'
import { EditIcon } from '@/components/ui/icons/edit/EditIcon'
import { MoreVerticalOutline } from '@/components/ui/icons/more-vertical-outline/MoreVerticalOutline'
import { PlayCircleOutline } from '@/components/ui/icons/play-circle-outline/PlayCircleOutline'
import { TrashIcon } from '@/components/ui/icons/trash/TrashIcon'
import { DeleteModal } from '@/pages/deck-modals/delete-module/deleteModal'
import { EditDeck } from '@/pages/deck-modals/edit-deck/editDeck'
import { useDeleteDeckMutation, useGetDecksByIDQuery } from '@/services/decks/decks.service'

import s from './cardsDropMenu.module.scss'

type CardDropMenu = {
  idDeck: string
}
export const CardsDropMenu = ({ idDeck }: CardDropMenu) => {
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false)
  const { data } = useGetDecksByIDQuery({ id: idDeck })
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
  const [removeDeck] = useDeleteDeckMutation()
  const navigate = useNavigate()
  const removeDeckHandler = () => {
    removeDeck({ id: idDeck })
    setIsOpenModalEdit(false)
    navigate('/')
  }

  return (
    <>
      <DropDownMenu open={false} trigger={<MoreVerticalOutline className={s.iconMore} />}>
        <MenuContent
          onClick={() => alert('learn')}
          svgIcon={<PlayCircleOutline />}
          title={'Learn'}
        />
        <MenuContent
          onClick={() => setIsOpenModalEdit(true)}
          svgIcon={<EditIcon />}
          title={'Edit'}
        />
        <MenuContent
          isLine={false}
          onClick={() => setIsOpenDeleteModal(true)}
          svgIcon={<TrashIcon />}
          title={'Delete'}
        />
      </DropDownMenu>
      <EditDeck
        idDeck={idDeck}
        isPrivate={data?.isPrivate}
        name={data?.name}
        open={isOpenModalEdit}
        setOpen={setIsOpenModalEdit}
      />
      <DeleteModal
        nameDeleteObj={data?.name}
        open={isOpenDeleteModal}
        removeHandler={removeDeckHandler}
        setOpen={setIsOpenDeleteModal}
        title={'Delete Deck'}
      />
    </>
  )
}
