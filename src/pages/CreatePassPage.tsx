import { useNavigate, useParams } from 'react-router-dom'

import { CreatePass } from '@/components/auth/create-pass'
import { useResetPasswordMutation } from '@/src/services/auth/authService'

export const CreatePassPage = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [changePass] = useResetPasswordMutation()
  const onChangeHandler = async (data: any) => {
    await changePass({ ...data, ...params })
    navigate('/login')
  }

  return <CreatePass onSubmit={onChangeHandler} />
}
