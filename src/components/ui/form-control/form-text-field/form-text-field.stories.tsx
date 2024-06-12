import { CSSProperties, ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { Meta, StoryObj } from '@storybook/react'

import { FormTextField } from './form-text-field'

const meta = {
  component: FormTextField,
  title: 'Components/Form-Control/Form Text Field',
} satisfies Meta<typeof FormTextField>

export default meta
type Story = StoryObj<typeof meta>

type FormValues = {
  firstName: string
  lastName: string
}

export const ExampleWithForm: Story = {
  args: {} as any,
  render: () => {
    const { control, handleSubmit } = useForm<FormValues>()

    const onSubmit = (data: FormValues) => {
      alert(JSON.stringify(data))
    }
    const [state1, setState1] = useState('')
    const [state2, setState2] = useState('')
    const styles: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      maxWidth: '400px',
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)} style={styles}>
        <DevTool control={control} />
        <Typography>Form With Controlled Text Fields</Typography>
        <FormTextField
          clearField={() => setState1('')}
          control={control}
          label={'First Name'}
          name={'firstName'}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setState1(e.currentTarget.value)}
          value={state1}
        />
        <FormTextField
          clearField={() => setState2('')}
          control={control}
          label={'Last Name'}
          name={'lastName'}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setState2(e.currentTarget.value)}
          value={state2}
        />
        <Button fullWidth type={'submit'}>
          Send
        </Button>
      </form>
    )
  },
}
