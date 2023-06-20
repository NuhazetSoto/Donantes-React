import {Button,Card,CardActions,CardContent,Typography,} from '@mui/material'
import { Link } from 'react-router-dom'
import './CitaDonante.css'
import PuntoDonacion from '../../../Components/PuntoDonacion/PuntoDonacion'
import SpringModal from '../../../Components/Modal/ModalConfirmarCita'
import CommonlyUsedComponents from '../../../Components/FechaCita/FechaHoraCita'
import ModalSolicitaCita from '../../../Components/Modal/ModalSolicitaCita'

function CitaDonante() {
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
        <Card><ModalSolicitaCita /></Card>
      </div>
     
    </>
  )
}

export default CitaDonante
