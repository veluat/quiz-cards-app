import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const forgotPasswordSchema = z.object({
  email: z.string().email(),
})

export type ForgotPasswordFormProps = z.infer<typeof forgotPasswordSchema>

export const useForgotPasswordForm = () => {
  const { control, handleSubmit } = useForm<ForgotPasswordFormProps>({
    defaultValues: { email: '' },
    resolver: zodResolver(forgotPasswordSchema),
  })

  return { control, handleSubmit }
}
