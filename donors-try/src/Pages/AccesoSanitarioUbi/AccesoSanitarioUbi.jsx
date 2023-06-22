import React from 'react'
import { Box, Button, Typography, Grid, Paper, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import { blue } from '@mui/material/colors'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';



function AccesoSanitarioUbi() {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: '10px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'flex-start',
          flex: 'auto',
          height: '10%',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
      >
        <Link
          style={{ color: 'inherit', textDecoration: 'none' }}
          to="/login/sanitario"
        >
          <Button
            sx={{
              alignContent: 'end',
              backgroundColor: '#BF0021',
              marginLeft: '8px',
            }}
            variant="contained"
            color="error"
          >
            Listado de pacientes
          </Button>
        </Link>

        <Link
          style={{ color: 'inherit', textDecoration: 'none' }}
          to="/login/sanitario/ubicacion"
        >
          <Button
            sx={{
              alignContent: 'end',
              backgroundColor: '#BF0021',
              marginLeft: '8px',
            }}
            variant="contained"
            color="error"
          >
            Ubicación
          </Button>
        </Link>

        <Link
          style={{ color: 'inherit', textDecoration: 'none' }}
          to="/login/sanitario/misdatos"
        >
          <Button
            sx={{
              alignContent: 'end',
              backgroundColor: '#BF0021',
              marginLeft: '8px',
            }}
            variant="contained"
            color="error"
          >
            Mis datos
          </Button>
        </Link>
        <Button
          sx={{
            alignContent: 'end',
            backgroundColor: '#BF0021',
            marginLeft: '10px',
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'row',
          }}
          variant="contained"
          color="error"
          onClick={() => {
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            localStorage.removeItem('role')
          }}
        >
          <Link style={{ color: 'inherit', textDecoration: 'none' }} to={'/'}>
            Cerrar sesión
          </Link>
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
          paddingTop: '100px',
          paddingBottom: '10px',
        }}
      >
        <Card
          sx={{
            width: '370px',
            height: '370px',
            maxWidth: '500px',
            maxHeight: '500px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            border: '1px solid black',
          }}
        >
          <CardHeader title="Ubicación actual" />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Desde al semana del 03/07/2023 al 09/07/2023 su puesto de trabajo
              será en: Puesto itinerante en Lomo Magullo (fiesta del agua) loc
              gps: +35.21456-52.36589
            </Typography>
          </CardContent>

          <CardMedia
            component="img"
            height="194"
            image="../../../public/download (1).jpeg"
            alt="Paella dish"
          />
        </Card>

        <CardHeader />

        <Card
          sx={{
            width: '370px',
            height: '370px',
            maxWidth: '500px',
            maxHeight: '500px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: 'white',
            border: '1px solid black',
          }}
        >
          <CardHeader title="Ubicación próxima semana" />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Desde al semana del 12/07/2023 al 16/07/2023 su puesto de trabajo
              será en: Puesto itinerante en Lomo Magullo (fiesta del agua) loc
              gps: +35.21456-52.36589
            </Typography>
          </CardContent>

          <CardMedia
            component="img"
            height="194"
            image="../../../public/download (1).jpeg"
            alt="Paella dish"
          />
        </Card>
      </Box>
    </Box>
  )
}

export default AccesoSanitarioUbi
