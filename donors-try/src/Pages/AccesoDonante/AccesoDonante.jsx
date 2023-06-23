import React from 'react'
import Header from '../../Components/Header/Header'
import {Box, Button, Card, CardContent, List, ListItem, Typography,} from '@mui/material'
import './AccesoDonante.css'
import { Link } from 'react-router-dom'
import DataTableDonante from '../../Components/DataTable/DataTableDonante/ShowDataTableDonante'
import SpringModal from '../../Components/Modal/Modal'

function AccesoDonante() {
  //let currentDate = new Date().toLocaleString('es-ES')
  
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
            to={'/login/donante/misdatos'}
          >
            <Link
              style={{ color: 'inherit', textDecoration: 'none' }}
              to={'/login/donante'}
            >
              Mis Datos
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
              to={'/login/citadonante'}
            >
              Pedir Cita
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
            {' '}
            <Link
              style={{ color: 'inherit', textDecoration: 'none' }}
              to={'/login/historico'}
            >
              Historico
            </Link>
          </Button>
        </Box>
        <Box sx={{ paddingLeft:'50px'}}>
          <Button
            sx={{
              alignContent: 'end',
              backgroundColor: '#BF0021',
              marginLeft: '10px',
              display: 'flex',
              justifyContent: 'flex-end',
              flexDirection: 'row',
            }}
            variant="contained"
            color="error"
            onClick={() => {
              localStorage.removeItem('token')
              localStorage.removeItem('id')
              localStorage.removeItem('role')
            }}
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
      <div className="card">
        <DataTableDonante />
      </div>
    </>
  )
}

export default AccesoDonante