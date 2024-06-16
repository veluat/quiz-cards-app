import { useState } from 'react'

import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { AvatarUploader } from '@/features/profile/ui/personal-information/avatar-uploader'
import {
  EditProfile,
  EditProfileValues,
} from '@/features/profile/ui/personal-information/edit-profile'
import { ProfileInfo } from '@/features/profile/ui/personal-information/profile-info'

import s from './personal-information.module.scss'

export type ProfileDataType = {
  avatar?: string
  email: string
  name: string
}

type Props = {
  data: ProfileDataType
  update: (data: EditProfileValues) => void
}

export const PersonalInformation = ({ data, update }: Props) => {
  const { avatar, email, name } = data
  const [editMode, setEditMode] = useState(false)
  const onEditProfile = () => {
    setEditMode(true)
  }

  const onSubmit = (data: EditProfileValues) => {
    update(data)
    setEditMode(false)
  }

  return (
    <Card className={s.cardAddition}>
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        Personal Information
      </Typography>
      <AvatarUploader avatar={avatar} editable={!editMode} name={name} />
      {editMode ? (
        <EditProfile initialValues={{ name }} onSubmit={onSubmit} />
      ) : (
        <ProfileInfo email={email} name={name} onEditProfile={onEditProfile} />
      )}
    </Card>
  )
}
