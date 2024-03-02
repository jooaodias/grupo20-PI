/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Grid, Text } from "@chakra-ui/react"
import { useAuth } from "./provider/AuthContext"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import FullSpin from "./components/FullSpin"
import Header from "./components/Menu"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { LocalCard } from "./components/LocalCard"
import { FilterButton } from "./components/FilterButton"
import Footer from "./components/Footer"

function App() {
  const navigate = useNavigate()
  const { user, loading } = useAuth()

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
          <LocalCard
            title="Quadra Exemplo SP"
            rate={500}
            img="https://www.tudograma.com.br/images/blog/construcao-de-quadra-de-futebol-society-e-com-a-tudo-grama/construcao-de-quadra-de-futebol-society-e-com-a-tudo-grama-1.jpg"
            description="Texto sobre o campo society!"
          />
          <LocalCard
            title="Quadra Exemplo SP"
            rate={500}
            img="https://www.tudograma.com.br/images/blog/construcao-de-quadra-de-futebol-society-e-com-a-tudo-grama/construcao-de-quadra-de-futebol-society-e-com-a-tudo-grama-1.jpg"
            description="Texto sobre o campo society!"
          />
        </Grid>
        <Box display="flex" justifyContent="space-between" alignItems="center" my={8}>
          <Text>1 / 05</Text>
          <Box display="flex">
            <Button variant="ghost">
              <ChevronLeftIcon w={6} h={6} />
            </Button>
            <Button variant="ghost">
              <ChevronRightIcon w={6} h={6} />
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default App
