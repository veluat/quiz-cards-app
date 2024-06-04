import React from 'react'

import { Icon } from '@/components/ui/icon/icon'
import { Typography } from '@/components/ui/typography'
import * as Dialog from '@radix-ui/react-dialog'

import s from './modal-header.module.scss'

export const ModalHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={s.modalHeader}>
      <Typography as={'h3'} variant={'h3'}>
        {title}
      </Typography>
      <Dialog.Close asChild>
        <Icon fill={'white'} height={24} name={'cross'} width={24} />
      </Dialog.Close>
    </div>
  )
}
