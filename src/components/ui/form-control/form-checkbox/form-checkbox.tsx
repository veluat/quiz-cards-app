import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components/ui/checkbox'

export type FormCheckboxProps<T extends FieldValues> = Omit<
  CheckboxProps,
  'checked' | 'id' | 'onChange'
> &
  UseControllerProps<T>

export const FormCheckbox = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...rest
}: FormCheckboxProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return <Checkbox checked={value} id={name} onCheckedChange={onChange} {...rest} />
}
