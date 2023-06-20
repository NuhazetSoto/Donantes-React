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
import { useState } from 'react'
import { useEffect } from 'react'
import { api } from '../../services/api'
import CustomizedSelects from '../PuntoDonacion/PuntoDonacion'

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

export default function ModalSolicitaCita({ cita, handleUpdate }) {
  const [open, setOpen] = React.useState(false)
  const [editedData, setEditedData] = useState({})
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleModify = async () => {
    console.log(editedData)
    console.log(localStorage.getItem('token'))
    try {
      const respuesta = await api.create(
        `/`,
        {
          fecha_cita: editedData.fecha_cita,
          hora_cita: editedData.hora_cita,
        },
        {
          headers: { token: localStorage.getItem('token') },
        }
      )
      if (respuesta) {
        console.log('Datos actualizados')
        handleUpdate()
        handleClose()
      } else {
        console.error('Fallo al actualizar datos')
      }
    } catch (error) {
      console.error('Fallo al actualizar los datos', error)
    }
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  useEffect(() => {
    setEditedData(cita)
  }, [])

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
              <CardContent>
                <CardContent>
                  <Typography>
                    Seleccione Isla y Punto de donacion:
                    <CustomizedSelects />
                  </Typography>
                  <Typography>
                    Seleccione Fecha y Hora: 
                    
                    
                   </Typography>
                </CardContent>
              </CardContent>
                <Button
                  onClick={handleModify}
                  sx={{
                    alignContent: 'end',
                    backgroundColor: '#BF0021',
                    marginLeft: '8px',
                  }}
                  variant="contained"
                  color="error"
                >
                  Confirmar
                </Button>
            </Card>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
