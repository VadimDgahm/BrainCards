import { useState } from 'react'

import { ForgotPass } from '@/components/auth/pass-recovery'

function App() {
  const [values, setValues] = useState([0, 20])
  const sliderCallback = (newValues: number[]) => setValues(newValues)

  return (
    <>
      <div></div>
      <ForgotPass onSubmit={() => {}} />
    </>
  )
}

export default App
