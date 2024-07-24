import { useState } from 'react'
import { toast } from 'react-toastify'

import { requestHandler } from '@/common/utils'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { useProfile } from '@/features/profile/model'
import { AvatarUploader } from '@/features/profile/ui/personal-information/avatar-uploader'
import {
  EditProfile,
  EditProfileValues,
} from '@/features/profile/ui/personal-information/edit-profile'
import { ProfileInfo } from '@/features/profile/ui/personal-information/profile-info'

import s from './personal-information.module.scss'

export const PersonalInformation = () => {
  const { logout, onUpdate, updateAvatar, user } = useProfile()

  const [isEditMode, setIsEditMode] = useState(false)

  const onSubmit = async (data: EditProfileValues) => {
    await requestHandler(async () => {
      await onUpdate(data)
      setIsEditMode(false)
      toast.success('Your name successfully changed', { containerId: 'common' })
    })
  }

  return (
    <Card className={s.cardAddition}>
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        Personal Information
      </Typography>
      <AvatarUploader
        avatar={user.avatar}
        editable={!isEditMode}
        updateAvatar={updateAvatar}
        userName={user.name}
      />
      {isEditMode ? (
        <EditProfile initialValues={{ name: user.name }} onSubmit={onSubmit} />
      ) : (
        <ProfileInfo onLogout={logout} setIsEditMode={setIsEditMode} user={user} />
      )}
    </Card>
  )
}
