import * as React from 'react'
import PropTypes from 'prop-types'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSpring, animated } from '@react-spring/web'
import { CardActions, CardContent, TextField } from '@mui/material'
import SpringModal from './ModalConfirmarCita'
import { Link } from 'react-router-dom'
import CommonlyUsedComponents from '../FechaCita/FechaHoraCita'
import PuntosDonacion from '../../Pages/PuntosDonacion/PuntosDonacion'
import { Card } from '@material-ui/core'

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true)
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true)
      }
    },
  })

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  )
})

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function ModalSolicitaCita() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          alignContent: 'end',
          backgroundColor: '#BF0021',
          marginLeft: '8px',
        }}
        variant="contained"
        color="error"
      >
        Solcitar Cita
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
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
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.88508388541416!2d-15.43072381204971!3d28.141576168761077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40953f84403415%3A0x31e7d72de259fa8d!2sC.%20Luis%20Morote%2C%206%2C%203%C2%BA%20-%205%2C%2035007%20Las%20Palmas%20de%20Gran%20Canaria%2C%20Las%20Palmas!5e0!3m2!1ses!2ses!4v1686829753757!5m2!1ses!2ses"
                    width="600"
                    height="300"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                  <CardContent>
                    <Typography>
                      Seleccione Isla y Punto de donacion:
                      <PuntosDonacion />
                    </Typography>
                    <Typography>
                      Seleccione Fecha y Hora: <CommonlyUsedComponents />
                    </Typography>
                  </CardContent>
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
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
