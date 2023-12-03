import { useState } from 'react'

import { LoginForm } from '@/components/auth/sign-in'
import { Button } from '@/components/ui/button'
import { DropDownMenu } from '@/components/ui/dropDownMenu/DropDownMenu'
import { MenuContent } from '@/components/ui/dropDownMenu/menuContent/MenuContent'
import { MenuContentWithAvatar } from '@/components/ui/dropDownMenu/menuСontentWithAvatar/MenuContentWichAvatar'
import { Calendar } from '@/components/ui/icons/calendar/Calendar'
import { EditOutline } from '@/components/ui/icons/edit-outline/EditOutline'
import { PlayCircleOutline } from '@/components/ui/icons/play-circle-outline/PlayCircleOutline'
import { TrashOutline } from '@/components/ui/icons/trash-outline/TrashOutline'
import Modal from '@/components/ui/modal/modal'
import ModalWithButton from '@/components/ui/modal/modalWithButton/modalWithButton'
import ModalWithContent from '@/components/ui/modal/modalWithContent/modalWithContent'

function App() {
  const [values, setValues] = useState([0, 20])
  const sliderCallback = (newValues: number[]) => setValues(newValues)
  const [open, setOpen] = useState(false)

  return (
    <div style={{ margin: '0 auto', width: '1200px' }}>
      <Button as={'button'} onClick={() => setOpen(true)} variant={'primary'}>
        Open Modal
      </Button>
      <Modal open={open} setOpen={setOpen} title={'dcdcdcd'}>
        <>
          <ModalWithContent>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod temper ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor.
          </ModalWithContent>
          <ModalWithButton titleButton={'New card'} />
        </>
      </Modal>
      <LoginForm onSubmit={() => alert('sub')} />
      <div>
        <DropDownMenu trigger={<Calendar />}>
          <MenuContentWithAvatar
            name={'Ivan'}
            onClickAvatar={() => alert('click avatar')}
            url={'j&johnson@gmail.com'}
          />
          <MenuContent
            onClick={() => alert('Learn')}
            svgIcon={<PlayCircleOutline />}
            title={'Learn'}
          />
          <MenuContent onClick={() => alert('Edit')} svgIcon={<EditOutline />} title={'Edit'} />
          <MenuContent
            isLine
            onClick={() => alert('Delete')}
            svgIcon={<TrashOutline />}
            title={'Delete'}
          />
        </DropDownMenu>
      </div>
    </div>
  )
}

export default App
