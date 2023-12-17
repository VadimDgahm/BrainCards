import { Outlet } from 'react-router-dom'

import { Loader } from '@/components/ui/Loader/Loader'
import { ToastComponent } from '@/components/ui/ToastComponent/ToastComponent'
import { Header } from '@/components/ui/header'

import s from './layout.module.scss'

export const Layout = () => {
  return (
    <div>
      <Header />
      {false && <Loader />}
      <div className={s.container}>
        <Outlet />
        <ToastComponent />
      </div>
    </div>
  )
}
