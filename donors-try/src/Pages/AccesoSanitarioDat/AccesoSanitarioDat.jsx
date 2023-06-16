import React from 'react'
import Header from '../../Components/Header/Header'
import {
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { blue } from '@mui/material/colors'
import './AccesoSanitarioDat.css'

function AccesoSanitarioDat() {
  let currentDate = new Date().toLocaleString('es-ES')

  return (
    <>
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
            to={'/login/sanitario'}
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

      <div className="card">
        <Card
          sx={{
            minWidth: '500px',
            minHeight: '500px',
            width: '400px',
            height: '400px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: blue[100],
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              margin: 2,
              height: '100px',
            }}
          >
            Información Personal
            
          </Typography>
          <CardContent
            sx={{

              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems:'center',
              height:'350vh',

              

            }}
          >
            <List>
              <ListItem>DNI: </ListItem>
              <ListItem>Email: </ListItem>
              <ListItem>Fecha Nacimiento: </ListItem>
              <ListItem>Dirección: </ListItem>
              <ListItem>Localidad: </ListItem>
              <ListItem>Ubicación actual: </ListItem>
              <ListItem>Próxima ubicación: </ListItem>
            </List>
          </CardContent>
        </Card>
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column-reverse',
            justifyContent: 'space-between',
          }}
        >
          <Button
            sx={{
              alignContent: 'end',
              backgroundColor: '#BF0021',
              marginLeft: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            variant="contained"
            color="error"
          >
            <Link style={{ color: 'inherit', textDecoration: 'none' }} to={''}>
              Actualizar Datos
            </Link>
          </Button>

          <Button
            sx={{
              alignContent: 'end',
              backgroundColor: '#BF0021',
              marginLeft: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            variant="contained"
            color="error"
          >
            <Link style={{ color: 'inherit', textDecoration: 'none' }} to={''}>
              Cerrar sesión
            </Link>
          </Button>
        </Box>
      </div>
    </>
  )
}

export default AccesoSanitarioDat
