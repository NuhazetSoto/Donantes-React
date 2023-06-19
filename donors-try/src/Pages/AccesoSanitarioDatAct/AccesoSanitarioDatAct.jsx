import React from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { blue } from '@mui/material/colors'
import './AccesoSanitarioDatAct.css'

function AccesoSanitarioDatAct() {
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
              marginRight: '50px',
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
              width: '100%',
            }}
          >
            <List
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <ListItem>DNI: </ListItem>
              <ListItem>Email: </ListItem>
              <ListItem>Fecha Nacimiento: </ListItem>
              <ListItem
                fullWidth
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                Dirección:
                <TextField
                  sx={{}}
                  label="Dirección"
                  variant="outlined"
                  margin="dense"
                />
              </ListItem>

              <ListItem
                fullWidth
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                Localidad:
                <TextField
                  sx={{}}
                  label="Localidad"
                  variant="outlined"
                  margin="dense"
                />
              </ListItem>
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
            marginLeft: '100px',
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
              Guardar
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

export default AccesoSanitarioDatAct
