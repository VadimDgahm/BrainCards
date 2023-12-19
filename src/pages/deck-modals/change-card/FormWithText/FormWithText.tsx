import { Control } from 'react-hook-form'

import { ControlledInput } from '@/components/controlled/controlled-input/controlled-input'
import { FormDataAddCards } from '@/pages/deck-modals/create-card/useCardActions'

import s from './FormWithText.module.scss'

type FormWithTextProps = {
  control: Control<FormDataAddCards, any>
}
export const FormWithText = ({ control }: FormWithTextProps) => {
  return (
    <>
      <ControlledInput className={s.input} control={control} name={'question'} title={'Question'} />
      <ControlledInput className={s.input} control={control} name={'answer'} title={'Answer'} />
    </>
  )
}
