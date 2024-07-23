import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import { RouteDefinitions } from '@/common/consts'
import { FormControlTextField } from '@/components/form-control'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { RecoverPasswordFormProps, useRecoverPasswordForm } from '@/features'
import { DevTool } from '@hookform/devtools'

import s from './recover-password-form.module.scss'

type Props = {
  className?: string
  onSubmit: (data: RecoverPasswordFormProps) => void
} & PropsWithChildren

export const RecoverPasswordForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useRecoverPasswordForm()

  return (
    <Card className={s.cardAddition}>
      <Typography as={'h2'} variant={'h1'}>
        Forgot your password?
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <FormControlTextField
          className={s.email}
          control={control}
          label={'Email'}
          name={'email'}
        />
        <Typography className={s.notification} variant={'body2'}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button className={s.signUp} fullWidth type={'submit'}>
          Send Instructions
        </Button>
      </form>
      <Typography className={s.promptText} variant={'body2'}>
        Did you remember your password?
      </Typography>
      <Button as={Link} className={s.loggingIn} to={RouteDefinitions.signIn} variant={'link'}>
        Try logging in
      </Button>
    </Card>
  )
}
