import { Box, Container, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Profile from '../components/Profile'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ivan Angjelkoski</title>
        <meta name="description" content="Portfolio - Ivan Angjelkoski" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW='3xl' px={7}>
        <Profile/>
      </Container>
    </>
  )
}
