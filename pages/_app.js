import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import theme from '../lib/theme'
import GlobalStyle from '../components/utility/GlobalStyle'
import Layout from '../components/Layout'
import {motion,AnimatePresence} from 'framer-motion'
import Footer from '../components/Footer'

const variant = {
  initial: {opacity: 0,y: 20},
  animate: {opacity: 1,y: 0},
  exit: {opacity: 0,y: 20}
}

function MyApp({ Component, pageProps,router }) {
  return <ChakraProvider theme={theme}>
    <GlobalStyle/>
    <Layout>
    <AnimatePresence mode='wait' initial={false} onExitComplete={()=> window.scrollTo(0,0)}>
      <motion.div
      key={router.pathname}
      variants={variant}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{duration: 0.4}}
      
      >
    <Component {...pageProps} />
    <Footer/>
      </motion.div>
    </AnimatePresence>
    </Layout>
  </ChakraProvider>
}

export default MyApp
