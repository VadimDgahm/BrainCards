import { useForm } from 'react-hook-form'

import { ControlledInput } from '@/components/controlled/controlled-input/controlled-input'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './pass-recovery.module.scss'

import { Button } from '../../ui/button'

const passRecoverySchema = z.object({
  email: z.string().min(1, 'Enter email address').email({ message: 'Invalid email address' }),
})

type FormValues = z.infer<typeof passRecoverySchema>

export const ForgotPass = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(passRecoverySchema),
  })

  return (
    <>
      <DevTool control={control} />
      <Card className={s.signInWrapper}>
        <Typography as={'h1'} className={s.signInTitle} variant={'large'}>
          Forgot your password?
        </Typography>
        <form className={s.forgotPassForm} onSubmit={handleSubmit(onSubmit)}>
          <ControlledInput
            className={s.emailInput}
            control={control}
            label={'Email'}
            name={'email'}
            placeholder={'Email'}
          />
          <Typography as={'p'} className={s.passInform} variant={'body2'}>
            Enter your email address and we will send you further instructions
          </Typography>
          <Button className={s.submitButton} fullWidth type={'submit'}>
            Send Instructions
          </Button>
        </form>
        <Typography
          className={s.remember}
          // as={Link} to={'/'}
          variant={'body2'}
        >
          Did you remember your password?
        </Typography>
        <Button as={'a'} variant={'link'}>
          <Typography
            className={s.signUp}
            // as={Link} to={'/'}
            variant={'link1'}
          >
            Try loggin in
          </Typography>
        </Button>
      </Card>
    </>
  )
}

/*строки 57, 60 - есть аккаунт, зарегистрироваться - заглушки для роутера*/
