import {Box, Button,Card,CardActions,CardContent,Typography,} from '@mui/material'
import { Link } from 'react-router-dom'
import './CitaDonante.css'
import ModalSolicitaCita from '../../../Components/Modal/ModalSolicitaCita'
import { useEffect } from 'react'
import { useState } from 'react'

function CitaDonante() {
  const[data, setData] = useState([])

  const handleData = async () => {
    const algo = await getAllUsers()
    setData(algo)
  }
  useEffect(() => {
    handleData()
  }, [])
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
          <Link
            style={{ color: 'inherit', textDecoration: 'none' }}
            to={'/login/historico'}
          >
            Historico
          </Link>
        </Button>
        <Box sx={{ paddingLeft: '50px' }}>
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
            <Link style={{ color: 'inherit', textDecoration: 'none' }} to={'/'}>
              Cerrar sesión
            </Link>
          </Button>
        </Box>
      </div>
      <div>
        <ModalSolicitaCita cita={data} />
      </div>
    </>
  )
}

export default CitaDonante
