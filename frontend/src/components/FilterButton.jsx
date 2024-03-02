/* eslint-disable react/prop-types */
import { Button } from '@chakra-ui/react'

export const FilterButton = ({ title }) => {
    return (
        <Button
            backgroundColor="black" color="white"
            _hover={{ backgroundColor: "gray.600"}}
            variant="outline"
        >
            {title}
        </Button>
    )
}
