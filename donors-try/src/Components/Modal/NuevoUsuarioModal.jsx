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
import { createUser } from '../../services/user.service'

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

export default function ModalCrearUsuario({handleCreate}) {
  const [open, setOpen] = React.useState(false)
  const [newUser, setNewUser] = useState({})

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

   
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setNewUser((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  } 

  const handleResponse = async () => {    
    const res = await createUser(newUser)
    console.log(res.statusText)
    handleClose()
    handleCreate()
    console.log('Usuario creado')
    }
  
  return (
    <div>
      <Button
        sx={{
          alignContent: 'end',
          backgroundColor: '#BF0021',
          marginLeft: '8px',
        }}
        variant="contained"
        color="error"
        onClick={handleOpen}
      >
        Crear Nuevo Usuario
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
            <Typography id="spring-modal-title" variant="h5" component="h5">
              Nuevo Usuario:
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              DNI
            </Typography>
            <TextField
              name="dni"
              value={newUser.dni || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Nombre
            </Typography>
            <TextField
              name="name"
              value={newUser.name || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Apellidos
            </Typography>
            <TextField
              name="lastname"
              value={newUser.lastname || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Telefono
            </Typography>
            <TextField
              name="phone"
              value={newUser.phone || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Fecha de nacimiento
            </Typography>
            <TextField
              name="fecha_nacimiento"
              value={newUser.fecha_nacimiento || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Email
            </Typography>
            <TextField
              name="email"
              value={newUser.email || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Password
            </Typography>
            <TextField
              name="password"
              value={newUser.password || ''}
              onChange={handleInputChange}
            />
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Role
            </Typography>
            <TextField
              name="role"
              value={newUser.role || ''}
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
