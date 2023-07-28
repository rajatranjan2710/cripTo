import { Box, Spinner, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <VStack justifyContent={"center"} h="90vh">
      <Box transform={"scale(1.5)"}>
        <Spinner size={"xl"}></Spinner>
        <Text> Loading</Text>

      </Box>


    </VStack>
  )
}

export default Loader