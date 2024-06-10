import { PropsWithChildren } from 'react'

import { FormCheckbox } from '@/components/ui/form-control/form-checkbox/form-checkbox'
import { FormTextField } from '@/components/ui/form-control/form-text-field'
import { DevTool } from '@hookform/devtools'
import { clsx } from 'clsx'

import s from './login-form.module.scss'

import { Button } from '../../ui/button'
import { LoginFormProps, useLoginForm } from './use-login-form'

type Props = {
  className?: string
  onSubmit: (data: LoginFormProps) => void
} & PropsWithChildren

export const LoginForm = ({ children, className, onSubmit }: Props) => {
  const classes = clsx(s.form, className)

  const { control, handleSubmit } = useLoginForm()

  return (
    <form className={classes} onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <FormTextField className={s.email} control={control} label={'Email'} name={'email'} />
      <FormTextField
        className={s.password}
        control={control}
        label={'Password'}
        name={'password'}
        type={'password'}
      />
      <FormCheckbox
        className={s.checkbox}
        control={control}
        label={'Remember Me'}
        name={'rememberMe'}
      />
      {children}
      <Button className={s.button} fullWidth type={'submit'}>
        Sign In
      </Button>
    </form>
  )
}
