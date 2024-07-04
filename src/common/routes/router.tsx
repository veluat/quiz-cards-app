import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <div>hello</div>,
    path: '/',
  },
  {
    element: <div>login</div>,
    path: '/login',
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
