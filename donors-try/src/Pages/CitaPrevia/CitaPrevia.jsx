import { Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'

function CitaPrevia() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems:'center',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingBottom: '10px',
      }}
    >
      <Typography
          variant="h4"
          sx={{
            marginTop: '5px',
            fontWeight: 'bold',
          }}
        >
          Información Mi cita
        </Typography>
      <CardContent 
      sx={{
        display: 'flex',
        margin:'250px auto',
        alignItems:'center',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingBottom: '10px'
        }}
        >
        

        <Link
          to={'/cita/formulario'}
          style={{ color: 'inherit', textDecoration: 'none'}}
        >
          <Button
            sx={{ backgroundColor: '#B31410', marginLeft: '10px' }}
            variant="contained"
            color="error"
          >
            Acceso a Formulario
          </Button>
        </Link>
      </CardContent>
    </Box>
  )
}

export default CitaPrevia
