import { useForm } from 'react-hook-form'

import { ControlledRadio } from '@/components/controlled/controlled-radio/controlledRadio'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './radioRate.module.scss'

const radioSchema = z.object({
  radioButton: z.string(),
})

type FormValues = z.infer<typeof radioSchema>

const values = ['Did not know', 'Forgot', 'A lot of though', 'Confused', 'Knew the answer']

export const RadioRate = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const { control, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: {
      radioButton: undefined,
    },
    mode: 'onSubmit',
    resolver: zodResolver(radioSchema),
  })

  const radioButton = watch('radioButton')

  return (
    <>
      <Typography className={s.title} variant={'subtitle1'}>
        Rate yourself:
      </Typography>
      <div className={s.radioForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ControlledRadio
            className={s.radioGroupItems}
            control={control}
            name={'radioButton'}
            onChange={() => {}}
            options={values}
          />
          <Button disabled={radioButton === undefined} type={'submit'}>
            Next Question
          </Button>
        </form>
      </div>
    </>
  )
}
