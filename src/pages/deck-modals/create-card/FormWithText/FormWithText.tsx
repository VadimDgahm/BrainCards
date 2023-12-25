import { Control } from 'react-hook-form'

import { ControlledInput } from '@/components/controlled/controlledInput/controlledInput'
import { FormDataAddCards } from '@/pages/deck-modals/create-card/useCardActions'

import s from './FormWithText.module.scss'

type FormWithTextProps = {
  answer?: string | undefined
  control: Control<FormDataAddCards, any>
  question?: string | undefined
}
export const FormWithText = ({ answer = '', control, question = '' }: FormWithTextProps) => {
  return (
    <>
      <ControlledInput
        className={s.input}
        control={control}
        defaultValue={question}
        name={'question'}
        title={'Question'}
      />
      <ControlledInput
        className={s.input}
        control={control}
        defaultValue={answer}
        name={'answer'}
        title={'Answer'}
      />
    </>
  )
}
