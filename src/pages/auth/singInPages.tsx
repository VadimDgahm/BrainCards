import { useNavigate } from 'react-router-dom'

import { LoginForm } from '@/components/auth/sign-in'
import { useGetMeQuery, useLoginMutation } from '@/src/services/auth/authService'
import { LoginResponse } from '@/src/services/auth/authServiceType'
import { showResultToast } from '@/uttils/commonFunctions'

export const SingInPages = () => {
  const [login] = useLoginMutation()
  const navigate = useNavigate()
  const { data } = useGetMeQuery()
  const handlerSubmit = async (data: { email: string; password: string }) => {
    const result = await login(data)

    showResultToast<LoginResponse>(result)
  }

  data && navigate('/')

  return <LoginForm onSubmit={handlerSubmit} />
}
