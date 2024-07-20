import type { Meta } from '@storybook/react'

import { CSSProperties } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'

import { FormCheckbox } from './form-checkbox'

const meta = {
  component: FormCheckbox,
  title: 'Components/Form-Control/Form Checkbox',
} satisfies Meta<typeof FormCheckbox>

export default meta

type FormValues = Record<'car' | 'carPark', boolean>

export const ExampleWithForm = {
  render: () => {
    const { control, handleSubmit } = useForm<FormValues>({
      defaultValues: {
        car: true,
        carPark: false,
      },
    })

    const onSubmit = (data: FormValues) => {
      alert(JSON.stringify(data))
    }

    const styles: CSSProperties = {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '30px 0',
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '300px' }}>
        <DevTool control={control} />
        <Typography>Form With Controlled Checkbox</Typography>
        <div style={styles}>
          <FormCheckbox control={control} label={'Car'} name={'car'} />
          <FormCheckbox control={control} label={'Car Park'} name={'carPark'} />
        </div>
        <Button fullWidth type={'submit'}>
          Send
        </Button>
      </form>
    )
  },
}
