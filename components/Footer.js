import { Box, Center, Heading } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Center p={4} borderTop='2px' borderColor={'#88888811'}>
        <Heading letterSpacing={1} size='sm' fontWeight={'normal'}>Ivan Angjelkoski - {new Date().getFullYear()}</Heading>
    </Center>
  )
}

export default Footer