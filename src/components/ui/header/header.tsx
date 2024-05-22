import Logo from '@/assets/illustrations/logo'
import { Button } from '@/components/ui/button'

import s from './header.module.scss'

export const Header = () => {
  return (
    <div className={s.root}>
      <div className={s.logo}>
        <Logo />
      </div>
      <div>
        <Button variant={'secondary'}>Sign In</Button>
      </div>
    </div>
  )
}
