import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { RouteDefinitions } from '@/common/consts'
import { requestHandler } from '@/common/utils'
import { Page } from '@/components/ui/page'
import { LoginArgs, useGetMeQuery, useLoginMutation } from '@/features'
import { SignInForm } from '@/features/auth/ui/sign-in-form'

export const SignInPage = () => {
  const [login] = useLoginMutation()
  const { data: me } = useGetMeQuery()

  const loginHandler = async (data: LoginArgs) => {
    await requestHandler(async () => {
      await login(data).unwrap()
      toast.success('You are successfully authorized', { containerId: 'common' })
    })
  }

  if (me && !('success' in me)) {
    return <Navigate to={RouteDefinitions.decks} />
  }

  return (
    <Page>
      <SignInForm onSubmit={loginHandler} />
    </Page>
  )
}
