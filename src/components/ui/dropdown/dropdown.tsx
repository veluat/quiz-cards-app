import { FC, ReactNode, useState } from 'react'

import { Icon } from '@/components/ui/icon/icon'
import { Typography } from '@/components/ui/typography'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import s from './dropdown.module.scss'

type DropDownProps = {
  align?: 'center' | 'end' | 'start'
  children: ReactNode
  className?: string
  trigger?: ReactNode
} & DropdownMenu.DropdownMenuProps

export const DropDown: FC<DropDownProps> = ({ align = 'end', children, className, trigger }) => {
  const [open, setOpen] = useState(false)
  const styles = {
    btn: s.btn,
    content: clsx(s.content, className),
    trigger: s.trigger,
  }

  return (
    <DropdownMenu.Root modal onOpenChange={setOpen} open={open}>
      <DropdownMenu.Trigger asChild className={styles.trigger}>
        {trigger ?? (
          <button className={styles.btn}>
            <Icon name={'more'} />
          </button>
        )}
      </DropdownMenu.Trigger>
      <AnimatePresence>
        {open && (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content
              align={align}
              asChild
              className={styles.content}
              forceMount
              onClick={e => e.stopPropagation()}
            >
              <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }} initial={{ opacity: 0 }}>
                {children}
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        )}
      </AnimatePresence>
    </DropdownMenu.Root>
  )
}

type DropDownItemProps = {
  children: ReactNode
  className?: string
  onSelect?: (e: Event) => void
}

export const DropDownItem: FC<DropDownItemProps> = ({ children, className, onSelect }) => {
  const itemClass = clsx(s.profileBlock, className)

  return (
    <DropdownMenu.Item className={itemClass} onClick={e => e.stopPropagation()} onSelect={onSelect}>
      <motion.div className={s.profileWrapper} onClick={e => e.stopPropagation()}>
        {children}
      </motion.div>
    </DropdownMenu.Item>
  )
}

type DropDownItemWithIconProps = {
  icon: ReactNode
  text: string
} & Omit<DropDownItemProps, 'children'>

export const DropDownItemWithIcon: FC<DropDownItemWithIconProps> = props => {
  const { className, icon, onSelect, text } = props

  const itemClass = clsx(s.item, className)

  return (
    <DropdownMenu.Item className={itemClass} onSelect={onSelect}>
      <div className={s.icon}>{icon}</div>
      <Typography variant={'caption'}>{text}</Typography>
    </DropdownMenu.Item>
  )
}
