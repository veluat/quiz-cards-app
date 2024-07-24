import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components/ui/text-field'

type FormControlTextFieldProps<T extends FieldValues> = Omit<TextFieldProps, 'onChange' | 'value'> &
  UseControllerProps<T>

export const FormControlTextField = <T extends FieldValues>({
  control,
  name,
  onClearClick,
  ...rest
}: FormControlTextFieldProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return (
    <TextField {...field} {...rest} errorMessage={error?.message} onClearClick={onClearClick} />
  )
}
