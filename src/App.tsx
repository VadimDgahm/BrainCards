<<<<<<< HEAD
import { DropDownMenu } from '@/components/ui/dropDownMenu/DropDownMenu'

function App() {
=======
import { useState } from 'react'

import { DropDownMenu } from '@/components/ui/dropDownMenu/DropDownMenu'

function App() {
  const [values, setValues] = useState([0, 20])
  const sliderCallback = (newValues: number[]) => setValues(newValues)

>>>>>>> origin/main
  return (
    <div style={{ margin: '0 auto', padding: '100px', width: '200px' }}>
      <DropDownMenu>
        <button>ll</button>
      </DropDownMenu>
    </div>
  )
}

export default App
