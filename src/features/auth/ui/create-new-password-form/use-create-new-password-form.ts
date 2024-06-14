import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const createNewPasswordSchema = z.object({
  password: z.string().min(3, 'Use 3 characters or more for your password'),
})

export type CreateNewPasswordFormProps = z.infer<typeof createNewPasswordSchema>

export const useCreateNewPasswordForm = () =>
  useForm<CreateNewPasswordFormProps>({
    defaultValues: { password: '' },
    resolver: zodResolver(createNewPasswordSchema),
  })
