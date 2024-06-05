import { FC } from 'react'

import { Icon } from '@/components/ui/icon/icon'
import { Typography } from '@/components/ui/typography'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onChange?: (checked: boolean) => void
}

export const Checkbox: FC<CheckboxProps> = props => {
  const { checked, className, disabled, id, label, onChange } = props

  return (
    <Typography as={'label'} className={clsx(s.label, disabled && s.disabled, className)}>
      <RadixCheckbox.Root
        checked={checked}
        className={s.checkbox}
        disabled={disabled}
        id={id}
        onCheckedChange={onChange}
      >
        <div className={s.frame}></div>
        {checked && (
          <RadixCheckbox.Indicator className={s.indicator} forceMount>
            <Icon height={24} name={'checked'} width={24} />
          </RadixCheckbox.Indicator>
        )}
      </RadixCheckbox.Root>
      {label}
    </Typography>
  )
}
