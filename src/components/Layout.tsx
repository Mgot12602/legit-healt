import React, { ReactNode } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Box, Container,Stack } from '@mui/material'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <Stack spacing={2} sx={{ minHeight:'100vh'}}>

        <NavBar/>
        <Container maxWidth="lg" sx={{flexGrow:1}}>
        {children}
        </Container>
        <Footer/>

     </Stack > 
  )
}

export default Layout