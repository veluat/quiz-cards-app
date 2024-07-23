import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { RouteDefinitions } from '@/common/consts'
import { requestHandler } from '@/common/utils'
import { Page } from '@/components/ui/page'
import {
  CreateNewPasswordForm,
  CreateNewPasswordFormProps,
  useResetPasswordMutation,
} from '@/features'

export const CreateNewPasswordPage = () => {
  const [resetPassword] = useResetPasswordMutation()
  const navigate = useNavigate()
  const { token } = useParams<{ token: string }>()

  const onSubmit = async ({ password }: CreateNewPasswordFormProps) => {
    if (token) {
      await requestHandler(async () => {
        await resetPassword({ password, token }).unwrap()
        navigate(RouteDefinitions.signIn)
        toast.success('The password has been changed', { containerId: 'common' })
      })
    }
  }

  return (
    <Page>
      <CreateNewPasswordForm onSubmit={onSubmit} />
    </Page>
  )
}
