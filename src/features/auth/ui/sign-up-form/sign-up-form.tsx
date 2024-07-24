import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import { RouteDefinitions } from '@/common/consts'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { SignUpFormProps, useSignUpForm } from '@/features'
import { DevTool } from '@hookform/devtools'

import s from './sign-up-form.module.scss'

import { FormControlTextField } from '../../../../components/form-control/form-control-text-field'

type Props = {
  className?: string
  onSubmit: (data: SignUpFormProps) => void
} & PropsWithChildren

export const SignUpForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useSignUpForm()

  return (
    <Card className={s.cardAddition}>
      <Typography as={'h2'} variant={'h1'}>
        Sign Up
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <FormControlTextField
          className={s.email}
          control={control}
          label={'Email'}
          name={'email'}
        />
        <FormControlTextField
          className={s.password}
          control={control}
          label={'Password'}
          name={'password'}
          placeholder={'Password'}
          type={'password'}
        />
        <FormControlTextField
          className={s.passwordConfirm}
          control={control}
          label={'Confirm Password'}
          name={'confirmPassword'}
          placeholder={'Confirm Password'}
          type={'password'}
        />
        <Button className={s.signUp} fullWidth type={'submit'}>
          Sign Up
        </Button>
      </form>
      <Typography className={s.promptText} variant={'body2'}>
        Already have an account?
      </Typography>
      <Button as={Link} className={s.signIn} to={RouteDefinitions.signIn} variant={'link'}>
        Sign In
      </Button>
    </Card>
  )
}
