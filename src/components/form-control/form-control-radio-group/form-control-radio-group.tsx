import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui/radio-group'

export type FormControlRadioGroupProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<RadioGroupProps, 'onValueChange' | 'value'>

export const FormControlRadioGroup = <T extends FieldValues>({
  control,
  name,
  ...rest
}: FormControlRadioGroupProps<T>) => {
  const {
    field: { onChange, ref, value },
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return (
    <RadioGroup
      errorMessage={error?.message}
      name={name}
      onValueChange={onChange}
      ref={ref}
      value={value}
      {...rest}
    />
  )
}
