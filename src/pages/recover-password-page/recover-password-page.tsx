import { Page } from '@/components/ui/page'
import { RecoverPasswordForm, RecoverPasswordFormProps } from '@/features'

export const RecoverPasswordPage = () => {
  const signUpHandler = (forgotPasswordData: RecoverPasswordFormProps) => {
    alert(forgotPasswordData)
  }

  return (
    <Page>
      <RecoverPasswordForm onSubmit={signUpHandler} />
    </Page>
  )
}
