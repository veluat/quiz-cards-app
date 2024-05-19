import { ComponentPropsWithoutRef, FC } from 'react'

import * as AvatarRadix from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

type AvatarProps = {
  image?: string
  size?: 'large' | 'small'
  userName: string
} & ComponentPropsWithoutRef<typeof AvatarRadix.Root>

export const Avatar: FC<AvatarProps> = ({
  className,
  image,
  size = 'small',
  userName,
  ...rest
}) => {
  const classNames = {
    fallback: clsx(s.fallback, size === 'large' && s.font),
    image: s.image,
    root: clsx(s.root, s[size], className),
  }

  const initials = userName
    .split(' ')
    .map(word => word[0].toUpperCase())
    .join(' ')

  return (
    <AvatarRadix.Root className={classNames.root} {...rest}>
      <AvatarRadix.Image alt={`${userName} Avatar`} className={classNames.image} src={image} />
      <AvatarRadix.Fallback className={classNames.fallback}>{initials}</AvatarRadix.Fallback>
    </AvatarRadix.Root>
  )
}
