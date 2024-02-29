/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@chakra-ui/react"
import { useAuth } from "./provider/AuthContext"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import FullSpin from "./components/FullSpin"

function App() {
  const navigate = useNavigate()
  const { user, loading, handleLogout } = useAuth()

  useEffect(() => {
    if (user) {
      navigate("/home")
    }
    if (!user && !loading) {
      navigate("/login")
    }
  }, [loading, user])

  if (loading) {
    return <FullSpin />
  }

  return (
    <>
      <div>Home</div>
      {user?.displayName} 
      <Button onClick={handleLogout}>Logout</Button>
    </>
  )
}

export default App
