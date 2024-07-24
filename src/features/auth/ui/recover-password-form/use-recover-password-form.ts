import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const recoverPasswordSchema = z.object({
  email: z.string().email(),
  html: z.string(),
})

export type RecoverPasswordFormProps = z.infer<typeof recoverPasswordSchema>

export const useRecoverPasswordForm = () => {
  return useForm<RecoverPasswordFormProps>({
    defaultValues: { email: '' },
    resolver: zodResolver(recoverPasswordSchema),
  })
}
