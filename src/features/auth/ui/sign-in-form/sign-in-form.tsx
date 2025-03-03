import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import { FormControlCheckbox, FormControlTextField } from '@/components/form-control'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { SignInFormProps, useSignInForm } from '@/features'
import { DevTool } from '@hookform/devtools'

import s from './sign-in-form.module.scss'

type Props = {
  className?: string
  onSubmit: (data: SignInFormProps) => void
} & PropsWithChildren

export const SignInForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useSignInForm()

  return (
    <Card>
      <Typography as={'h2'} variant={'h1'}>
        Sign In
      </Typography>
      <form className={s.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <FormControlTextField
          className={s.email}
          control={control}
          label={'Email'}
          name={'email'}
          placeholder={'Email'}
          type={'email'}
        />
        <FormControlTextField
          className={s.password}
          control={control}
          label={'Password'}
          name={'password'}
          placeholder={'Password'}
          type={'password'}
        />
        <FormControlCheckbox
          className={s.checkbox}
          control={control}
          label={'Remember Me'}
          name={'rememberMe'}
        />
        <Typography
          as={Link}
          className={s.recoverPasswordLink}
          to={'/recover-password'}
          variant={'body2'}
        >
          Forgot Password?
        </Typography>
        <Button fullWidth type={'submit'}>
          Sign In
        </Button>
      </form>
      <Typography className={s.promptText} variant={'body2'}>
        {`Don't have an account?`}
      </Typography>
      <Button as={Link} className={s.signUp} to={'/sign-up'} variant={'link'}>
        Sign Up
      </Button>
    </Card>
  )
}
