import { Box, Image, Text } from "@chakra-ui/react"
import Footer from "../../components/Footer"
import Header from "../../components/Menu"
import image from '../../assets/sobre-nos.png'

export const About = () => {
  return (
    <>
      <Header actualPage="/about" />
      <Box mx="auto" p={8}>
        <Text fontSize="4xl" fontWeight="bold" mb={8}>Sobre nós</Text>
        <Box >
          <Image src={image} h="50vh" />
        </Box>
        <Text mt="10" fontSize="large" lineHeight="1.2">
          Como opção de refúgio para este acelerado ritmo de vida, e com a finalidade de facilitar a vida de praticantes de esportes, sejam eles dos entusiastas, amadores aos profissionais, observou uma excelente oportunidade de desenvolver uma solução de tecnologia da informação que funcione como uma plataforma de aluguel de quadras esportivas, onde o proprietário do estabelecimento possa cadastrar e divulgar seu negócio. <br /><br />
          Acreditamos que o esporte salva vidas e por isso desenvolvemos essa aplicação! Para ajudar você a encontrar um lugar que se adeque ao seu estilo e ao proprietário de divulgar gratuitamente seu local!
        </Text>
      </Box>
      <Footer />
    </>
  )
}
