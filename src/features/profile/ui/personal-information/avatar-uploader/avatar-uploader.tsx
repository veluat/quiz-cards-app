import { ChangeEvent, FC, memo, useEffect, useState } from 'react'

import { validateFile } from '@/common/utils'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Uploader } from '@/components/ui/uploader'

import s from './avatar-uploader.module.scss'

type PropsType = {
  avatar?: string
  editable?: boolean
  updateAvatar?: (e: ChangeEvent<HTMLInputElement>) => void
  userName: string
}

export const AvatarUploader: FC<PropsType> = memo(props => {
  const { avatar, editable = true, updateAvatar, userName } = props
  const [image, setImage] = useState(avatar)

  useEffect(() => {
    setImage(avatar)
  }, [avatar])

  return (
    <div className={s.avatarContainer}>
      <Avatar className={s.avatar} image={image} size={'large'} userName={userName} />
      {editable && (
        <Uploader
          accept={'image/*'}
          as={Button}
          asProps={{
            variant: 'secondary',
          }}
          className={s.editImage}
          update={updateAvatar}
          validate={validateImage}
        />
      )}
    </div>
  )
})

const validateImage = (file: File) => {
  const maxSizeInBytes = 5 * 1024 * 1024
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']

  return validateFile(file, maxSizeInBytes, allowedTypes)
}
