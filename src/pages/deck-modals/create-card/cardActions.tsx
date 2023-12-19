import Modal from '@/components/ui/modal/modal'
import ModalTitle from '@/components/ui/modal/modalTitle/modalTitle'
import ModalWithButton from '@/components/ui/modal/modalWithButton/modalWithButton'
import ModalWithContent from '@/components/ui/modal/modalWithContent/modalWithContent'
import { Selector } from '@/components/ui/selector/Selector'
import { FormWithImg } from '@/pages/deck-modals/create-card/FormWithImg/FormWithImg'
import { FormWithText } from '@/pages/deck-modals/create-card/FormWithText/FormWithText'
import { useCardActions } from '@/pages/deck-modals/create-card/useCardActions'
import { CardResponse } from '@/src/services/decks.types'

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
  } = useCardActions({ onSubmit, setOpen })

  return (
    <Modal open={open} setOpen={setOpen}>
      <ModalTitle setOpen={setOpen} title={title} />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <ModalWithContent>
          <Selector
            onValueChange={setVariantCard}
            options={arrTypesForm}
            title={'Choose a question format'}
            value={variantCard}
          />
          {variantCard === 'Text' ? (
            <FormWithText
              answer={card && card.answer}
              control={control}
              question={card && card.question}
            />
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
