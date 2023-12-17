import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { CheckEmailPage } from '@/pages/CheckEmailPage'
import { CreatePassPage } from '@/pages/CreatePassPage'
import { ForgotPassPage } from '@/pages/ForgotPassPage'
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
    element: <CreatePassPage />,
    path: '/create-password/:token',
  },
  {
    element: <ForgotPassPage />,
    path: '/forgot-password',
  },
  {
    element: <CheckEmailPage />,
    path: '/check-email/:email',
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
      ...publicRoutes,
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
// function PublicRoutes() {
//   const isAuthenticated = useAuthenticationCheck()
//
//   return isAuthenticated ? <Outlet /> :
// }

export const Router = () => {
  return <RouterProvider router={router} />
}
