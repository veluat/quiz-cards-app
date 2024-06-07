import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Select } from '@/components/ui/select'
import { TextField } from '@/components/ui/text-field'
import { Meta } from '@storybook/react'

import { Modal } from './modal'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta

export const ExampleWithForm = {
  render() {
    const [open, setOpen] = useState(false)
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [checked, setChecked] = useState(true)
    const onCheckedChange = () => {
      setChecked(!checked)
    }
    const options = [
      {
        label: 'Select-box',
        value: 'Select-box',
      },
      {
        label: 'Select-box-2',
        value: 'Select-box-2',
      },
      {
        label: 'Select-box-3',
        value: 'Select-box-3',
      },
    ]

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Modal open={open} setOpen={setOpen} title={'Dialog title'}>
          <Select label={'Select-box'} options={options} placeholder={'Select-box'} />
          <TextField
            clearField={() => setValue1('')}
            label={'Input'}
            onChange={e => setValue1(e.currentTarget.value)}
            placeholder={'Input'}
            value={value1}
          />
          <TextField
            clearField={() => setValue2('')}
            label={'Input'}
            onChange={e => setValue2(e.currentTarget.value)}
            placeholder={'Input'}
            value={value2}
          />
          <Checkbox checked={checked} label={'Check-box'} onCheckedChange={onCheckedChange} />
        </Modal>
      </>
    )
  },
}
