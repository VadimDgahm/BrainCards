import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { ControlledCheckbox } from '@/components/controlled/controlledCheckbox/controlledCheckbox'
import { ControlledInput } from '@/components/controlled/controlledInput/controlledInput'
import Modal from '@/components/ui/modal/modal'
import ModalWithButton from '@/components/ui/modal/modalWithButton/modalWithButton'
import ModalWithContent from '@/components/ui/modal/modalWithContent/modalWithContent'
import { useUpdateDeckMutation } from '@/services/decks/decks.service'
import { UpdateDeck } from '@/services/decks/decks.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './editDeck.module.scss'

const loginSchema = z.object({
  isPrivate: z.boolean(),
  name: z
    .string()
    .min(3, 'Password has to be at least 3 characters long')
    .max(30, 'Password should be less than' + ' 30 characters'),
})

type PropsType = {
  idDeck: string
  isPrivate: boolean
  name: string
  open: boolean
  setOpen: (isOpen: boolean) => void
}
export const EditDeck = ({ idDeck, isPrivate, name, open, setOpen }: PropsType) => {
  const [updateDeck] = useUpdateDeckMutation()
  const { control, handleSubmit } = useForm<UpdateDeck>({
    defaultValues: {
      isPrivate: isPrivate,
      name: name,
    },
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  })
  const onSubmit = async (dateForm: UpdateDeck) => {
    await updateDeck({ ...dateForm, id: idDeck })
    toast.success('success')
    setOpen(false)
  }

  return (
    <Modal open={open} setOpen={setOpen} title={'Edit Pack'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalWithContent>
          <ControlledInput
            className={s.input}
            control={control}
            label={'Name Pack'}
            name={'name'}
          />
          <ControlledCheckbox
            className={s.checkbox}
            control={control}
            label={'Private pack'}
            name={'isPrivate'}
          />
        </ModalWithContent>
        <ModalWithButton
          onClickPrimaryButton={() => handleSubmit(onSubmit)}
          onClickSecondaryButton={() => setOpen(false)}
          titleButton={'Edit Pack'}
        />
      </form>
    </Modal>
  )
}
