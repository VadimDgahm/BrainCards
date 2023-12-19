import Modal from '@/components/ui/modal/modal'
import ModalTitle from '@/components/ui/modal/modalTitle/modalTitle'
import ModalWithButton from '@/components/ui/modal/modalWithButton/modalWithButton'
import ModalWithContent from '@/components/ui/modal/modalWithContent/modalWithContent'
import { Selector } from '@/components/ui/selector/Selector'
import { useChangeCard } from '@/pages/deck-modals/change-card/useChangeCard'
import { FormWithImg } from '@/pages/deck-modals/create-card/FormWithImg/FormWithImg'
import { FormWithText } from '@/pages/deck-modals/create-card/FormWithText/FormWithText'
type CreateCardProps = {
  idDeck: string
  open: boolean
  setOpen: (isOpen: boolean) => void
}

export const ChangeCard = ({ id, open, setOpen }: CreateCardProps) => {
  const {
    arrTypesForm,
    control,
    getImgAnswer,
    getImgQuestion,
    handleSubmit,
    onSubmit,
    setVariantCard,
    variantCard,
  } = useChangeCard({ id, setOpen })

  return (
    <Modal open={open} setOpen={setOpen}>
      <ModalTitle setOpen={setOpen} title={'Add New Card'} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalWithContent>
          <Selector
            onValueChange={setVariantCard}
            options={arrTypesForm}
            title={'Choose a question format'}
            value={variantCard}
          />
          {variantCard === 'Text' ? (
            <FormWithText control={control} />
          ) : (
            <FormWithImg getImgAnswer={getImgAnswer} getImgQuestion={getImgQuestion} />
          )}
        </ModalWithContent>
        <ModalWithButton
          onClickSecondaryButton={() => setOpen(false)}
          titleButton={'Add New Card'}
        />
      </form>
    </Modal>
  )
}
