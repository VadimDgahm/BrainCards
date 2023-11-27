import { useForm } from 'react-hook-form'

import { ControlledRadio } from '@/components/controlled/controlled-radio/controlledRadio'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const radioSchema = z.object({
  radioButton: z.string(),
})

type FormValues = z.infer<typeof radioSchema>

export const BigRadioGroup = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const values = ['Did not know', 'Forgot', 'A lot of though', 'Confused', 'Knew the answer']

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      radioButton: 'Did not know',
    },
    mode: 'onSubmit',
    resolver: zodResolver(radioSchema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {values.map((value, index) => (
        <ControlledRadio control={control} key={index} name={'radioButton'} value={value} />
      ))}
      <Button
        // as = {Link}
        type={'submit'}
      >
        Next Question
      </Button>
    </form>
  )
}
