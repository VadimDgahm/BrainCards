import { Outlet } from 'react-router-dom'

import { Header } from '@/components/ui/header'
import { useGetMeQuery } from '@/src/services/auth/authService'

export const Layout = () => {
  const { data } = useGetMeQuery()

  return (
    <div>
      <Header isLoggedIn={!!data} />
      <Outlet />
    </div>
  )
}
