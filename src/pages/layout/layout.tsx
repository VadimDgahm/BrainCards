import { Outlet } from 'react-router-dom'

import { ToastComponent } from '@/components/ui/ToastComponent/ToastComponent'
import { Header } from '@/components/ui/header'
import { useGetMeQuery } from '@/src/services/auth/authService'

export const Layout = () => {
  const { data } = useGetMeQuery()

  return (
    <div>
      <Header isLoggedIn={!!data} />
      <Outlet />
      <ToastComponent />
    </div>
  )
}
