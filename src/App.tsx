import { Provider } from 'react-redux'

import { Header } from '@/components/ui/header'
import { Router } from '@/router'
import { store } from '@/services/store'

function App() {
  // const [open, setOpen] = useState(false)

  return (
    <>
      <Header isLoggedIn />
      <Provider store={store}>
        <Router />
      </Provider>
      {/*<Profile email={'email'} name={'name'} />*/}
      {/*<Button as={'button'} onClick={() => setOpen(true)} variant={'primary'}>*/}
      {/*  Open Modal*/}
      {/*</Button>*/}
      {/*<Modal open={open} setOpen={setOpen} title={'dcdcdcd'}>*/}
      {/*  <>*/}
      {/*    <ModalWithContent>*/}
      {/*      Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod temper ut labore*/}
      {/*      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco*/}
      {/*      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit*/}
      {/*      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat*/}
      {/*      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor.*/}
      {/*    </ModalWithContent>*/}
      {/*    <ModalWithButton titleButton={'New card'} />*/}
      {/*  </>*/}
      {/*</Modal>*/}
      {/*<LoginForm onSubmit={() => alert('sub')} />*/}
      {/*<div>*/}
      {/*  <DropDownMenu trigger={<Calendar />}>*/}
      {/*    <MenuContentWithAvatar*/}
      {/*      name={'Ivan'}*/}
      {/*      onClickAvatar={() => alert('click avatar')}*/}
      {/*      url={'j&johnson@gmail.com'}*/}
      {/*    />*/}
      {/*    <MenuContent*/}
      {/*      onClick={() => alert('Learn')}*/}
      {/*      svgIcon={<PlayCircleOutline />}*/}
      {/*      title={'Learn'}*/}
      {/*    />*/}
      {/*    <MenuContent onClick={() => alert('Edit')} svgIcon={<EditOutline />} title={'Edit'} />*/}
      {/*    <MenuContent*/}
      {/*      isLine*/}
      {/*      onClick={() => alert('Delete')}*/}
      {/*      svgIcon={<TrashOutline />}*/}
      {/*      title={'Delete'}*/}
      {/*    />*/}
      {/*  </DropDownMenu>*/}
      {/*</div>*/}
    </>
  )
}

export default App
