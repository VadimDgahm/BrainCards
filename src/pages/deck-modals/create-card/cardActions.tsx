import Modal from '@/components/ui/modal/modal'
import ModalWithButton from '@/components/ui/modal/modalWithButton/modalWithButton'
import ModalWithContent from '@/components/ui/modal/modalWithContent/modalWithContent'
import { Select } from '@/components/ui/select/select'
import { FormWithImg } from '@/pages/deck-modals/create-card/formWithImg/FormWithImg'
import { FormWithText } from '@/pages/deck-modals/create-card/formWithText/formWithText'
import { useCardActions } from '@/pages/deck-modals/create-card/useCardActions'
import { CardResponse } from '@/src/services/decks.types'

import s from './cardActions.module.scss'

type CardActionsProps = {
  card?: CardResponse
  onSubmit: (body: FormData) => void
  open: boolean
  setOpen: (isOpen: boolean) => void
  title?: string
}

export const CardActions = ({ card, onSubmit, open, setOpen, title = '' }: CardActionsProps) => {
  const {
    arrTypesForm,
    control,
    getImgAnswer,
    getImgQuestion,
    handleSubmit,
    onSubmitHandler,
    setVariantCard,
    variantCard,
  } = useCardActions({ answer: card?.answer, onSubmit, question: card?.question, setOpen })

  return (
    <Modal onOpenChange={setOpen} open={open} title={title}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <ModalWithContent>
          <Select
            className={s.selector}
            label={'Choose a question format'}
            onValueChange={setVariantCard}
            options={arrTypesForm}
            value={variantCard}
          />
          {variantCard === 'Text' ? (
            <FormWithText control={control} />
          ) : (
            <FormWithImg
              answerImg={card?.answerImg}
              getImgAnswer={getImgAnswer}
              getImgQuestion={getImgQuestion}
              questionImg={card?.questionImg}
            />
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