import { FC, PropsWithChildren } from 'react'

import { Card } from '@/components/ui/card'
import { ModalBottom } from '@/components/ui/modal/modal-bottom'
import { ModalHeader } from '@/components/ui/modal/modal-header'
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
            <ModalHeader title={title} />
            <Card className={s.card}>{children}</Card>
            <ModalBottom type={'two'} />
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
