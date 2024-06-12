import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FormTextField } from '@/components/ui/form-control/form-text-field'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'

import s from './forgot-password-form.module.scss'

import { ForgotPasswordFormProps, useForgotPasswordForm } from './use-forgot-password-form'
type Props = {
  className?: string
  onSubmit: (data: ForgotPasswordFormProps) => void
} & PropsWithChildren

export const ForgotPasswordForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForgotPasswordForm()

  return (
    <Card>
      <Typography as={'h2'} variant={'h1'}>
        Forgot your password?
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <FormTextField className={s.email} control={control} label={'Email'} name={'email'} />
        <Typography className={s.information} variant={'body2'}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button className={s.signUp} fullWidth type={'submit'}>
          Send Instructions
        </Button>
      </form>
      <Typography className={s.infoText} variant={'body2'}>
        Did you remember your password?
      </Typography>
      <Button as={Link} className={s.loggingIn} to={'/sign-up-page'} variant={'link'}>
        Try logging in
      </Button>
    </Card>
  )
}
