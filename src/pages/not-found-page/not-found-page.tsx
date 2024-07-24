import { Link } from 'react-router-dom'

import PageNotFound from '@/assets/images/page-not-found'
import { RouteDefinitions } from '@/common/consts'
import { Button } from '@/components/ui/button'
import { Page } from '@/components/ui/page'
import { Typography } from '@/components/ui/typography'

import s from './page-not-found.module.scss'

export const NotFoundPage = () => {
  return (
    <Page className={s.container}>
      <PageNotFound />
      <Typography>Sorry! Page not found!</Typography>
      <Button as={Link} to={RouteDefinitions.decks}>
        <Typography as={'span'} variant={'subtitle2'}>
          Back to home page
        </Typography>
      </Button>
    </Page>
  )
}
