import React, { ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import s from './navigate-button.module.scss'

type Props = {
  active: boolean
} & ComponentPropsWithoutRef<'button'>

export const NavigateButton: React.FC<Props> = ({ active, children, className, ...rest }) => {
  const styles = clsx(s.button, active && s.active, className)

  return (
    <button {...rest} className={styles}>
      {children}
    </button>
  )
}
