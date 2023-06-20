import React from 'react';
import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { blue } from '@mui/material/colors'


function PuntosDonacion() {

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          minHeight: '500px',
          minWidth: '100px',
          width: '100%',
          height: '70%',
          alignItems: 'flex-start',
          padding: '20px',
        }}
      >
        <Card
          sx={{
            minWidth: '100px',
            minHeight: '100px',
            width: '400px',
            height: '400px',
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: blue[100],
            marginBottom: '100px',
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
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Puntos fijos
          </Typography>
            <List
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                height: '100%',
              }}
            >
              <Typography sx={{ fontWeight: 'bold', fontSize: '1,5rem' }}>
                Gran Canaria
              </Typography>
              <ListItem>-Hospital Doctor Negrin </ListItem>
              <ListItem>-Hospital Insular</ListItem>
              <ListItem>-Banco provincial de las Palmas </ListItem>
              <ListItem>-Anexo centro de salud de Vecindario </ListItem>
              <Typography sx={{ fontWeight: 'bold', fontSize: '1,5rem' }}>
                Fuerteventura
              </Typography>
              <ListItem>-Hospital General de Fuerteventura </ListItem>
              <Typography sx={{ fontWeight: 'bold', fontSize: '1,5rem' }}>
                Lanzarote
              </Typography>
              <ListItem>-Hospital José Molina Orosa </ListItem>
            </List>

          
          
        </Card>
        <Card
          sx={{
            minWidth: '100px',
            minHeight: '100px',
            width: '400px',
            height: '400px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: blue[100],
            marginBottom: '100px',
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
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Puntos itinerantes
          </Typography>
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              height: '100%',
              marginBottom:'10px'
            }}
          >
            <Typography sx={{ fontWeight: 'bold', fontSize: '1,5rem' }}>
              Gran Canaria
            </Typography>
            <ListItem>-Avda/José Mesa y Lopez,42 </ListItem>
            <ListItem>-C/Fdo.Alonso de la Guardia-Vado</ListItem>
            <ListItem>-Base aérea de Gando </ListItem>
            <ListItem>-Anexo centro de salud de Vecindario </ListItem>
            <Typography sx={{ fontWeight: 'bold', fontSize: '1,5rem' }}>
              Fuerteventura
            </Typography>
            <ListItem>-Marcos Trujillo,1 </ListItem>
            <Typography sx={{ fontWeight: 'bold', fontSize: '1,5rem' }}>
              Lanzarote
            </Typography>
            <ListItem>-Teleclub de Manchablanca </ListItem>
          </List>
        </Card>
      </Box>
    </>
  )

   
}

export default PuntosDonacion