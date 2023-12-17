import { useParams } from 'react-router-dom'

import { CheckEmail } from '@/components/auth/check-email'

export const CheckEmailPage = () => {
  const params = useParams()

  return <CheckEmail email={params.email || 'user@mail.ru'} />
}
