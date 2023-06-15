import React from 'react'
import Header from '../../Components/Header/Header'
import { Button, Card, CardContent, CardHeader, List, ListItem, Typography } from '@mui/material'
import './AccesoAdmin.css'
import DataTablePuntos from '../../Components/DataTable/DataTablePuntos'
import DataTableUsuarios from '../../Components/DataTable/DataTableUsuario'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'

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
              <DataTableUsuarios />
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
            <DataTablePuntos />
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  )
}

export default AccesoAdmin