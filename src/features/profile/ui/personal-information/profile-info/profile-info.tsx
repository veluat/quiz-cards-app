import { ProfileInfoProps } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon'
import { Typography } from '@/components/ui/typography'

import s from './profile-info.module.scss'

type Props = {
  onLogout: () => void
  setIsEditMode: (value: boolean) => void
  user: ProfileInfoProps
}

export const ProfileInfo = ({ onLogout, setIsEditMode, user }: Props) => {
  return (
    <div className={s.root}>
      <div className={s.userNameWrapper}>
        <Typography as={'h2'} className={s.user} variant={'h2'}>
          {user.name}
        </Typography>
        <button className={s.editNickname} onClick={() => setIsEditMode(true)} type={'button'}>
          <Icon className={s.icon} height={16} name={'edit'} width={16} />
        </button>
      </div>
      <Typography className={s.email} variant={'body2'}>
        {user.email}
      </Typography>
      <Button
        as={'a'}
        className={s.button}
        icon={'logout'}
        onClick={onLogout}
        variant={'secondary'}
      >
        Logout
      </Button>
    </div>
  )
}
