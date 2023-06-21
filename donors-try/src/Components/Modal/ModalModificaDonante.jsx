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
import { api } from '../../services/api'
import { useEffect } from 'react'

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

export default function ModalModificaDonante({user, handleUpdate}) {
  const [open, setOpen] = useState(false)
  const [editedData, setEditedData] = useState({})
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleModify = async () => {
    console.log(editedData)
    console.log(localStorage.getItem('token'))
    try {
      const respuesta = await api.put(
        `/user/${editedData.id}`,
        {
          dni: editedData.dni,
          name: editedData.name,
          lastname: editedData.lastname,
          phone: editedData.phone,
          fecha_nacimiento: editedData.fecha_nacimiento,
          email: editedData.email,
          password: editedData.password,
          hemorhId: editedData.hemorhId,
          hemogrupoId: editedData.hemogrupoId,
          localidad: editedData.localidad,
          direccion: editedData.direccion,
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
    setEditedData(user)
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
        Editar
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
            <Typography id="spring-modal-title" variant="h4" component="h5">
              <Typography> Modifica Datos del Donante :</Typography>
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Nombre
            </Typography>
            <TextField
              name="name"
              value={editedData.name || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Apellidos
            </Typography>
            <TextField
              name="lastname"
              value={editedData.lastname || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Telefono
            </Typography>
            <TextField
              name="phone"
              value={editedData.phone || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Fecha de nacimiento
            </Typography>
            <TextField
              name="fecha_nacimiento"
              value={editedData.fecha_nacimiento || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Email
            </Typography>
            <TextField
              name="email"
              value={editedData.email || ''}
              onChange={handleInputChange}
            />
                        <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Localidad
            </Typography>
            <TextField
              name="localidad"
              value={editedData.localidad || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Direccion
            </Typography>
            <TextField
              name="direccion"
              value={editedData.direccion || ''}
              onChange={handleInputChange}
            />
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
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
