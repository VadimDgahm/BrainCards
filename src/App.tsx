import { useState } from 'react'

<<<<<<< HEAD
import { DropDownMenu } from '@/components/ui/dropDownMenu/DropDownMenu'
=======

import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider/slider'
>>>>>>> 5485f0fbe265f770ca6e2719ddbb3e072734fea9

function App() {
  const [values, setValues] = useState([0, 20])
  const sliderCallback = (newValues: number[]) => setValues(newValues)

  const arr = ['1', '2', '3']

  return (
    <div style={{ margin: '0 auto', padding: '100px', width: '200px' }}>
      <DropDownMenu>
        <button>ll</button>
      </DropDownMenu>
    </div>
  )
}

export default App
