import { Page } from '@/components/ui/page'
import { LoginArgs } from '@/features/auth/api/types'
import { SignInForm } from '@/features/auth/ui/sign-in-form'

export const SignInPage = () => {
  const loginHandler = (loginData: LoginArgs) => {
    alert(loginData)
  }

  return (
    <Page>
      <SignInForm onSubmit={loginHandler} />
    </Page>
  )
}
