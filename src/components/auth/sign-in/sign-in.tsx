import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledInput } from '@/components/controlled/controlled-input/controlled-input'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-in.module.scss'

import { Button } from '../../ui/button'

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(3, 'Password has to be at least 3 characters long')
    .max(30, 'Password should be less than' + ' 30 characters'),
  rememberMe: z.boolean(),
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: true,
    },
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  })

  return (
    <>
      <DevTool control={control} />
      <Card className={s.signInWrapper}>
        <Typography className={s.signInTitle} variant={'large'}>
          Sign in
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ControlledInput
            className={s.emailInput}
            control={control}
            label={'Email'}
            name={'email'}
            placeholder={'Email'}
          />
          <ControlledInput
            className={s.passwordInput}
            control={control}
            label={'Password'}
            name={'password'}
            placeholder={'Password'}
            type={'password'}
          />
          <ControlledCheckbox
            containerClassName={s.checkbox}
            control={control}
            label={'remember Me'}
            name={'rememberMe'}
          />
          <Typography className={s.repairPassword} variant={'body2'}>
            Forgot Password?
          </Typography>
          <Button className={s.submitButton} type={'submit'}>
            Submit
          </Button>
        </form>
        <Typography
          className={s.account}
          // as={Link} to={'/'}
          variant={'body2'}
        >
          Don&apos;t have an account?
        </Typography>
        <Typography
          className={s.signUp}
          // as={Link} to={'/'}
          variant={'link1'}
        >
          Sign Up
        </Typography>
      </Card>
    </>
  )
}

/*строки 57, 60 - есть аккаунт, зарегистрироваться - заглушки для роутера*/
