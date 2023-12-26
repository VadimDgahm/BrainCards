import Modal from '@/components/ui/modal/modal'
import ModalWithButton from '@/components/ui/modal/modalWithButton/modalWithButton'
import ModalWithContent from '@/components/ui/modal/modalWithContent/modalWithContent'
import { Select } from '@/components/ui/select/select'
import { useChangeCard } from '@/pages/deck-modals/change-card/useChangeCard'
import { FormWithText } from '@/pages/deck-modals/create-card/FormWithText/FormWithText'
import { FormWithImg } from '@/pages/deck-modals/create-card/formWithImg/FormWithImg'

type CreateCardProps = {
  idDeck: string
  open: boolean
  setOpen: (isOpen: boolean) => void
}

export const ChangeCard = ({ idDeck, open, setOpen }: CreateCardProps) => {
  const {
    arrTypesForm,
    control,
    getImgAnswer,
    getImgQuestion,
    handleSubmit,
    onSubmit,
    setVariantCard,
    variantCard,
  } = useChangeCard({ idDeck, setOpen })

  return (
    <Modal onOpenChange={setOpen} open={open} title={'Add New Card'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalWithContent>
          <Select
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
