import { FormControlTextField } from '@/components/form-control'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { CreateNewPasswordFormProps, useCreateNewPasswordForm } from '@/features'

import s from './create-new-password-form.module.scss'

type Props = {
  onSubmit: (data: CreateNewPasswordFormProps) => void
}

export const CreateNewPasswordForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useCreateNewPasswordForm()

  return (
    <Card className={s.cardAddition}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography as={'h2'} variant={'h1'}>
          Create new password
        </Typography>
        <FormControlTextField
          className={s.input}
          control={control}
          label={'Password'}
          name={'password'}
          placeholder={'Password'}
          type={'password'}
        />
        <Typography className={s.notification} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button fullWidth type={'submit'}>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
