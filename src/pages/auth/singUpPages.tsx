import { SingUpForm } from '@/components/auth/sign-up'
import { useSignUpMutation } from '@/src/services/auth/authService'
import { SingUpResponse } from '@/src/services/auth/authServiceType'
import { showResultToast } from '@/uttils/commonFunctions'

export const SingUpPages = () => {
  const [signUp] = useSignUpMutation()
  const handlerSubmit = async (data: { email: string; password: string }) => {
    const result = await signUp(data)

    showResultToast<SingUpResponse>(result)
  }

  return <SingUpForm onSubmit={handlerSubmit} />
}
