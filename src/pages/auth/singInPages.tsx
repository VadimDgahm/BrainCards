import { LoginForm } from '@/components/auth/sign-in'
import { useLoginMutation } from '@/src/services/auth/authService'
import { LoginResponse } from '@/src/services/auth/authServiceType'
import { showResultToast } from '@/uttils/commonFunctions'

export const SingInPages = () => {
  const [login] = useLoginMutation()
  const handlerSubmit = async (data: { email: string; password: string }) => {
    const result = await login(data)

    showResultToast<LoginResponse>(result)
  }

  return <LoginForm onSubmit={handlerSubmit} />
}
