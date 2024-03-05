/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Grid, Text } from "@chakra-ui/react"
import { useAuth } from "./provider/AuthContext"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import FullSpin from "./components/FullSpin"
import Header from "./components/Menu"
import { LocalCard } from "./components/LocalCard"
import { FilterButton } from "./components/FilterButton"
import Footer from "./components/Footer"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import firebaseApp from "../firebase"

function App() {
  const navigate = useNavigate()
  const { user, loading } = useAuth()
  const db = getFirestore(firebaseApp)
  const [todosLocais, setTodosLocais] = useState([])
  const [locaisLoading, setLocaisLoading] = useState(true)

  useEffect(() => {
    if (user) {
      navigate("/home")
    }
    if (!user && !loading) {
      navigate("/login")
    }
  }, [loading, user])

  async function callMe() {
    const querySnapshot = await getDocs(collection(db, "locais"));
    const locais = []
    querySnapshot.forEach((doc) => {
      locais.push({ ...doc.data(), id: doc.id })
    });
    setTodosLocais(locais)
    setLocaisLoading(false)
  }

  useEffect(() => {
    callMe()
  }, [])

  if (loading && locaisLoading) {
    return <FullSpin />
  }

  const newLocal = () => {
    navigate("/new-local")
  }

  return (
    <>
      <Header actualPage="/home" />
      <Box mx="auto" p={8}>
        <Box display="flex" gap={4} mb={8} overflowX="auto">
          <FilterButton title="Futebol" />
          <FilterButton title="Vôlei" />
          <FilterButton title="Tênis" />
          <FilterButton title="Bicicleta" />
          <FilterButton title="Beach Tennis" />
        </Box>
        <Text fontSize="4xl" fontWeight="bold" mb={8}>Locais</Text>
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
          {todosLocais?.map((item) =>
            <LocalCard
              key={item?.id}
              item={item}
            />
          )}

        </Grid>
        <Box mt="8">
          <Button onClick={newLocal}>Cadastrar local</Button>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default App
