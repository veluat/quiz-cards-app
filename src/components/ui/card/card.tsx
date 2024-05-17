import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

export type CardProps = ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...rest }) => {
  const classNames = clsx(s.root, className)

  return <div className={classNames} {...rest}></div>
})
