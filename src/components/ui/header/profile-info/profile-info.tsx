import { ElementRef, forwardRef } from 'react'

import { Avatar } from '@/components/ui/avatar'
import { Typography } from '@/components/ui/typography'
import { ProfileResponse } from '@/features/auth/api/types'

import s from './profile-info.module.scss'

export type ProfileInfoProps = Pick<ProfileResponse, 'avatar' | 'email' | 'name'>

export const ProfileInfo = forwardRef<ElementRef<'div'>, ProfileInfoProps>(
  ({ avatar, email, name }, ref) => {
    return (
      <div className={s.content} ref={ref}>
        <Avatar className={s.avatar} image={avatar} userName={name} />
        <div className={s.fonts}>
          <Typography variant={'subtitle2'}>{name}</Typography>
          <Typography className={s.email} variant={'caption'}>
            {email}
          </Typography>
        </div>
      </div>
    )
  }
)
