import { CSSProperties, useState } from 'react'

import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/text-field'
import { Meta } from '@storybook/react'

import { Modal } from './modal'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal Window',
} satisfies Meta<typeof Modal>

export default meta

export const ExampleWithForm = {
  render() {
    const [open, setOpen] = useState(false)

    const container: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '12px',
    }

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Modal open={open} setOpen={setOpen} title={'Dialog title'}>
          <div style={container}>
            <TextField label={'Title'} />
            <TextField label={'Key words'} />
            <Button style={{ alignSelf: 'flex-end', marginTop: '12px' }}>Send</Button>
          </div>
        </Modal>
      </>
    )
  },
}
