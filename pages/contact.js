import React from 'react'
import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import Profile from '../components/Profile'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact - Ivan Angjelkoski</title>
        <meta name="description" content="Contact - Ivan Angjelkoski" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW='3xl' px={7}>
        <Profile/>
      </Container>
    </>
  )
}

export default Contact