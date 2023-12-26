import { SingUpForm } from '@/components/auth/sign-up'
import { useSignUpMutation } from '@/services/auth/authService'
import { SingUpResponse } from '@/services/auth/authServiceType'
import { showResultToast } from '@/uttils/commonFunctions'

export const SingUpPages = () => {
  const [signUp] = useSignUpMutation()
  const handlerSubmit = async (data: { email: string; password: string }) => {
    const result = await signUp(data)

    showResultToast<SingUpResponse>(result)
  }

  return <SingUpForm onSubmit={handlerSubmit} />
}
