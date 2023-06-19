import React from 'react'
import Header from '../../Components/Header/Header'
import { Button} from '@mui/material'
import './AccesoAdmin.css'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import ShowDataTableUsuarios from '../../Components/DataTable/DataTableShow/ShowDataTableUsuarios'
import ShowDataTablePuntos from '../../Components/DataTable/DataTableShow/ShowDataTablePuntos'

function AccesoAdmin() {
  return (
    <>
     
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
      <ShowDataTableUsuarios/>
      <ShowDataTablePuntos/>
      </div>
      
    </>
  )
}

export default AccesoAdmin