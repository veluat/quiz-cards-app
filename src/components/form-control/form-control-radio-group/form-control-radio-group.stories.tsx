import { CSSProperties } from 'react'
import { useForm } from 'react-hook-form'

import { FormControlRadioGroup } from '@/components/form-control/form-control-radio-group/form-control-radio-group'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { Meta } from '@storybook/react'

const meta = {
  component: FormControlRadioGroup,
  title: 'Components/Form-Control/Form Radio Group',
} satisfies Meta<typeof FormControlRadioGroup>

export default meta

const formOptions = {
  color: [
    { label: 'Red', value: 'red' },
    { label: 'Black', value: 'black' },
    { label: 'White', value: 'white' },
  ],
  number: [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
  ],
}

type FormValues = Record<'color' | 'number', string>

export const ExampleWithForm = {
  render: () => {
    const { control, handleSubmit } = useForm<FormValues>({
      defaultValues: {
        color: 'red',
        number: '1',
      },
    })

    const onSubmit = (data: FormValues) => {
      alert(JSON.stringify(data))
    }

    const styleWrapper: CSSProperties = {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '30px 0',
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '300px' }}>
        <DevTool control={control} />
        <Typography>Form With Controlled Radio Group</Typography>
        <div style={styleWrapper}>
          <div>
            <Typography variant={'body2'}>Number:</Typography>
            <FormControlRadioGroup control={control} name={'number'} options={formOptions.number} />
          </div>
          <div>
            <Typography variant={'body2'}>Color:</Typography>
            <FormControlRadioGroup control={control} name={'color'} options={formOptions.color} />
          </div>
        </div>
        <Button fullWidth type={'submit'}>
          Send
        </Button>
      </form>
    )
  },
}
