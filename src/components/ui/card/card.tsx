import { ComponentPropsWithoutRef, PropsWithChildren, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

export type CardProps = ComponentPropsWithoutRef<'div'> & PropsWithChildren

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...restProps }, ref) => {
    const styles = clsx(s.root, className)

    return (
      <div className={styles} ref={ref} {...restProps}>
        {children}
      </div>
    )
  }
)
