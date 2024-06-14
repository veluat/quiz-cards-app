import { Link } from 'react-router-dom'

import { CheckEmailImage } from '@/assets/images/check-email-image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './check-email.module.scss'

type CheckEmailProps = {
  email: string
}

export const CheckEmail = ({ email = 'example@mail.com' }: CheckEmailProps) => {
  return (
    <Card className={s.cardAddition}>
      <Typography as={'h2'} variant={'h1'}>
        Check Email
      </Typography>
      <CheckEmailImage className={s.checkEmailImage} />
      <Typography className={s.notification} variant={'body2'}>
        {`We’ve sent an Email with instructions to ${email}`}
      </Typography>
      <Button as={Link} fullWidth to={'/sign-in'}>
        Back to Sign In
      </Button>
    </Card>
  )
}
