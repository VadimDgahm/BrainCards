import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { CheckEmail } from '@/components/auth/check-email'
import { CreatePass } from '@/components/auth/create-pass'
import { ForgotPass } from '@/components/auth/pass-recovery'
import { LoginForm } from '@/components/auth/sign-in'
import { SingUpForm } from '@/components/auth/sign-up'
import { Profile } from '@/components/ui/profile'
import { Deck } from '@/pages/deck'
import Decks from '@/pages/decks'

const publicRoutes: RouteObject[] = [
  {
    element: <LoginForm onSubmit={() => {}} />,
    path: '/login',
  },
  {
    element: <SingUpForm onSubmit={() => {}} />,
    path: '/sign-up',
  },
  {
    element: <CreatePass onSubmit={() => {}} />,
    path: '/create-password',
  },
  {
    element: <ForgotPass onSubmit={() => {}} />,
    path: '/forgot-password',
  },
  {
    element: <CheckEmail email={''} />,
    path: '/check-email',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: (
      <div>
        <Decks />
      </div>
    ),
    path: '/',
  },
  {
    element: <Profile email={''} name={''} onSubmit={() => {}} />,
    path: '/profile',
  },
]

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

export const Router = () => {
  return <RouterProvider router={router} />
}
