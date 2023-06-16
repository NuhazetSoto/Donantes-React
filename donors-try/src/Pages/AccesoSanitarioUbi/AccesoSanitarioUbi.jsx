import React from 'react'
import Header from '../../Components/Header/Header'
import { Box, Button, Typography, Grid, Paper, TextField } from '@mui/material'
import Footer from '../../Components/Footer/Footer'
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
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingTop: '5px',
        paddingBottom: '5px'
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
          backgroundColor: blue[100]
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
          backgroundColor: blue[100],
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
  )
}

export default AccesoSanitarioUbi
