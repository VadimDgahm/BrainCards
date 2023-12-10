import { Header } from '@/components/ui/header'
import { Router } from '@/router'

function App() {
  return (
    <>
      <Header isLoggedIn />
      <Router />
    </>
  )
}

export default App
