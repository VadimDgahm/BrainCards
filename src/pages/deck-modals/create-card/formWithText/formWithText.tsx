import { Control } from 'react-hook-form'

import { ControlledInput } from '@/components/controlled/controlled-input/controlled-input'
import { FormDataAddCards } from '@/pages/deck-modals/create-card/useCardActions'

import s from './formWithText.module.scss'

type FormWithTextProps = {
  control: Control<FormDataAddCards, any>
}
export const FormWithText = ({ control }: FormWithTextProps) => {
  return (
    <>
      <ControlledInput className={s.input} control={control} label={'Question'} name={'question'} />
      <ControlledInput className={s.input} control={control} label={'Answer'} name={'answer'} />
    </>
  )
}
