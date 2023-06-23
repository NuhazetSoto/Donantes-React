import React, { useState, useEffect } from 'react'
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
import './AccesoSanitarioDat.css'
import { getOneSanitario } from '../../services/sanitario.service'
import EditSanDat from '../AccesoSanitarioDatAct/AccesoSanitarioDatAct'
import BasicModal from '../AccesoSanitarioDatAct/AccesoSanitarioDatAct'

function AccesoSanitarioDat() {
  let currentDate = new Date().toLocaleString('es-ES')
  const [data , setData] = useState([])
  const getData = async () => {
    const result = await getOneSanitario(localStorage.getItem('id'))
    setData(result)

  }
  useEffect(() => {

    getData()

  },[])


  return (
    <>
      <div className="botones">
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
            marginLeft: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          variant="contained"
          color="error"
<<<<<<< HEAD
          onClick={() => {
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            localStorage.removeItem('role')
          }}
        >
          <Link style={{ color: 'inherit', textDecoration: 'none' }} to={'/'}>
=======
        >
          <Link
            style={{ color: 'inherit', textDecoration: 'none' }}
            to={'/'}
          >
>>>>>>> 8d9bb2363e60a4ed6d337984feadfb41440bfb0b
            Cerrar sesión
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
            backgroundColor: 'white',
            marginRight: '50px',
            border: '1px solid black',
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
              alignItems: 'center',
              height: '350vh',
              marginRight: '300px',
              marginLeft: '150px',
            }}
          >
            <List
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
<<<<<<< HEAD
                marginLeft: '80px',
              }}
            >
              <ListItem sx={{ fontWeight: 'bold' }}>
                -Nombre:
                <Typography sx={{ marginLeft: '5px' }}>{data.name}</Typography>
              </ListItem>

              <ListItem sx={{ fontWeight: 'bold' }}>
                -Apellidos:
                <Typography sx={{ marginLeft: '5px' }}>
                  {data.lastname}
                </Typography>
              </ListItem>

              <ListItem sx={{ fontWeight: 'bold' }}>
                -DNI:
                <Typography sx={{ marginLeft: '5px' }}>{data.dni}</Typography>
              </ListItem>

              <ListItem sx={{ fontWeight: 'bold' }}>
                -Email:
                <Typography sx={{ marginLeft: '5px' }}>{data.email}</Typography>
              </ListItem>

              <ListItem sx={{ fontWeight: 'bold' }}>
                -TLF:
                <Typography sx={{ marginLeft: '5px' }}>{data.phone}</Typography>
              </ListItem>

              <ListItem sx={{ fontWeight: 'bold' }}>
                -Fecha de nacimiento:
                <Typography sx={{ marginLeft: '5px' }}>
                  {data.fecha_nacimiento}
                </Typography>
              </ListItem>

              <ListItem sx={{ fontWeight: 'bold' }}>
                -Localidad:
                <Typography sx={{ marginLeft: '5px' }}>
                  {data.location}
                </Typography>
              </ListItem>

              <ListItem sx={{ fontWeight: 'bold' }}>
                -Dirección:
                <Typography sx={{ marginLeft: '5px' }}>
                  {data.direction}
                </Typography>
              </ListItem>
=======
              }}
            >
              <ListItem>-nombre:{data.name}</ListItem>
              <ListItem>-apellidos:{data.lastname}</ListItem>
              <ListItem sx={{ fontWeight: 'bold' }}>-DNI:{data.dni}</ListItem>
              <ListItem>-email:{data.email}</ListItem>
              <ListItem>-TLF:{data.phone}</ListItem>
              <ListItem>-Fecha de nacimiento:{data.fecha_nacimiento}</ListItem>
              <ListItem>-Localidad:{data.localidad}</ListItem>
              <ListItem>-Dirección:{data.direccion}</ListItem>
>>>>>>> 8d9bb2363e60a4ed6d337984feadfb41440bfb0b
            </List>
          </CardContent>
        </Card>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column-reverse',
            justifyContent: 'space-between',
            marginLeft: '100px'
          }}
        >
<<<<<<< HEAD
          <BasicModal getData={ getData } />
=======
          <Link
            style={{ color: 'inherit', textDecoration: 'none' }}
            to={'/login/sanitario/misdatos/actualizar'}
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
              Actualizar datos
            </Button>
          </Link>
>>>>>>> 8d9bb2363e60a4ed6d337984feadfb41440bfb0b
        </Box>
      </div>
    </>
  )
}

export default AccesoSanitarioDat
