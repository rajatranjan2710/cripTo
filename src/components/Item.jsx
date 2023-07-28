import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

const Item = ({title,value}) => {
    return(

        <HStack justifyContent={"space-between"} width={"full"} my={"4"}>
    <Text fontFamily={"cursive"}>{title}</Text>
    <Text>{value}</Text>
  </HStack>
      )
}

export default Item