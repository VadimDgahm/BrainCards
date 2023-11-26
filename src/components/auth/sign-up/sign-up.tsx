import { useForm } from 'react-hook-form'

import { ControlledInput } from '@/components/controlled/controlled-input/controlled-input'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-up.module.scss'

import { Button } from '../../ui/button'

const passwordSchema = z
  .string()
  .min(3, 'Password has to be at least 3 characters long')
  .max(30, 'Password should be less than 30 characters')

const loginSchema = z
  .object({
    confirm: passwordSchema.min(1, 'Confirm your password'),
    email: z.string().email({ message: 'Invalid email address' }),
    password: passwordSchema,
  })
  .refine((data: { confirm: string; password: string }) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'],
  })

type FormValues = z.infer<typeof loginSchema>

export const SingUpForm = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      confirm: '',
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  })

  return (
    <>
      <DevTool control={control} />
      <Card className={s.signUpWrapper}>
        <Typography as={'h1'} className={s.signUpTitle} variant={'large'}>
          Sign Up
        </Typography>
        <form className={s.signUpForm} onSubmit={handleSubmit(onSubmit)}>
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
          <ControlledInput
            className={s.confirmInput}
            control={control}
            label={'Confirm Password'}
            name={'confirm'}
            placeholder={'Confirm Password'}
            type={'password'}
          />
          <Button className={s.submitButton} fullWidth type={'submit'}>
            Sign Up
          </Button>
        </form>
        <Typography
          as={'p'}
          className={s.account}
          // as={Link} to={'/'}
          variant={'body2'}
        >
          Already have an account?
        </Typography>
        <Button as={'a'} variant={'link'}>
          <Typography
            as={'p'}
            className={s.signIn}
            // as={Link} to={'/'}
            variant={'link1'}
          >
            Sign In
          </Typography>
        </Button>
      </Card>
    </>
  )
}

/*строки 57, 60 - есть аккаунт, зарегистрироваться - заглушки для роутера*/