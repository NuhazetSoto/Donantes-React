import {Button} from '@mui/material'
import { Link } from 'react-router-dom'
import './CitaDonante.css'
import ModalSolicitaCita from '../../../Components/Modal/ModalSolicitaCita'
import { useEffect } from 'react'
import { useState } from 'react'
import { getAllUsers } from '../../../services/user.service'

function CitaDonante() {
  const[data, setData] = useState([])

  const handleData = async () => {
    const algo = await getAllUsers()
 
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
      </div>
      <div>
        <ModalSolicitaCita cita={data} />
      </div>
    </>
  )
}

export default CitaDonante
