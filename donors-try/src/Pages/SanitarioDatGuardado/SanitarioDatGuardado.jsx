import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
 Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { blue } from '@mui/material/colors'



function SanitarioDatGuardado() {
    let currentDate = new Date().toLocaleString('es-ES')

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'white',
        }}
      >
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
              height: '400px',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              marginBottom: '100px',
              marginLeft: '120px',
              border:'1px solid black'
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
                marginTop: '180px',
              }}
            >
              Sus datos han sido actualizados correctamente
            </Typography>
          </Card>
          <Box
            sx={{
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
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
                height: '40px',
                width: '170px'
              }}
              variant="contained"
              color="error"
            >
              <Link
                style={{ color: 'inherit', textDecoration: 'none' }}
                to={'/'}
              >
                Cerrar sesión
              </Link>
            </Button>
          </Box>
        </div>
      </Box>
    </>
  )
}

export default SanitarioDatGuardado