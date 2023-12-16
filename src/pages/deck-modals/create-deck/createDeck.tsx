import { useState } from 'react'

import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import Modal from '@/components/ui/modal/modal'
import ModalWithContent from '@/components/ui/modal/modalWithContent/modalWithContent'

const CreateDeck = () => {
  const [open, setOpen] = useState(false)
  const [checked, setChecked] = useState(false)

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true)
        }}
      >
        Add New Pack
      </Button>
      <Modal setOpen={setOpen} title={'Add New Pack'}>
        <ModalWithContent>
          <Input label={'Name'} placeholder={'Name'} />
          <Checkbox checked />
        </ModalWithContent>
      </Modal>
    </>
  )
}

export default CreateDeck
