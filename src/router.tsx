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
import { PageProfile } from '@/pages/PageProfile'
import { SingInPages } from '@/pages/auth/singInPages'
import { SingUpPages } from '@/pages/auth/singUpPages'
import Decks from '@/pages/decks/Decks'
import { Layout } from '@/pages/layout/layout'
import { useGetMeQuery } from '@/src/services/auth/authService'

const publicRoutes: RouteObject[] = [
  {
    element: <SingInPages />,
    path: '/login',
  },
  {
    element: <SingUpPages />,
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
    element: <PageProfile />,

    path: '/profile',
  },
]

const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      {
        children: publicRoutes,
        element: <PublicRoutes />,
      },
    ],
    element: <Layout />,
  },
])

function useAuthenticationCheck() {
  const result = useGetMeQuery()

  return !!result.error
}
function PrivateRoutes() {
  const isAuthenticated = useAuthenticationCheck()

  return !isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
function PublicRoutes() {
  const isAuthenticated = useAuthenticationCheck()

  return isAuthenticated ? <Outlet /> : <Navigate to={'/'} />
}

export const Router = () => {
  return <RouterProvider router={router} />
}
