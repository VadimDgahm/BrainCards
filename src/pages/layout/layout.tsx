import { Outlet } from 'react-router-dom'

import { Loader } from '@/components/ui/Loader/Loader'
import { ToastComponent } from '@/components/ui/ToastComponent/ToastComponent'
import { Header } from '@/components/ui/header'
import { useGetMeQuery, useLogOutMutation } from '@/services/auth/authService'

import s from './layout.module.scss'

export const Layout = () => {
  const { data, error } = useGetMeQuery()
  const [logout] = useLogOutMutation()

  return (
    <div>
      <Header
        avatar={data?.avatar}
        email={data?.email}
        isLoggedIn={!error}
        logout={logout}
        name={data?.name}
      />
      {false && <Loader />}
      <div className={s.container}>
        <Outlet />
        <ToastComponent />
      </div>
    </div>
  )
}
