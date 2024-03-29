/* eslint-disable react/prop-types */
import { Box, GridItem, Image, Link, List, ListItem, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const LocalCard = ({ item }) => {
    const navigate = useNavigate()
    const { title, city, description, img, openingHours, id, likes, dislikes } = item

    const goToLocal = () => {
        navigate(`/local/${id}`)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={img} alt={title} height="200px" objectFit="cover" w="100%" />
                <Box p={6}>
                    <Text fontSize="xl" fontWeight="semibold">{title}</Text>
                    <Text mt={2} color="gray.600">{description}</Text>
                    <Text mt={2} color="gray.600">{city}</Text>
                    <Box display="flex" alignItems="center" mt={2} fontSize="sm" fontWeight="medium">
                        Avaliação:
                        <List pl={5}>
                            <ListItem color="green">Positiva: <strong>{likes}</strong></ListItem>
                            <ListItem color="red">Negativa: <strong>{dislikes}</strong></ListItem>
                        </List>
                    </Box>
                    <Box mt={2}>
                        Horário de funcionamento:
                        <List styleType="disc" pl={7} mt={1}>
                            <ListItem>{openingHours}</ListItem>
                        </List>
                    </Box>
                </Box>
                <Box p={2} display="flex" justifyContent="flex-end">
                    <Link color="indigo.600" _hover={{ textDecoration: 'underline' }} onClick={goToLocal}>VEJA MAIS</Link>
                </Box>
            </Box>
        </GridItem>
    )
}
