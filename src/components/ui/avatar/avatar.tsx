import { ComponentPropsWithoutRef, FC } from 'react'

import * as AvatarRadix from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

type AvatarProps = {
  image?: null | string
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
  const styles = {
    fallback: clsx(s.fallback, size === 'large' && s.font),
    image: s.image,
    root: clsx(s.root, s[size], className),
  }

  const initials = userName
    .split(' ')
    .map(word => word[0].toUpperCase())
    .join(' ')

  return (
    <AvatarRadix.Root className={styles.root} {...rest}>
      <AvatarRadix.Image alt={`${userName} Avatar`} className={styles.image} src={image} />
      <AvatarRadix.Fallback className={styles.fallback}>{initials}</AvatarRadix.Fallback>
    </AvatarRadix.Root>
  )
}
