import { Button, Card, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

function CitaPrevia() {
  return (
    <>
     
      <Box
        sx={{
          
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: '20vh',
          alignItems: 'center',
          

        }}
      >
       
          <Link
            to={'/cita/formulario'}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <Button
              sx={{ backgroundColor: '#B31410', marginLeft: '10px',}}
              variant="contained"
              color="error"
            >
              Rellenar Formulario
            </Button>
          </Link>
          <Typography
            variant="h4"
            sx={{
              marginTop:'5px',
              fontWeight:'bold'
            
            }}
          >
            Información Mi cita
          </Typography>
        
      </Box>
    </>
  )
}

export default CitaPrevia