import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { ControlledInput } from '@/components/controlled/controlled-input/controlled-input'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
const nameValidation = z.object({
  userName: z.string().min(3, 'the name must be more than 3 letters'),
})

type PropsType = {
  name: string
  setEdite: (isOpen: boolean) => void
}
export type ChangeNameValidation = z.infer<typeof nameValidation>
export const ChangeNameForm: FC<PropsType> = ({ name, setEdite }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<ChangeNameValidation>({
    defaultValues: { userName: name },
    resolver: zodResolver(nameValidation),
  })
  const onSubmit = (data: ChangeNameValidation) => {
    console.log(data)
    if (name !== data.userName) {
      setEdite(false)
    } else {
      setError('userName', { message: 'this is the current name' })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <ControlledInput
          control={control}
          errorMessage={errors.userName?.message}
          label={'Nickname'}
          name={'userName'}
          value={name}
        />
      </div>
      <Button>Save Changes</Button>
    </form>
  )
}
