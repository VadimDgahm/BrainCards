import { Outlet } from 'react-router-dom'

import { Loader } from '@/components/ui/Loader/Loader'
import { ToastComponent } from '@/components/ui/ToastComponent/ToastComponent'
import { Header, ProfileInfoType } from '@/components/ui/header'
import { useGetMeQuery } from '@/src/services/auth/authService'

import s from './layout.module.scss'

export const Layout = () => {
  const { data } = useGetMeQuery()

  let profileInfo: ProfileInfoType = null

  if (data) {
    profileInfo = {
      avatar: data.avatar,
      email: data.email,
      name: data.name,
    }
  }

  return (
    <div>
      <Header isLoggedIn={!!data} profileInfo={profileInfo} />
      {false && <Loader />}
      <div className={s.container}>
        <Outlet />
        <ToastComponent />
      </div>
    </div>
  )
}
