import { FC } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadioGr from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radio-group.module.scss'

export type Option = {
  label: string
  value: string
}

export type RadioGroupProps = {
  className?: string
  disabled?: boolean
  errorMessage?: string
  name?: string
  onValueChange?: (value: string) => void
  options: Option[]
  value?: string
}

export const RadioGroup: FC<RadioGroupProps> = ({
  className,
  disabled,
  errorMessage,
  options,
  ...rest
}) => {
  const classes = {
    label: clsx(s.label, disabled && s.disabled),
    radioWrapper: clsx(s.radioWrapper, disabled && s.disabled),
    root: clsx(s.root, className),
  }

  return (
    <RadioGr.Root aria-label={'Aria label'} {...rest} className={classes.root}>
      {options.map(el => (
        <Typography as={'label'} className={classes.label} key={el.value} variant={'body2'}>
          <div className={classes.radioWrapper}>
            <RadioGr.Item className={s.item} value={el.value}>
              <RadioGr.Indicator className={s.indicator} />
            </RadioGr.Item>
          </div>
          {el.label}
        </Typography>
      ))}
      {errorMessage && (
        <Typography className={s.error} variant={'caption'}>
          {errorMessage}
        </Typography>
      )}
    </RadioGr.Root>
  )
}
