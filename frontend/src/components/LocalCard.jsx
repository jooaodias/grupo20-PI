/* eslint-disable react/prop-types */
import { StarIcon } from '@chakra-ui/icons'
import { Box, GridItem, Image, Link, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const LocalCard = ({ item }) => {
    const navigate = useNavigate()
    const { title, city, description, rate, img, openingHours, id } = item

    const goToLocal = () => {
        navigate(`/local/${id}`)
    }

    return (
        <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={img} alt={title} height="200px" objectFit="cover" w="100%" />
                <Box p={6}>
                    <Text fontSize="xl" fontWeight="semibold">{title}</Text>
                    <Text mt={2} color="gray.600">{description}</Text>
                    <Text mt={2} color="gray.600">{city}</Text>
                    <Box display="flex" alignItems="center" mt={2} fontSize="sm" fontWeight="medium" color="red.500">
                        Avaliação: {rate} -- {openingHours}
                        <StarIcon ml={1} w={4} h={4} />
                    </Box>
                </Box>
                <Box p={6} display="flex" justifyContent="flex-end">
                    <Link color="indigo.600" _hover={{ textDecoration: 'underline' }} onClick={goToLocal}>VEJA MAIS</Link>
                </Box>
            </Box>
        </GridItem>
    )
}
