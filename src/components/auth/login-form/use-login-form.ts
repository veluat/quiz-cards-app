import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid emil address' }),
  password: z.string().min(3, { message: 'Too short password bitch' }),
  rememberMe: z.boolean().default(false),
})

export type LoginFormProps = z.infer<typeof loginSchema>

export const useLoginForm = () => {
  const { control, handleSubmit } = useForm<LoginFormProps>({
    resolver: zodResolver(loginSchema),
  })

  return { control, handleSubmit }
}
