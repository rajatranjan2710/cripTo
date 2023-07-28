import { Avatar, Box, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import avt from '../images/avatar.jpg'
import {FaGithub,FaLinkedin,FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"20vh"} px={"12"} py={["10","8"]} className='footer'>
        <Stack direction={["column","row"]} h={"full"} alignItems={"center"} justifyContent={"space-around"}>
            <VStack>
                <Avatar src={avt} size={"lg"} mt={["4","0"]}></Avatar>
                <Text>Developed by</Text>
                <Text fontWeight={"Bold"}>Rajat Ranjan</Text>
            </VStack>
            <VStack>
              <Text>All copyright reserved</Text>
            </VStack>
            <VStack>
                  <Text>Check me out on</Text>
                  <HStack gap={"5"}>
                    <a href="https://github.com/rajatranjan2710" target='blank' className='btns-footer'><FaGithub size={"30"}></FaGithub></a>
                    <a href="https://www.linkedin.com/in/rajat-ranjan-054036232/" target='blank' className='btns-footer'><FaLinkedin size={"30"}></FaLinkedin></a>
                    <a href="https://www.instagram.com/rjt27x/" target='blank' className='btns-footer'><FaInstagram size={"30"}></FaInstagram></a>
                  </HStack>
            </VStack>

        </Stack>
    </Box>
  )
}

export default Footer