import { Box, Button, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import piggy from '../images/piggy.gif'
import '../styles/header.css'

const Home = () => {
    return (
        <>
            <Box bgColor={"blackAlpha.900"} w={"full"} h={"90vh"} className='home' >
                <HStack  justifyContent={"space-around"} wrap={"wrap"}>
                <Image src={piggy}  objectFit={"contain"} width={["60","auto"]}></Image>
                <VStack p={"4"}>
                    <Heading fontSize={"6xl"} fontFamily={"cursive"} color={"blackAlpha.900"} alignSelf={"top"}>CripTo</Heading>
                    <Text color={"blackAlpha.900"} fontSize={["lg","xl"]}>Digital Curreny for modern world</Text>
                    <Text color={"blackAlpha.900"} fontSize={["xs","sm"]} px={["4","16"]}> Platforms that provide information, services, or tools related to cryptocurrency</Text>
                    <Button className='btns-home'>Try Out</Button>
                </VStack>

                </HStack>
            </Box>
        </>
    )
}

export default Home;