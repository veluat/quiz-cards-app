import { ElementRef, ReactNode, forwardRef } from 'react'

import { Icon } from '@/components/ui/icon/icon'
import * as Label from '@radix-ui/react-label'
import * as RadixSelect from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

import { Typography } from '../typography'

export type OptionType = {
  label: string
  value: string
}
export type SelectPropsType = {
  className?: string
  defaultValue?: any
  disabled?: boolean
  label?: string
  onValueChange?: (value: string) => void
  options: OptionType[]
  placeholder?: ReactNode
  required?: boolean
  small?: boolean
  value?: string
}

export const Select = forwardRef<ElementRef<typeof RadixSelect.Root>, SelectPropsType>(
  (
    {
      className,
      defaultValue,
      disabled,
      label,
      onValueChange,
      options,
      placeholder,
      required,
      small,
      value,
    },
    ref
  ) => {
    const styles = {
      icon: clsx(s.icon, disabled && s.iconDisabled),
      item: clsx(s.item, small && s.small),
      label: clsx(s.label, disabled && s.labelDisabled),
      root: clsx(s.root, disabled && s.labelDisabled, small && s.small, className),
      trigger: clsx(s.trigger, disabled && s.triggerDisabled, small && s.small),
    }

    return (
      <Label.Root className={styles.root} ref={ref}>
        <Typography as={'label'} className={styles.label} variant={'body2'}>
          {label}
        </Typography>
        <RadixSelect.Root
          defaultValue={defaultValue}
          disabled={disabled}
          onValueChange={onValueChange}
          required={required}
          value={value}
        >
          <RadixSelect.Trigger
            aria-label={'select'}
            asChild
            className={styles.trigger}
            tabIndex={1}
          >
            <div>
              <RadixSelect.Value placeholder={placeholder} />
              <Icon className={styles.icon} name={'arrowDown'} />
            </div>
          </RadixSelect.Trigger>
          <RadixSelect.Portal>
            <RadixSelect.Content className={s.content} position={'popper'}>
              <RadixSelect.Viewport>
                {options.map(el => (
                  <RadixSelect.Item className={styles.item} key={el.value} value={el.value}>
                    <RadixSelect.ItemText>{el.label}</RadixSelect.ItemText>
                  </RadixSelect.Item>
                ))}
              </RadixSelect.Viewport>
            </RadixSelect.Content>
          </RadixSelect.Portal>
        </RadixSelect.Root>
      </Label.Root>
    )
  }
)
