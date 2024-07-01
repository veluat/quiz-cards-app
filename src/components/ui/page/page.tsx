import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './page.module.scss'

export const Page = forwardRef<ElementRef<'div'>, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...restProps }, ref) => {
    const styles = clsx(s.root, className)

    return <div className={styles} ref={ref} {...restProps} />
  }
)
