import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledInput } from '@/components/controlled/controlled-input/controlled-input'
import { Button } from '@/components/ui/button'
import Modal from '@/components/ui/modal/modal'
import ModalWithButton from '@/components/ui/modal/modalWithButton/modalWithButton'
import ModalWithContent from '@/components/ui/modal/modalWithContent/modalWithContent'
import { useCreateDeckMutation } from '@/src/services/decks.service'
import { CreateDeckType } from '@/src/services/decks.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './createDeck.module.scss'

const loginSchema = z.object({
  isPrivate: z.boolean(),
  name: z
    .string()
    .min(3, 'Password has to be at least 3 characters long')
    .max(30, 'Password should be less than' + ' 30 characters'),
})

type CreateProps = {
  disabled?: boolean
}
const CreateDeck: FC<CreateProps> = ({ disabled }) => {
  const [createDeck] = useCreateDeckMutation()
  const [open, setOpen] = useState(false)
  const { control, handleSubmit } = useForm<CreateDeckType>({
    defaultValues: {
      isPrivate: false,
      name: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  })
  const onSubmit = async (dateForm: CreateDeckType) => {
    await createDeck(dateForm)
    toast.success('success')
    setOpen(false)
  }

  return (
    <section>
      <Button
        disabled={disabled}
        onClick={() => {
          setOpen(true)
        }}
      >
        Add New Pack
      </Button>
      <div>
        <Modal open={open} setOpen={setOpen} title={'Add New Pack'}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalWithContent>
              <ControlledInput className={s.input} control={control} label={'Name'} name={'name'} />
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
              titleButton={'Add New Pack'}
            />
          </form>
        </Modal>
      </div>
    </section>
  )
}

export default CreateDeck
