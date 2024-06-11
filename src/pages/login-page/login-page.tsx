import { Page } from '@/components/ui/page'
import { LoginArgs } from '@/features/auth/api/types'

import { LoginForm } from '../../features/auth/ui/login-form'

export const LoginPage = () => {
  const loginHandler = (loginData: LoginArgs) => {
    alert(loginData)
  }

  return (
    <Page>
      <LoginForm onSubmit={loginHandler} />
    </Page>
  )
}
