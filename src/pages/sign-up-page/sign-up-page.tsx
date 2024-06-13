import { Page } from '@/components/ui/page'
import { SignUpForm } from '@/features'
import { SignUpFormProps } from '@/features/auth/ui/sign-up-form/use-sign-up-form'

export const SignUpPage = () => {
  const signUpHandler = (signUpData: SignUpFormProps) => {
    alert(signUpData)
  }

  return (
    <Page>
      <SignUpForm onSubmit={signUpHandler} />
    </Page>
  )
}
