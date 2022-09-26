import React from 'react'
import Head from 'next/head'
import { Box, Center, Container, Flex, Heading, HStack, Link } from '@chakra-ui/react'
import { FaGithub, FaMailBulk, FaTwitter } from 'react-icons/fa'
import NextLink from 'next/link'
import ContactLink from '../components/ContactLink'
import Image from 'next/image'

const Contact = () => {
  const contactLinks = [
    {label:'ivan-angjelkoski',href:'https://github.com/ivan-angjelkoski',icon: FaGithub},
    {label:'ivan_angelkoski',href:'https://twitter.com/ivan_angelkoski',icon: FaTwitter},
    {label:'ivanangelkoski95@gmail.com',href:'mailto:ivanangelkoski95@gmail.com',icon: FaMailBulk},
  ]
  return (
    <>
      <Head>
        <title>Contact - Ivan Angjelkoski</title>
        <meta name="description" content="Contact - Ivan Angjelkoski" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW='3xl' px={7}>
      <Center>
        <Box position={'relative'} w={200} my={5} sx={{aspectRatio: '1/1'}} mx={'auto'} display='inline-block' rounded='50%' overflow='hidden'>
        <Image src='/ivan_ang.jpg'
        width={200}
        height={200}
        // layout='fill' 
        objectFit='cover'/>
        </Box>
        </Center>
        <Box maxW='xl' mx={'auto'} my={10}>
          <Heading size='md' mb={5} pb={2} borderBottom={'2px'} pl={3} borderColor='blue.500'>Contact:</Heading>
          <Flex gap={3} flexDir='column'>
          {contactLinks.map(link=> <ContactLink key={link.href} href={link.href} label={link.label} icon={link.icon}/>)}
          </Flex>
        </Box>
      </Container>
    </>
  )
}

export default Contact