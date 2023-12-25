import { useNavigate } from 'react-router-dom'

import { ForgotPass, FormValues } from '@/components/auth/pass-recovery'
import { useForgotPasswordEmailMutation, useGetMeQuery } from '@/services/auth/authService'

export const ForgotPassPage = () => {
  const navigate = useNavigate()
  const [forgotPasswordEmail] = useForgotPasswordEmailMutation()
  const handlerSubmit = async (data: FormValues) => {
    await forgotPasswordEmail(data)
    navigate(`/check-email/${data.email}`)
  }

  return <ForgotPass onSubmit={handlerSubmit} />
}
