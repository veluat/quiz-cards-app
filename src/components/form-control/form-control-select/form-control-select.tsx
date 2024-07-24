import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { Select, SelectPropsType } from '@/components/ui/select'

export type FormControlSelectProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<SelectPropsType, 'onValueChange' | 'value'>

export const FormControlSelect = <T extends FieldValues>({
  control,
  name,
  ...rest
}: FormControlSelectProps<T>) => {
  const {
    field: { onChange, ref, value },
  } = useController({
    control,
    name,
  })

  return <Select onValueChange={onChange} ref={ref} value={value} {...rest} />
}
