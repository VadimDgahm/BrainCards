import { useState } from 'react'

import { ForgotPass } from '@/components/auth/pass-recovery'
import { LoginForm } from '@/components/auth/sign-in'
import { SingUpForm } from '@/components/auth/sign-up'
import { RadioGroup } from '@/components/ui/radioGroup'

function App() {
  const [values, setValues] = useState([0, 20])
  const sliderCallback = (newValues: number[]) => setValues(newValues)

  const arr = ['1', '2', '3']

  return (
    <>
      <div></div>
      <RadioGroup onChange={() => {}} options={arr} />
    </>
  )
}

export default App
