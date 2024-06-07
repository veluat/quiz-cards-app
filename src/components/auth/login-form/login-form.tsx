import { useForm } from 'react-hook-form'

import { FormCheckbox } from '@/components/ui/form-control/form-checkbox/form-checkbox'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { TextField } from '../../ui/text-field'

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid emil address' }),
  password: z.string().min(3, { message: 'Too short password bitch' }),
  rememberMe: z.boolean().default(false),
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })
  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <DevTool control={control} />
      <TextField {...register('email')} errorMessage={errors.email?.message} label={'email'} />
      <TextField
        {...register('password')}
        errorMessage={errors.password?.message}
        label={'password'}
      />
      <FormCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
