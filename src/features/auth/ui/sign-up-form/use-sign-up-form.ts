import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const signUpSchema = z
  .object({
    confirmPassword: z.string().min(3).trim(),
    email: z.string().email({ message: 'Invalid emil address' }),
    password: z.string().min(3, { message: 'Use 3 characters or more for your password' }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export type SignUpFormProps = z.infer<typeof signUpSchema>

export const useSignUpForm = () => {
  const { control, handleSubmit } = useForm<SignUpFormProps>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(signUpSchema),
  })

  return { control, handleSubmit }
}
