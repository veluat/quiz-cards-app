import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { PrivateRoutes } from '@/common/routes/PrivateRoutes'
import { SignInPage } from '@/pages'
import { DecksPage } from '@/pages/decks-page'

const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: '/login',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <DecksPage />,
    path: '/',
  },
]

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

export function Router() {
  return <RouterProvider router={router} />
}
