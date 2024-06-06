import { useController, useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { Checkbox } from '../../ui/checkbox'
import { TextField } from '../../ui/text-field'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { control, handleSubmit, register } = useForm<FormValues>()

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  return (
    <form onSubmit={onSubmit}>
      <TextField {...register('email')} label={'email'} />
      <TextField {...register('password')} label={'password'} />
      <Checkbox checked={value} label={'remember me'} onCheckedChange={onChange} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
