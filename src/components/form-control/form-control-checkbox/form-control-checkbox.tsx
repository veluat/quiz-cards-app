import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components/ui/checkbox'

export type FormControlCheckboxProps<T extends FieldValues> = Omit<
  CheckboxProps,
  'checked' | 'id' | 'onChange'
> &
  UseControllerProps<T>

export const FormControlCheckbox = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...rest
}: FormControlCheckboxProps<T>) => {
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
