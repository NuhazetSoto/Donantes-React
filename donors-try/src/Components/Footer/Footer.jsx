import React from 'react'
import { Box, Grid, Container, Typography, Button, Card } from '@mui/material'

function Footer() {
  const elements = [
    {

      header: 'Contacto',
      links: ['Contact', 'Support', 'Privacy'],
    },
    {
      header: 'Aviso Legal',
      links: ['Login', 'Register', 'New'],
    },
    {
      header: 'Politica de Privacidad',
      links: ['Backup', 'History', 'Roll'],
    },
  ]

  function generateFooterElements() {

    const footerElements = elements.map((column,idx) => {

      return (

        <Grid key = {idx} item xs= {12} md= {4}>
          <Box borderBottom={1}>
            <Button sx= {{ color: 'white', fontWeight: 'bold' }}>
              {column.header}
            </Button>
          </Box>
        </Grid>
      )
    })
    return footerElements
  }

  return (
    <footer>
      <Box bgcolor="#BF0021" color="white" padding={2}>
        <Container>
          <Grid container columnSpacing={2}>
            {generateFooterElements()}
          </Grid>
        </Container>
      </Box>

      <Box 
      textAlign={'center'}
      alignContent={'space-between'}
      justifyContent={'center'}
      py={2}
      m={0}
      bgcolor="#BF0021"
      color={'white'}>
          <Typography>© DonApp - All Rights Reserved</Typography>
          <img src="../../../public/SCS_logo.png" />

      </Box>
    </footer>
  )
}

export default Footer
