import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const signInSchema = z.object({
  email: z.string().email({ message: 'Invalid emil address' }),
  password: z.string().min(3, { message: 'Use 3 characters or more for your password' }),
  rememberMe: z.boolean().default(false),
})

export type SignInFormProps = z.infer<typeof signInSchema>

export const useSignInForm = () => {
  const { control, handleSubmit } = useForm<SignInFormProps>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(signInSchema),
  })

  return { control, handleSubmit }
}
