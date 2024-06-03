import { FC, PropsWithChildren } from 'react'

import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon/icon'
import { Typography } from '@/components/ui/typography'
import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

type Props = {
  open: boolean
  setOpen: (value: boolean) => void
  title: string
} & PropsWithChildren

export const Modal: FC<Props> = ({ children, open, setOpen, title }) => {
  return (
    <Dialog.Root onOpenChange={setOpen} open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} forceMount />
        <div className={s.root}>
          <Dialog.Content className={s.window} forceMount>
            <Card className={s.card}>
              <div className={s.header}>
                <Typography as={'h2'} variant={'h2'}>
                  {title}
                </Typography>
                <Dialog.Close asChild>
                  <Icon height={24} name={'cross'} width={24} />
                </Dialog.Close>
              </div>
              <div className={s.content}>{children}</div>
            </Card>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
