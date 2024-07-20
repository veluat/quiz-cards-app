import type { Meta } from '@storybook/react'

import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'

import { FormSelect } from './form-select'

const meta = {
  component: FormSelect,
  title: 'Components/Form-Control/Form Select',
} satisfies Meta<typeof FormSelect>

export default meta

const formOptions = [
  { label: 'One', value: '1' },
  { label: 'Two', value: '2' },
  { label: 'Three', value: '3' },
  { label: 'Four', value: '4' },
  { label: 'Five', value: '5' },
]

type FormValues = Record<string, string>

export const ExampleWithForm = {
  render: () => {
    const { control, handleSubmit } = useForm<FormValues>({
      defaultValues: {
        number: '1',
      },
    })

    const onSubmit = (data: FormValues) => {
      alert(JSON.stringify(data))
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '300px' }}>
        <DevTool control={control} />
        <Typography>Form With Select</Typography>
        <div style={{ margin: '30px 0' }}>
          <FormSelect control={control} label={'Select:'} name={'number'} options={formOptions} />
        </div>
        <Button fullWidth type={'submit'}>
          Send
        </Button>
      </form>
    )
  },
}
