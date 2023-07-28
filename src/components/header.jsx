import { Button, HStack, Heading, VStack, useMediaQuery, Box} from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/header.css'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
// import { icons } from 'react-icons';



function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropDown = ()=>{
    setDropdownOpen(!isDropdownOpen)
  }
  

  return (
    <HStack
      p="4"
      shadow="base"
      bgColor="blackAlpha.900"
      w="full"
      maxH="10vh"
      boxShadow="lg"
      className="header head"
      justifyContent="space-between"
    >
      <HStack>
        <Heading className="heading" ml="3" fontSize={{ base: '20px', md: '24px' }}>
          CripTo
        </Heading>
      </HStack>
      <HStack gap="8" display={{ base: 'none', md: 'flex' }}>
        <Button variant="unstyled" color="white" fontSize={{ base: '16px', md: '24px' }}className='btns-header'>
          <Link to="/">Home</Link>
        </Button>
        <Button variant="unstyled" color="white" fontSize={{ base: '16px', md: '24px' }} className='btns-header'>
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant="unstyled" color="white" fontSize={{ base: '16px', md: '24px' }} className='btns-header'>
          <Link to="/coins">Coins</Link>
        </Button>
      </HStack>
      <Button
        variant="unstyled"
        color="white"
        fontSize={{ base: '20px', md: '24px' }}
        onClick={toggleDropdown}
        display={{ base: 'flex', md: 'none' }}
      >
        {isDropdownOpen?<FaTimes/>:<FaBars />}
      </Button>
      {isDropdownOpen && (
        <VStack
          className='scroll'
          gap="8"
          display={{ base: 'flex', md: 'none' }}
          justifyContent="center"
          alignItems="center"
          bg="blackAlpha.900"
          w="full"
          position="absolute"
          top="10vh"
          left="0"
          h="50vh"
          zIndex="999"
        >
          <Button variant="unstyled" color="white" fontSize="16px" onClick={()=>closeDropDown()} className='btns-header'>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="unstyled" color="white" fontSize="16px" onClick={()=>closeDropDown()} className='btns-header'>
            <Link to="/exchanges">Exchanges</Link>
          </Button>
          <Button variant="unstyled" color="white" fontSize="16px" onClick={()=>closeDropDown()} className='btns-header'>
            <Link to="/coins">Coins</Link>
          </Button>
        </VStack>
      )}
    </HStack>
  );
}

export default Header;





