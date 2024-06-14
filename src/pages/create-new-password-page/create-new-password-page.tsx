import { Page } from '@/components/ui/page'
import { CreateNewPasswordForm, CreateNewPasswordFormProps } from '@/features'

export const CreateNewPasswordPage = () => {
  const createPasswordHandler = (createPasswordData: CreateNewPasswordFormProps) => {
    alert(createPasswordData)
  }

  return (
    <Page>
      <CreateNewPasswordForm onSubmit={createPasswordHandler} />
    </Page>
  )
}
