/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Menu"
import Footer from "../../components/Footer"
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore"
import firebaseApp from "../../../firebase"
import FullSpin from "../../components/FullSpin"
import { Box, Flex, Heading, IconButton, Image, List, ListItem, Text } from "@chakra-ui/react"
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useAuth } from "../../provider/AuthContext"

export const LocalPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const { user, loading: loadingUser } = useAuth()
  const db = getFirestore(firebaseApp)
  const [local, setLocal] = useState(null)
  const [loading, setLoading] = useState(true)
  const [likeSelected, setLikeSelected] = useState(null)

  const docRef = doc(db, "locais", params?.id);
  const getLocal = async () => {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setLocal(docSnap.data())
    } else {
      navigate("/home")
    }
    setLoading(false)
  }

  useEffect(() => {
    if (params?.id) {
      getLocal()
    }
  }, [params, likeSelected])

  const handleLike = async () => {
    if (likeSelected) return
    await updateDoc(docRef, {
      likes: local?.likes + 1
    }).then(() => setLikeSelected("like"));
  }

  const handleDislike = async () => {
    if (likeSelected) return
    await updateDoc(docRef, {
      dislikes: local?.dislikes + 1
    }).then(() => setLikeSelected("dislike"));
  }

  if (loading && loadingUser) return <FullSpin />

  return (
    <>
      <Header />
      <Box maxW="2xl" mx="auto" p={8}>
        <Heading as="h1" size="2xl" fontWeight="bold" mb={2}>{local?.city}</Heading>
        <Heading as="h2" size="xl" fontWeight="semibold" color="gray.600" mb={4}>{local?.title}</Heading>
        <Image src={local?.img} alt={local?.title} mb={6} w="full" h="auto" style={{ aspectRatio: "640/400", objectFit: "cover" }} />
        <Text mb={6}>
          {local?.description}
        </Text>
        <Box mb={6}>
          <Heading as="h3" size="md" fontWeight="semibold" mb={2}>Horário de funcionamento:</Heading>
          <List styleType="disc" pl={5}>
            <ListItem>{local?.openingHours}</ListItem>
          </List>
        </Box>
        <Box mb={6}>
          <Heading as="h3" size="md" fontWeight="semibold" mb={2}>Avaliação geral: </Heading>
          <List styleType="disc" pl={5}>
            <ListItem color="green">Positiva: <strong>{local?.likes}</strong></ListItem>
            <ListItem color="red">Negativa: <strong>{local?.dislikes}</strong></ListItem>
          </List>
        </Box>
        {user &&
          <Box mb={6}>
            <Heading as="h3" size="md" fontWeight="semibold" mb={2}>Avalie:</Heading>
            <Flex align="center">
              <Text mr={2}>Curtiu o local? Sim!</Text>
              <IconButton icon={<FaThumbsUp />} backgroundColor={likeSelected === 'like' ? 'green.700' : null} colorScheme="green" aria-label="thumbs-up" onClick={handleLike} />
            </Flex>
            <Flex align="center">
              <Text mr={2}>Não!</Text>
              <IconButton icon={<FaThumbsDown />} backgroundColor={likeSelected === 'dislike' ? 'red.700' : null} colorScheme="red" aria-label="thumbs-down" onClick={handleDislike} />
            </Flex>
            {likeSelected !== null &&
              <Text mt={2} fontWeight="semibold">Obrigado pela avaliação!</Text>
            }
          </Box>
        }
        <Box mb={8}>
          <Heading as="h2" size="xl" fontWeight="semibold" mb={4}>Comentários</Heading>
          <List styleType="disc" pl={5}>
            <ListItem>Jose: Fui com meus amigos e gostei muito! Nota 10</ListItem>
            <ListItem>Antônio: Péssimo gramado e banheiros</ListItem>
            <ListItem>Fulano: Bom</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Box>
      </Box>
      <Footer />
    </>
  )
}
