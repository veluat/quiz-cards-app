import React from 'react'

import { Button } from '@/components/ui/button'

import s from './modal-bottom.module.scss'

export const ModalBottom: React.FC<{ type?: 'default' | 'two' }> = ({ type = 'default' }) => {
  return (
    <div className={s.modalBottom}>
      {type === 'two' && <Button variant={'secondary'}>Button Secondary</Button>}
      <Button>Button Primary</Button>
    </div>
  )
}
