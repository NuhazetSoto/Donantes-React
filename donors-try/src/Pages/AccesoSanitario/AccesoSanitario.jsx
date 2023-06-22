import React from 'react'
import { Box, Button, Typography, Grid, Paper, TextField } from '@mui/material'
import './AccesoSanitario.css'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import ShowDataTableUsuarios from '../../Components/DataTable/DataTableShow/ShowDataTableUsuarios'

function AccesoSanitario() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))

  return (
    <Box className="cont">
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
      </div>
      <ShowDataTableUsuarios />
    </Box>
  )
}

export default AccesoSanitario
