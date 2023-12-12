import { Navigate } from 'react-router-dom'

import { SingUpForm } from '@/components/auth/sign-up'
import { useGetMeQuery, useSignUpMutation } from '@/src/services/auth/authService'

export const SingUpPages = () => {
  const [signUp] = useSignUpMutation()
  const handlerSubmit = async (data: { email: string; password: string }) => {
    signUp(data)
  }
  const result = useGetMeQuery()

  const isAuthenticated = !!result.data

  if (isAuthenticated) {
    return <Navigate to={'/'} />
  }

  return <SingUpForm onSubmit={handlerSubmit} />
}
