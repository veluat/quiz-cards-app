import { Link, useParams } from 'react-router-dom'

import { CheckEmailImage } from '@/assets/images/check-email-image'
import { RouteDefinitions } from '@/common/consts'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Page } from '@/components/ui/page'
import { Typography } from '@/components/ui/typography'

import s from './check-email.module.scss'

export const CheckEmailPage = () => {
  const { email } = useParams<{ email: string }>()

  return (
    <Page>
      <Card>
        <section className={s.content}>
          <Typography as={'h2'} className={s.title} variant={'h1'}>
            Check Email
          </Typography>
          <div className={s.imageContainer}>
            <CheckEmailImage />
          </div>
          <Typography className={s.notification} variant={'body2'}>
            We’ve sent an Email with instructions to {email}
          </Typography>
          <Button as={Link} fullWidth to={RouteDefinitions.signIn}>
            Back to Sign in
          </Button>
        </section>
      </Card>
    </Page>
  )
}
