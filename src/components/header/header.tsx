import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import Logo from '@/assets/images/logo-image'
import { RouteDefinitions } from '@/common/consts'
import { ProfileInfo, ProfileInfoProps } from '@/components/header/profile-info'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropDown, DropDownItem, DropDownItemWithIcon } from '@/components/ui/dropdown'
import { Icon } from '@/components/ui/icon/icon'
import { Typography } from '@/components/ui/typography'

import s from './header.module.scss'

type Props = {
  data: ProfileInfoProps | null
  logout: () => void
}
export const Header: React.FC<Props> = ({ data, logout }) => {
  const navigate = useNavigate()
  const handleClickLogo = () => {
    if (!data) {
      navigate(RouteDefinitions.signIn)
      toast.error('Please sign in to continue')
    } else {
      navigate(RouteDefinitions.base)
    }
  }

  const handleClickSignIn = () => {
    navigate(RouteDefinitions.signIn)
  }

  const handleClickLogout = () => {
    logout()
    navigate(RouteDefinitions.signIn)
  }

  const toProfile = () => {
    navigate(RouteDefinitions.profile)
  }

  return (
    <div className={s.root}>
      <div className={s.logo} onClick={handleClickLogo}>
        <Logo />
      </div>
      {data ? (
        <div className={s.user}>
          <Typography className={s.name} variant={'subtitle1'}>
            {data.name || data.email}
          </Typography>
          <DropDown
            trigger={
              <button className={s.dropdownButton} type={'button'}>
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
              onSelect={handleClickLogout}
              text={'Sign out'}
            />
          </DropDown>
        </div>
      ) : (
        <div>
          <Button onClick={handleClickSignIn} variant={'secondary'}>
            Sign In
          </Button>
        </div>
      )}
    </div>
  )
}
