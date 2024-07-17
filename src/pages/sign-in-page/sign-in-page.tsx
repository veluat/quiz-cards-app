import { Page } from '@/components/ui/page'
import { LoginArgs, useLoginMutation } from '@/features'
import { SignInForm } from '@/features/auth/ui/sign-in-form'

export const SignInPage = () => {
  const [login] = useLoginMutation()
  const loginHandler = (loginData: LoginArgs) => {
    login(loginData)
  }

  return (
    <Page>
      <SignInForm onSubmit={loginHandler} />
    </Page>
  )
}
