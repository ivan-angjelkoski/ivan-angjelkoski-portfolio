import { Box, Center, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const Profile = () => {
  return (
    <Box 
    // textAlign='center'
    >
        {/* <Heading fontWeight={'normal'}>Ivan Angjelkoski</Heading> */}
        <Center>
        <Box position={'relative'} w={200} my={5} sx={{aspectRatio: '1/1'}} mx={'auto'} display='inline-block' rounded='50%' overflow='hidden'>
        <Image src='/ivan_ang.jpg'
        width={200}
        height={200}
        // layout='fill' 
        objectFit='cover'/>
        </Box>
        </Center>
        <Heading lineHeight={'base'} letterSpacing={1} size='sm' fontWeight={'normal'} textAlign='justify' maxW='md' mx={'auto'}>
        <b>Ivan Angjelkoski</b> is a front-end web developer with a solid background in JavaScript frameworks like <b>React</b> and <b>Next.js</b> and is also familiar with the <b>MERN</b> (MongoDB, Express, React, and Node.js) software stack.Currently Living In <b>🇲🇰 Macedonia</b>.
        </Heading>
    </Box>
  )
}

export default Profile