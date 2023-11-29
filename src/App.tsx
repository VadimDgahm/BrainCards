import { useState } from 'react'

import { RadioGroup } from '@/components/ui/radioGroup'
import { BigRadioGroup } from '@/components/ui/radioRate/radioRate'

function App() {
  const [values, setValues] = useState([0, 20])
  const sliderCallback = (newValues: number[]) => setValues(newValues)

  const arr = ['1', '2', '3']

  return (
    <>
      <div></div>
    </>
  )
}

export default App
