import React from 'react'
import NextLink from 'next/link'
import { Heading, HStack } from '@chakra-ui/react'


const ContactLink = ({href,label,icon}) => {
    const Icon = icon
  return (
    <NextLink href={href} passHref>
          <HStack opacity={0.9} as='a' target={'_blank'} referrerPolicy='no-referrer' _hover={{color: 'blue.500',opacity: 1}} transition='all 0.2s'>
            <Icon/>
            <Heading size='sm' fontWeight={'normal'}>{label}</Heading>
          </HStack>
          </NextLink>
  )
}

export default ContactLink