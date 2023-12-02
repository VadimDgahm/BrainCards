import { useState } from 'react'

import { LoginForm } from '@/components/auth/sign-in'
import { SingUpForm } from '@/components/auth/sign-up'

function App() {
  const [values, setValues] = useState([0, 20])
  const sliderCallback = (newValues: number[]) => setValues(newValues)

  return (
    <>
      <div></div>
      <SingUpForm onSubmit={() => {}} />
    </>
  )
}

export default App
