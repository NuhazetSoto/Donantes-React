import * as React from 'react'
import PropTypes from 'prop-types'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSpring, animated } from '@react-spring/web'
import { TextField } from '@mui/material'
import { useState } from 'react'
import { createPunto } from '../../services/puntos.service'
import { Link } from 'react-router-dom'

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

export default function ModalCrearUsuario( {handleCreate} ) {
  const [open, setOpen] = React.useState(false)
  const [newPunto, setNewPunto] = useState({})

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setNewPunto((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleResponse = async () => {
    const res = await createPunto(newPunto)
    console.log(res.statusText)
    handleClose()
    handleCreate()
    console.log('Punto creado')
  }

  return (
    <div>
      <Button
        sx={{
          alignContent: 'end',
          backgroundColor: '#BF0021',
          marginLeft: '8px',
          margin: '5px',
        }}
        variant="contained"
        color="error"
        onClick={handleOpen}
      >
        Crear Nuevo Punto
      </Button>
      <Box>
        <Button
          sx={{
            alignContent: 'end',
            backgroundColor: '#BF0021',
            marginLeft: '10px',
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            margin: '5px',
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
            <Typography id="spring-modal-title" variant="h5" component="h5">
              Nuevo Punto:
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Nombre
            </Typography>
            <TextField
              name="pextraccion_name"
              value={newPunto.pextraccion_name || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Tipo
            </Typography>
            <TextField
              name="pextraccion"
              value={newPunto.pextraccion || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Horario
            </Typography>
            <TextField
              name="pextraccion_horario"
              value={newPunto.pextraccion_horario || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Telefono
            </Typography>
            <TextField
              name="pextraccion_tlf"
              value={newPunto.pextraccion_tlf || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Loc
            </Typography>
            <TextField
              name="loc_gps"
              value={newPunto.loc_gps || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Email
            </Typography>
            <TextField
              name="pextraccion_isla"
              value={newPunto.pextraccion_isla || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Direccion
            </Typography>
            <TextField
              name="pextraccion_direccion"
              value={newPunto.pextraccion_direccion || ''}
              onChange={handleInputChange}
            />
            <Button
              sx={{
                alignContent: 'end',
                backgroundColor: '#BF0021',
                marginLeft: '8px',
              }}
              variant="contained"
              color="error"
              onClick={handleResponse}
            >
              Crear
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
