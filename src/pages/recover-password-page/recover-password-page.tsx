import { useNavigate } from 'react-router-dom'

import { RouteDefinitions } from '@/common/consts'
import { requestHandler } from '@/common/utils'
import { Page } from '@/components/ui/page'
import {
  RecoverPasswordForm,
  RecoverPasswordFormProps,
  useRecoverPasswordMutation,
} from '@/features'

export const RecoverPasswordPage = () => {
  const navigate = useNavigate()
  const [recoverPassword] = useRecoverPasswordMutation()
  const onSubmit = async ({ email, html }: RecoverPasswordFormProps) => {
    await requestHandler(async () => {
      await recoverPassword({ email, html }).unwrap()
      navigate(RouteDefinitions.checkEmail)
    })
  }

  return (
    <Page>
      <RecoverPasswordForm onSubmit={onSubmit} />
    </Page>
  )
}
