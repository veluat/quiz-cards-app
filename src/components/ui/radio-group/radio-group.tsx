import { ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadioGr from '@radix-ui/react-radio-group'
import * as RadixSelect from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './radio-group.module.scss'

export type Option = {
  label: string
  value: string
}

export type RadioGroupProps = {
  disabled?: boolean
  errorMessage?: string
  name?: string
  onValueChange?: (value: string) => void
  options: Option[]
  value?: string
}

export const RadioGroup = forwardRef<ElementRef<typeof RadixSelect.Root>, RadioGroupProps>(
  ({ errorMessage, options, ...rest }, ref) => {
    const labelClasses = clsx(s.item, rest.disabled && s.disabled)

    return (
      <RadioGr.Root aria-label={'Aria label'} ref={ref} {...rest} className={s.root}>
        {options.map(el => (
          <Typography as={'label'} className={labelClasses} key={el.value} variant={'body2'}>
            <RadioGr.Item className={s.radio} value={el.value}>
              <div className={s.frame}></div>
              <RadioGr.Indicator className={s.indicator} />
            </RadioGr.Item>
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
)
