import { useState } from 'react'

import { CreatePass } from '@/components/auth/create-pass'

function App() {
  const [values, setValues] = useState([0, 20])
  const sliderCallback = (newValues: number[]) => setValues(newValues)

  return (
    <>
      <div></div>
      <CreatePass onSubmit={() => {}} />
    </>
  )
}

export default App
