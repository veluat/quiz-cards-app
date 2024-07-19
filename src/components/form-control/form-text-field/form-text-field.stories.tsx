import { CSSProperties } from 'react'
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

    const styles: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '20px',
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)} style={styles}>
        <DevTool control={control} />
        <Typography>Form With Controlled Text Fields</Typography>
        <FormTextField control={control} label={'First Name'} name={'firstName'} />
        <FormTextField control={control} label={'Last Name'} name={'lastName'} />
        <Button fullWidth type={'submit'}>
          Send
        </Button>
      </form>
    )
  },
}
