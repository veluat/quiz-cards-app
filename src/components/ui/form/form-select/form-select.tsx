import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { Select, SelectPropsType } from '@/components/ui/select'

export type FormSelectProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<SelectPropsType, 'onValueChange' | 'value'>

export const FormSelect = <T extends FieldValues>({
  control,
  name,
  ...rest
}: FormSelectProps<T>) => {
  const {
    field: { onChange, ref, value },
  } = useController({
    control,
    name,
  })

  return <Select onValueChange={onChange} ref={ref} value={value} {...rest} />
}
