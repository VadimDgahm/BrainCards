import { useState } from 'react'

import { Router } from '@/router'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Router />
    </>
  )
}

export default App
