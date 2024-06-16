import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  DragEvent,
  ElementType,
  ReactNode,
  useRef,
} from 'react'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon'
import { clsx } from 'clsx'
import { JSX } from 'react/jsx-runtime'

import s from './uploader.module.scss'

type FileUploaderProps<T extends ElementType = 'button'> = {
  accept?: string
  as?: T
  asProps?: T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : any
  children?: ReactNode
  className?: string
  mode?: 'button' | 'drag'
  update?: (formData: FormData) => void
  validate: ((file: File) => boolean) | null
} & ComponentPropsWithoutRef<T>

export const Uploader = <T extends ElementType = 'button'>(
  props: FileUploaderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof FileUploaderProps<T>>
) => {
  const {
    accept = '',
    as: WrapperComponent = Button,
    asProps = { variant: 'secondary' },
    children,
    className,
    mode = 'button',
    update,
    validate,
    ...rest
  } = props

  const inputRef = useRef<HTMLInputElement>(null)

  const handleFileSelected = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0]

      if (validate === null || validate(file)) {
        const formData = new FormData()

        await formData.append('avatar', event.target.files[0])

        if (update) {
          update(formData)
        }
      }
    }
  }

  const handleDrop = (event: DragEvent<HTMLInputElement>) => {
    event.preventDefault()

    if (event.dataTransfer.files && event.dataTransfer.files.length) {
      const file = event.dataTransfer.files[0]

      if (validate === null || validate(file)) {
        const formData = new FormData()

        formData.append('avatar', file)
        if (update) {
          update(formData)
        }
      }
    }
  }

  const handleDragOver = (event: DragEvent<HTMLInputElement>) => {
    event.preventDefault()
  }

  const classes = {
    drag: clsx(s.drag, className),
    wrapper: clsx(s.wrapper, className),
  }

  if (mode === 'button') {
    return (
      <>
        <WrapperComponent
          className={classes.wrapper}
          onClick={() => inputRef?.current?.click()}
          {...asProps}
          {...rest}
        >
          {children ?? <Icon height={16} name={'edit'} width={16} />}
        </WrapperComponent>
        <input
          accept={accept}
          onChange={handleFileSelected}
          ref={inputRef}
          style={{ display: 'none' }}
          type={'file'}
        />
      </>
    )
  }

  if (mode === 'drag') {
    return (
      <div className={classes.drag} onDragOver={handleDragOver} onDrop={handleDrop}>
        <p>Перетащите сюда файл</p>
      </div>
    )
  }
}
