import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { PrivateRoutes } from '@/common/routes/PrivateRoutes'
import { DecksPage } from '@/pages/decks-page'

const publicRoutes: RouteObject[] = [
  {
    element: <div>login</div>,
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
