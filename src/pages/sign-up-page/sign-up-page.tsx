import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { RouteDefinitions } from '@/common/consts'
import { requestHandler } from '@/common/utils'
import { Page } from '@/components/ui/page'
import { SignUpForm, useGetMeQuery, useLoginMutation, useSignUpMutation } from '@/features'
import { SignUpFormProps } from '@/features/auth/ui/sign-up-form/use-sign-up-form'

export const SignUpPage = () => {
  const [signUp] = useSignUpMutation()
  const [login] = useLoginMutation()
  const { data: me } = useGetMeQuery()

  const onSubmit = async ({ confirmPassword, ...rest }: SignUpFormProps) => {
    await requestHandler(async () => {
      await signUp(rest).unwrap()
      await login(rest).unwrap()
      toast.success('You are successfully signed up', { containerId: 'common' })
    })
  }

  if (me && !('success' in me)) {
    return <Navigate to={RouteDefinitions.decks} />
  }

  return (
    <Page>
      <SignUpForm onSubmit={onSubmit} />
    </Page>
  )
}
