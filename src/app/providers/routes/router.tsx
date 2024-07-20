import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { privateRoutes, publicRoutes } from '@/app/providers/routes/routes'
import { RouteDefinitions } from '@/common/consts'
import { Layout } from '@/components/layout'
import { useGetMeQuery } from '@/features'
import { InitLoader } from '@/features/loading'

function PrivateRoutes() {
  const { isError, isLoading } = useGetMeQuery()
  const isAuthenticated = !isError

  if (isLoading) {
    return <InitLoader />
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={RouteDefinitions.signIn} />
}

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
    path: RouteDefinitions.base,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
