import { Outlet, useNavigate } from 'react-router-dom'

import { Loader } from '@/components/ui/Loader/Loader'
import { ToastComponent } from '@/components/ui/ToastComponent/ToastComponent'
import { Header } from '@/components/ui/header'
import { useGetMeQuery, useLogOutMutation } from '@/services/auth/authService'

import s from './layout.module.scss'

export const Layout = () => {
  const { data, error } = useGetMeQuery()
  const [logout] = useLogOutMutation()
  const navigate = useNavigate()
  const onLogoutHandler = () => {
    logout()
      .unwrap()
      .then(() => navigate('/login'))
  }

  return (
    <div>
      {data ? (
        <Header
          avatar={data?.avatar}
          email={data?.email}
          isLoggedIn={!error}
          logout={onLogoutHandler}
          name={data?.name}
        />
      ) : (
        <Header isLoggedIn={false} logout={onLogoutHandler} />
      )}
      {false && <Loader />}
      <div className={s.container}>
        <Outlet />
        <ToastComponent />
      </div>
    </div>
  )
}
