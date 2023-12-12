import { Loader } from '@/components/ui/Loader/Loader'
import { Router } from '@/router'
import { useGetMeQuery } from '@/src/services/auth/authService'

function App() {
  const { isLoading } = useGetMeQuery()

  return <>{isLoading ? <Loader /> : <Router />}</>
}

export default App
