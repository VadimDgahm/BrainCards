import Modal from '@/components/ui/modal/modal'
import ModalWithButton from '@/components/ui/modal/modalWithButton/modalWithButton'
import ModalWithContent from '@/components/ui/modal/modalWithContent/modalWithContent'

type PropsType = {
  nameDeleteObj: string | undefined
  open: boolean
  removeHandler: () => void
  setOpen: (isOpen: boolean) => void
  title: string
}
export const DeleteModal = ({ nameDeleteObj, open, removeHandler, setOpen, title }: PropsType) => {
  return (
    <Modal onOpenChange={setOpen} open={open} title={title}>
      <ModalWithContent>
        Do you really want to remove {nameDeleteObj}? All cards will be deleted.
      </ModalWithContent>
      <ModalWithButton
        onClickPrimaryButton={removeHandler}
        onClickSecondaryButton={() => setOpen(false)}
        titleButton={'Delete Pack'}
      />
    </Modal>
  )
}
