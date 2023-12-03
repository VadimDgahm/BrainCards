import { useState } from 'react'

import { Header } from '@/components/ui/header'
import { Router } from '@/router'

function App() {
  const [values, setValues] = useState([0, 20])
  const sliderCallback = (newValues: number[]) => setValues(newValues)

  return (
    <>
      <Header isLoggedIn={false} />
      {/*<Slider maxValue={30} updateValues={sliderCallback} values={values} />*/}
      <Router />
    </>
  )
}

export default App
