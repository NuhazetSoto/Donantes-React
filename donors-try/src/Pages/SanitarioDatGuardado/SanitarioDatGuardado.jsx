import React from 'react';
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



function SanitarioDatGuardado() {
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
          <Link
            style={{ color: 'inherit', textDecoration: 'none' }}
            to={'/login/sanitario/ubicacion'}
          >
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
          <Link
            style={{ color: 'inherit', textDecoration: 'none' }}
            to={'/login/sanitario/misdatos'}
          >
            Mis datos
          </Link>
        </Button>
      </div>

      <div className="card">
        <Card
          sx={{
            minWidth: '100px',
            minHeight: '100px',
            width: '600px',
            height: '100px',
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
            Sus datos han sido actualizados correctamente
          </Typography>
          <CardContent
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              height: '350vh',
              marginRight: '250px',
            }}
          ></CardContent>
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
              Cerrar sesión
            </Link>
          </Button>
        </Box>
      </div>
    </>
  )
}

export default SanitarioDatGuardado