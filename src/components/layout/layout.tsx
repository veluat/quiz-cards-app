import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { useGetMeQuery, useLogoutMutation } from '@/features'

import s from './layout.module.scss'

import { Header } from '../header'

export const Layout = () => {
  const { data } = useGetMeQuery()

  const [logout] = useLogoutMutation()

  const headerData =
    data && !('success' in data)
      ? {
          avatar: data.avatar,
          email: data.email,
          name: data.name,
        }
      : null

  return (
    <>
      <Header data={headerData} logout={logout} />
      <div className={s.content}>
        <Outlet />
        <ToastContainer
          autoClose={5000}
          closeOnClick
          containerId={'common'}
          draggable
          enableMultiContainer
          hideProgressBar={false}
          newestOnTop={false}
          pauseOnFocusLoss
          pauseOnHover
          position={'bottom-center'}
          rtl={false}
          theme={'dark'}
        />
      </div>
    </>
  )
}
