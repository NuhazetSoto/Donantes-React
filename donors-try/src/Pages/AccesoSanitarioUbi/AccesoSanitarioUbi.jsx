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
          }}
        >
          <CardHeader title="Ubicación actual" />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Desde al semana del 19/06/2023 al 23/06/2023 su puesto de trabajo
              será en: Puesto fijo Hospital Universitario Dr. Negrin. Loc gps:
              4HC4+66 Las Palmas de Gran Canaria
            </Typography>
          </CardContent>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.963163907046!2d-15.447666123646682!3d28.117153175950204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4095a9ee5560bb%3A0xe179496aac2b7aad!2sHospital%20Universitario%20de%20Gran%20Canaria%20Doctor%20Negr%C3%ADn!5e0!3m2!1ses!2ses!4v1687444124268!5m2!1ses!2ses"
            width="400"
            height="300"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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
          }}
        >
          <CardHeader title="Ubicación próxima semana" />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Desde al semana del 26/06/2023 al 30/06/2023 su puesto de trabajo
              será en: Puesto itinerante en Lomo Magullo. 
              Loc-gps: XGMR+G8 Balcon de Telde
            </Typography>
          </CardContent>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14093.260817510301!2d-15.469378530568216!3d27.984251266396825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc409779795f8ca9%3A0xc81b6738ae6eaeed!2s35211%20Lomo-Magullo%2C%20Las%20Palmas!5e0!3m2!1ses!2ses!4v1687443289515!5m2!1ses!2ses"
            width="400"
            height="300"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Card>
      </Box>
    </Box>
  )
}

export default AccesoSanitarioUbi
