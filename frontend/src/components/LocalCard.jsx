/* eslint-disable react/prop-types */
import { StarIcon } from '@chakra-ui/icons'
import { Box, GridItem, Image, Link, Text } from '@chakra-ui/react'

export const LocalCard = ({ title, description, rate, img }) => {
    return (
        <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={img} alt={title} height="200px" objectFit="cover" />
                <Box p={6}>
                    <Text fontSize="xl" fontWeight="semibold">{title}</Text>
                    <Text mt={2} color="gray.600">{description}</Text>
                    <Box display="flex" alignItems="center" mt={2} fontSize="sm" fontWeight="medium" color="red.500">
                        Avaliação: {rate}
                        <StarIcon ml={1} w={4} h={4} />
                    </Box>
                </Box>
                <Box p={6} display="flex" justifyContent="flex-end">
                    <Link color="indigo.600" _hover={{ textDecoration: 'underline' }} href="#">VEJA MAIS</Link>
                </Box>
            </Box>
        </GridItem>
    )
}
