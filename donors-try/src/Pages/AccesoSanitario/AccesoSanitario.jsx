import React from 'react'
import Header from '../../Components/Header/Header'
import { Box, Button, Typography,Grid, Paper, TextField} from '@mui/material'
import './AccesoSanitario.css'
import Footer from '../../Components/Footer/Footer'
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'

function AccesoSanitario() {


  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



  return (

    <>
    
    <div className='cont'>
        <div className="botones">
          <Button
            sx={{

              alignContent: 'end',
              backgroundColor: '#BF0021',
              marginLeft: '8px',
            }}
            variant="contained"
            color="error"
          >
            <Link
              style={{ color: 'inherit', textDecoration: 'none' }}
              to={'/login/donante'}
            >
              Listado de pacientes

            </Link>
          </Button>
          <Button
            sx={{
              alignContent: 'end',
              backgroundColor: '#BF0021',
              marginLeft: '8px',
            }}

            variant="contained"
            color="error"
          >
            <Link style={{ color: 'inherit', textDecoration: 'none' }} to={''}>
           Ubicación
            </Link>
          </Button>
          <Button
            sx={{
              alignContent: 'end',
              backgroundColor: '#BF0021',
              marginLeft: '8px',
            }}
            variant="contained"
            color="error"
          >
            <Link style={{ color: 'inherit', textDecoration: 'none' }} to={''}>
             Mis datos
            </Link>
          </Button>
          </div>


          <Box>
            <Typography
            variant="h6"
            component="div"
            sx={{

                flexGrow: 1,
                display: { xs: 'none', sm: 'block' },
                margin: 0,
              }}

            >
            Fecha 14/07/2023
            </Typography>


            <Typography

            variant="h6"
            component="div"
            sx={{             
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' },
                margin: 0,
              }}
            >
            Hospital Negrin 
            </Typography>
          </Box>
    </div>
          </>




      
        

     
  )
}

export default AccesoSanitario