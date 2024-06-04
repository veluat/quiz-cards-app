import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { Icon } from '@/components/ui/icon/icon'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children?: ReactNode
  fullWidth?: boolean
  height?: number
  icon?: string
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
  width?: number
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth,
    height = 16,
    icon,
    variant = 'primary',
    width = 16,
    ...rest
  } = props
  const classNames = clsx(s[variant], fullWidth && s.fullWidth, className)

  return (
    <Component className={classNames} {...rest}>
      {icon && <Icon height={height} name={icon} width={width} />}
      <Typography as={'span'} variant={'subtitle2'}>
        {children}
      </Typography>
    </Component>
  )
}
