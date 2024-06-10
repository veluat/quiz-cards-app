import { Link } from 'react-router-dom'

import { SignInForm } from '@/components/auth/sign-in-form'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './sign-in-page.module.scss'

export const SignInPage = () => {
  return (
    <div className={s.root}>
      <Card>
        <div className={s.content}>
          <Typography as={'h2'} variant={'h1'}>
            Sign In
          </Typography>
          <SignInForm className={s.form} onSubmit={() => {}}>
            <div className={s.linkContainer}>
              <Typography as={Link} to={'/recover-password'} variant={'body2'}>
                Forgot Password?
              </Typography>
            </div>
          </SignInForm>
          <div className={s.register}>
            <Typography variant={'body2'}>Don&apos;t have an account?</Typography>
            <Button as={Link} className={s.signUp} to={'/sign-up-page'} variant={'link'}>
              Sign Up
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
