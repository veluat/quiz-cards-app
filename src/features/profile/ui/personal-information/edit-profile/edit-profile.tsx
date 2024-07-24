import { FormControlTextField } from '@/components/form-control'
import { Button } from '@/components/ui/button'
import {
  EditProfileValues,
  useEditProfile,
} from '@/features/profile/ui/personal-information/edit-profile/use-edit-profile'

import s from './edit-profile.module.scss'

type Props = {
  initialValues?: EditProfileValues
  onSubmit: (data: EditProfileValues) => void
}

export const EditProfile = ({ initialValues, onSubmit }: Props) => {
  const { control, handleSubmit } = useEditProfile(initialValues)

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <FormControlTextField
        className={s.input}
        control={control}
        label={'Nickname'}
        name={'name'}
      />
      <Button fullWidth type={'submit'}>
        Save Changes
      </Button>
    </form>
  )
}
