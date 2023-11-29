import { useState } from 'react'

import { LoginForm } from '@/components/auth/sign-in'
import { Slider } from '@/components/ui/slider/slider'

function App() {
  const [values, setValues] = useState([0, 20])
  const sliderCallback = (newValues: number[]) => setValues(newValues)

  return (
    <>
      <LoginForm onSubmit={() => {}} />
    </>
  )
}

export default App
