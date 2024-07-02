import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Icon } from '@/components/ui/icon/icon'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './text-field.module.scss'

export type TextFieldProps = {
  clearField?: () => void
  errorMessage?: string
  label?: string
  placeholder?: string
  type?: 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>

type TextFieldPropsType = Omit<ComponentPropsWithoutRef<'input'>, keyof TextFieldProps> &
  TextFieldProps

export const TextField = forwardRef<HTMLInputElement, TextFieldPropsType>(
  ({ className, clearField, errorMessage, label, placeholder, type = 'text', ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    const isPasswordType = type === 'password'

    const isSearchType = type === 'search'

    const displayClearButton = !isPasswordType && rest.value

    const finalType = getFinalType(type, showPassword)

    const passwordHandler = () => setShowPassword(prev => !prev)

    const iconToRender = getIcon(isPasswordType, showPassword)

    const styles = {
      input: clsx(
        s.input,
        isSearchType && s.search,
        rest.value && s.filled,
        errorMessage && s.error
      ),
      label: clsx(s.label, rest.disabled && s.disabled),
      root: clsx(s.root, className),
      searchIcon: clsx(s.searchIcon, rest.disabled && s.disabledIcon, rest.value && s.filledIcon),
    }

    return (
      <div className={styles.root}>
        <Typography as={'label'} className={styles.label} variant={'body2'}>
          {label}
          <div className={s.container}>
            <input
              className={styles.input}
              placeholder={placeholder}
              ref={ref}
              type={isPasswordType ? finalType : 'text'}
              {...rest}
            />
            {isPasswordType && (
              <button
                className={s.button}
                disabled={rest.disabled}
                onClick={passwordHandler}
                type={'button'}
              >
                {iconToRender}
              </button>
            )}
            {isSearchType && (
              <Icon className={styles.searchIcon} height={20} name={'search'} width={20} />
            )}
            {displayClearButton && (
              <button
                className={s.button}
                disabled={rest.disabled}
                onClick={clearField}
                type={'button'}
              >
                <Icon height={16} name={'cross'} width={16} />
              </button>
            )}
          </div>
        </Typography>
        {!!errorMessage && (
          <Typography className={s.errorMessage} variant={'caption'}>
            {errorMessage}
          </Typography>
        )}
      </div>
    )
  }
)

function getFinalType(type: TextFieldProps['type'], showPassword: boolean) {
  if (type === 'password' && !showPassword) {
    return 'password'
  }

  return 'text'
}

function getIcon(isPasswordType: boolean, showPassword: boolean) {
  if (!isPasswordType) {
    return null
  }
  if (showPassword) {
    return <Icon name={'eyeOff'} />
  }

  return <Icon name={'eye'} />
}
