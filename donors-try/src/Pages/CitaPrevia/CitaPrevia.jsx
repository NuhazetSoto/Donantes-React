import { Button, Card, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

function CitaPrevia() {
  return (
    <>
      <Card>
        <Link
          to={'/cita/formulario'}
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <Button
            sx={{ backgroundColor: '#B31410', marginLeft: '10px' }}
            variant="contained"
            color="error"
          >
            Rellenar Formulario
          </Button>
        </Link>
        <Typography variant="h3">Informacion MiCita</Typography>
      </Card>
      <div>CitaPrevia</div>
    </>
  )
}

export default CitaPrevia