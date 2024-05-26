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
  onChange: (checked: boolean) => void
}

export const Checkbox: FC<CheckboxProps> = props => {
  const { checked, className, disabled, id, label, onChange } = props

  const classes = {
    checkboxWrapper: clsx(s.checkboxWrapper, disabled && s.disabled),
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled, className),
    root: clsx(s.root),
  }

  return (
    <Typography as={'label'} className={classes.label}>
      <div className={classes.checkboxWrapper}>
        <RadixCheckbox.Root
          checked={checked}
          className={classes.root}
          disabled={disabled}
          id={id}
          onCheckedChange={onChange}
        >
          {checked && (
            <RadixCheckbox.Indicator className={classes.indicator} forceMount>
              <Icon height={24} name={'checked'} width={24} />
            </RadixCheckbox.Indicator>
          )}
        </RadixCheckbox.Root>
      </div>
      {label}
    </Typography>
  )
}
