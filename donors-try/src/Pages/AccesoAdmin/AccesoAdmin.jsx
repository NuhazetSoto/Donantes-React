import React from 'react'
import Header from '../../Components/Header/Header'
import { Button, Card, Typography } from '@mui/material'
import './AccesoAdmin.css'

function AccesoAdmin() {
  return (
    <>
      <Header />
      <div>
        <Typography
          variant="h1"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'block' },
            margin: 0,
          }}
        >
          HOLA ADMIN
        </Typography>
      </div>
      <div className="box-buttons">
        <Button>Usuario</Button>
        <Button>Puntos de extraccion</Button>
      </div>
      <div className="cards">
        <Card
          className="card"
          sx={{ minWidth: '900px' }}
          raised={true}
          style={{ background: '##ff5232 ' }}
        >
          <Typography>Usuarios</Typography>
          <Typography>Id</Typography>
          <Typography>DNI</Typography>
          <Typography>Nombre</Typography>
          <Typography>Apellidos</Typography>
          <Typography>Telefono</Typography>
          <Typography>Fecha de Nacimiento</Typography>
          <Typography>Email</Typography>
          <Typography>Role</Typography>
        </Card>
        <Card
          className="card"
          sx={{ minWidth: '900px' }}
          raised={true}
          style={{ background: '##ff5232 ' }}
        >
          <Typography>Puntos de Extraccion</Typography>
          <Typography>Id</Typography>
          <Typography>Loc. gps</Typography>
          <Typography>Usuarios</Typography>
          <Typography>Usuarios</Typography>
          <Typography>Usuarios</Typography>
          <Typography>Usuarios</Typography>
          <Typography>Usuarios</Typography>
        </Card>
      </div>
    </>
  )
}

export default AccesoAdmin