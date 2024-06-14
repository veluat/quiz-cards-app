import React from 'react'

import Logo from '@/assets/images/logo-image'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropDown, DropDownItem, DropDownItemWithIcon } from '@/components/ui/dropdown'
import { ProfileInfo, ProfileInfoProps } from '@/components/ui/header/profile-info'
import { Icon } from '@/components/ui/icon/icon'
import { Typography } from '@/components/ui/typography'

import s from './header.module.scss'

type Props = {
  data: ProfileInfoProps | null
  logout: () => void
}
export const Header: React.FC<Props> = ({ data, logout }) => {
  const toProfile = () => {}

  return (
    <div className={s.root}>
      <div className={s.logo}>
        <Logo />
      </div>
      {data ? (
        <div className={s.user}>
          <Typography className={s.name} variant={'subtitle1'}>
            {data.name || data.email}
          </Typography>
          <DropDown
            trigger={
              <button className={s.dropdownButton}>
                <Avatar image={data.avatar} userName={data.name || data.email} />
              </button>
            }
          >
            <DropDownItem>
              <ProfileInfo {...data} />
            </DropDownItem>
            <DropDownItemWithIcon
              icon={<Icon name={'user'} />}
              onSelect={toProfile}
              text={'Profile'}
            />
            <DropDownItemWithIcon
              icon={<Icon name={'logout'} />}
              onSelect={logout}
              text={'Sign out'}
            />
          </DropDown>
        </div>
      ) : (
        <div>
          <Button variant={'secondary'}>Sign In</Button>
        </div>
      )}
    </div>
  )
}
