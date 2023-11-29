import { useState } from 'react'

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
