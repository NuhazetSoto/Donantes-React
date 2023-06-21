import * as React from 'react'
import PropTypes from 'prop-types'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSpring, animated } from '@react-spring/web'
import { TextField } from '@mui/material'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import DeleteModalPunto from './DeleteModalPunto'

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
  height: '100vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function SpringModalPuntos({ puntos, hadleUpdate }) {
  const [open, setOpen] = React.useState(false)
  const [editedData, setEditedData] = useState({})

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleModify = async () => {
    console.log(editedData)
    console.log(localStorage.getItem('token'))
    try {
      const respuesta = await api.put(
        `/puntoextraccion/${editedData.id}`,
        {
          loc_gps: editedData.loc_gps,
          pextraccion: editedData.pextraccion,
          pextraccion_name: editedData.pextraccion_name,
          pextraccion_isla: editedData.pextraccion_isla,
          pextraccion_direccion: editedData.pextraccion_direccion,
          pextraccion_tlf: editedData.pextraccion_tlf,
          pextraccion_horario: editedData.pextraccion_horario,
        },
        {
          headers: { token: localStorage.getItem('token') },
        }
      )
      if (respuesta) {
        console.log('Datos actualizados')
        hadleUpdate()
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
    setEditedData(puntos)
  }, [])

  const handleDelete = async () => {
    try {
      const respuesta = await api.delete(`/puntoextraccion/${editedData.id}`, {
        headers: { token: localStorage.getItem('token') },
      })
      if (respuesta) {
        console.log('Punto eliminado')
        hadleUpdate()
        handleClose()
      } else {
        console.error(' No se pudo elimnar al punto')
      }
    } catch (error) {
      console.error('Error al eliminar el Punto', error)
    }
  }

  return (
    <div>
      <Button onClick={handleOpen}>Editar</Button>
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
              Loc
            </Typography>
            <TextField
              name="loc_gps"
              value={editedData.loc_gps || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Tipo
            </Typography>
            <TextField
              name="pextraccion"
              value={editedData.pextraccion || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Nombre
            </Typography>
            <TextField
              name="pextraccion_name"
              value={editedData.pextraccion_name || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Isla
            </Typography>
            <TextField
              name="pextraccion_isla"
              value={editedData.pextraccion_isla || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Direccion
            </Typography>
            <TextField
              name="pextraccion_direccion"
              value={editedData.pextraccion_direccion || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Telefono
            </Typography>
            <TextField
              name="pextraccion_tlf"
              value={editedData.pextraccion_tlf || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Horario
            </Typography>
            <TextField
              name="pextraccion_horario"
              value={editedData.pextraccion_horario || ''}
              onChange={handleInputChange}
            />
            <Button onClick={handleModify}>Modificar</Button>
            <DeleteModalPunto handleDelete={handleDelete} />
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
