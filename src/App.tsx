import { useState } from 'react'

import { Header } from '@/components/ui/header'
import { Slider } from '@/components/ui/slider/slider'

function App() {
  const [values, setValues] = useState([0, 20])
  const sliderCallback = (newValues: number[]) => setValues(newValues)

  return (
    <>
      <Header isLoggedIn />
      <Slider maxValue={30} updateValues={sliderCallback} values={values} />
    </>
  )
}

export default App
