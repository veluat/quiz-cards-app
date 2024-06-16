import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon'
import { Typography } from '@/components/ui/typography'

import s from './profile-info.module.scss'

type Props = {
  email: string
  name: string
  onEditProfile: () => void
}

export const ProfileInfo = ({ email, name, onEditProfile }: Props) => {
  return (
    <div className={s.root}>
      <div className={s.userNameWrapper}>
        <Typography as={'h2'} className={s.user} variant={'h2'}>
          {name}
        </Typography>
        <button className={s.editNickname} onClick={onEditProfile}>
          <Icon className={s.icon} height={16} name={'edit'} width={16} />
        </button>
      </div>
      <Typography className={s.email} variant={'body2'}>
        {email}
      </Typography>
      <Button
        as={'a'}
        className={s.button}
        icon={'logout'}
        onClick={() => {}}
        variant={'secondary'}
      >
        Logout
      </Button>
    </div>
  )
}
