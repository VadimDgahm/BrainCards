import { toast } from 'react-toastify'

import Modal from '@/components/ui/modal/modal'
import ModalWithButton from '@/components/ui/modal/modalWithButton/modalWithButton'
import ModalWithContent from '@/components/ui/modal/modalWithContent/modalWithContent'
import { useDeleteDeckMutation } from '@/src/services/decks.service'

type PropsType = {
  idDeck: string
  open: boolean
  setOpen: (isOpen: boolean) => void
}
export const DeleteDeck = ({ idDeck, open, setOpen }: PropsType) => {
  const [removeDeck] = useDeleteDeckMutation()
  const removeDeckHandler = async () => {
    await removeDeck({ id: idDeck })
    toast.success('success')
  }

  return (
    <Modal open={open} setOpen={setOpen} title={'Delete Pack'}>
      <ModalWithContent>
        Do you really want to remove Pack Name? All cards will be deleted.
      </ModalWithContent>
      <ModalWithButton
        onClickPrimaryButton={removeDeckHandler}
        onClickSecondaryButton={() => setOpen(false)}
        titleButton={'Delete Pack'}
      />
    </Modal>
  )
}
