import {
  Button,
  Card,
  CardActions,
  CardContent,
} from '@mui/material'
import { Link } from 'react-router-dom'
import './CitaDonante.css'
import FechaCita from '../../../Components/FechaCita/FechaCita'
import HoraCita from '../../../Components/FechaCita/HoraCita'
import PuntoDonacion from '../../../Components/PuntoDonacion/PuntoDonacion'
import SpringModal from '../../../Components/Modal/ModalConfirmarCita'

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
        <Card
          className="card"
          sx={{
            display: 'grid',
            grid: 'auto',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
          }}
        >
          <CardContent className="fechora">
            <FechaCita />
            <HoraCita />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.88508388541416!2d-15.43072381204971!3d28.141576168761077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40953f84403415%3A0x31e7d72de259fa8d!2sC.%20Luis%20Morote%2C%206%2C%203%C2%BA%20-%205%2C%2035007%20Las%20Palmas%20de%20Gran%20Canaria%2C%20Las%20Palmas!5e0!3m2!1ses!2ses!4v1686829753757!5m2!1ses!2ses"
              width="600"
              height="300"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
            <PuntoDonacion />
          </CardContent>
          <CardActions>
            <SpringModal>
              <Link
                style={{ color: 'inherit', textDecoration: 'none' }}
                to={'/login/donante'}
              >
                Confirmar Cita
              </Link>
            </SpringModal>
          </CardActions>
        </Card>
      </div>
    </>
  )
}

export default CitaDonante
