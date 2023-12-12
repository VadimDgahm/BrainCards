import { LoginForm } from '@/components/auth/sign-in'
import { useLoginMutation } from '@/src/services/auth/authService'

export const SingInPages = () => {
  const [login] = useLoginMutation()
  const handlerSubmit = async (data: { email: string; password: string }) => {
    login(data)
  }

  return <LoginForm onSubmit={handlerSubmit} />
}
