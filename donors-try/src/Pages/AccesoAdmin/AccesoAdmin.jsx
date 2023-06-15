import React from 'react'
import Header from '../../Components/Header/Header'
import { Button, Card, CardContent,Typography } from '@mui/material'
import './AccesoAdmin.css'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import DataTablePuntosN from '../../Components/DataTable/NoEdit/DataTablePuntos'
import DataTableUsuariosN from '../../Components/DataTable/NoEdit/DataTableUsuario'

function AccesoAdmin() {
  return (
    <>
      <Header />
      <div
        className="cards"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
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
              to={'/login/admin/usuarios'}
            >
              Usuarios
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
            <Link style={{ color: 'inherit', textDecoration: 'none' }} to={'/login/admin/puntos'}>
              Puntos de Extraccion
            </Link>
          </Button>
        </div>
        <Card
          className="card"
          sx={{ minWidth: '900px' }}
          raised={true}
          style={{ background: '##ff5232 ' }}
        >
          <CardContent>
            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' },
                margin: 0,
              }}
            >
              Usuarios
              <DataTableUsuariosN />
            </Typography>
          </CardContent>
        </Card>
        <Card
          className="card"
          sx={{ minWidth: '900px' }}
          raised={true}
          style={{ background: '##ff5232 ' }}
        >
          <CardContent>
            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' },
                margin: 0,
              }}
            >
              Puntos de Extraccion
            </Typography>
            <DataTablePuntosN />
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  )
}

export default AccesoAdmin