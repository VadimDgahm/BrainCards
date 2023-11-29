import { useState } from 'react'

import { LoginForm } from '@/components/auth/sign-in'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider/slider'

function App() {
  const [values, setValues] = useState([0, 20])
  const sliderCallback = (newValues: number[]) => setValues(newValues)

  return (
    <div style={{ margin: '0 auto', padding: '100px', width: '200px' }}>
      <Checkbox />
    </div>
  )
}

export default App
