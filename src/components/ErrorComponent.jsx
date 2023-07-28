import { Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = () => {
  return (
    <VStack h="90vh" justifyContent={"center"}>
        {/* <Image src='..\images\error.png' alt='error'></Image> */}
        <Text fontSize={"20"}>Error While Fetching Data</Text>
    </VStack>
  )
}

export default ErrorComponent