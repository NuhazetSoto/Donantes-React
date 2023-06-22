/*import { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import './AccesoSanitarioDatAct.css'
import { getOneSanitario, updateOneSanitario } from '../../services/sanitario.service'

function AccesoSanitarioDatAct() {

  let [email, setEmail] = useState('')
  let [telefono, setTelefono] = useState('')
  let [direccion, setDireccion] = useState('')
  let [localidad, setLocalidad] = useState('')
  let [userData, setUserData] = useState([])

  

  const updateData = async () => {    
    console.log(email. telefono, direccion, localidad)
    const result = await updateOneSanitario(localStorage.getItem('id'), email,telefono,direccion,localidad, userData)
    
  }
  useEffect(() => {
    const getUserData = async () => {
      const data = await getOneSanitario(localStorage.getItem('id'))
      setUserData(data)
    }
    getUserData()
  }, [])

const handleEmail = (e) => {
  setEmail(e.target.value)
}
const handleTelefono = (e) => {
  setTelefono(e.target.value)
}
const handleDireccion = (e) => {
  setDireccion(e.target.value)
}
const handleLocalidad = (e) => {
  setLocalidad(e.target.value)
}

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
            to={'/login/sanitario'}
          >
            Listado de pacientes
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
            to={'/login/sanitario/ubicacion'}
          >
            Ubicación
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
            to={'/login/sanitario/misdatos'}
          >
            Mis datos
          </Link>
        </Button>
      </div>

      <div className="card">
        {/**pop up a partir de aqui y que englobe todo el card 
        
        <Card
          sx={{
            minWidth: '500px',
            width: '400px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            border: '1px solid black',
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              margin: 2,
              height: '100px',
              marginRight: '50px',
              marginTop: '50px',
            }}
          >
            Información Personal
          </Typography>
          <CardContent
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <List
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                fontWeight: 'bold',
              }}
            >
              <
              >
                <ListItem>-Nombre:</ListItem>
                <ListItem>-Apellidos:</ListItem>
                <ListItem>-DNI </ListItem>
                <ListItem>
                  -Email
                  <TextField
                    onChange={handleEmail}
                    sx={{
                      marginLeft: '20px',
                    }}
                    variant="outlined"
                    margin="dense"
                  />
                </ListItem>
                <ListItem>
                  -TLF
                  <TextField
                    onChange={handleTelefono}
                    sx={{
                      marginLeft: '20px',
                    }}
                    variant="outlined"
                    margin="dense"
                  />
                </ListItem>
                <ListItem
                  fullWidth
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                ></ListItem>

                <ListItem
                  fullWidth
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  -Fecha de nacimiento
                </ListItem>
                <ListItem>
                  -Dirección
                  <TextField
                    onChange={handleDireccion}
                    sx={{
                      marginLeft: '20px',
                    }}
                    variant="outlined"
                    margin="dense"
                  />
                </ListItem>
                <ListItem>
                  -Localidad
                  <TextField
                    onChange={handleLocalidad}
                    sx={{
                      marginLeft: '20px',
                    }}
                    variant="outlined"
                    margin="dense"
                  />
                </ListItem>
              </>
            </List>
          </CardContent>
        </Card>

        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column-reverse',
            justifyContent: 'space-between',
            marginLeft: '100px',
          }}
        >
          <Link
            style={{ color: 'inherit', textDecoration: 'none' }}
            to={'/login/sanitario/misdatos/actualizar/guardado'}
          >
            <Button
              sx={{
                alignContent: 'end',
                backgroundColor: '#BF0021',
                marginLeft: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              variant="contained"
              color="error"
              onClick={updateData}
            >
              Guardar
            </Button>
          </Link>
          <Link style={{ color: 'inherit', textDecoration: 'none' }} to={'/'}>
            <Button
              sx={{
                alignContent: 'end',
                backgroundColor: '#BF0021',
                marginLeft: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              variant="contained"
              color="error"
            >
              Cerrar sesión
            </Button>
          </Link>
        </Box>
      </div>
    </>
  )
}

export default AccesoSanitarioDatAct*/
 
import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Card, CardContent, List, ListItem, TextField } from '@mui/material'
import { useState, useEffect } from 'react'
import { useSpring } from '@react-spring/web'
import { animated } from '@react-spring/web'
import PropTypes from 'prop-types'
import { getOneSanitario, updateOneSanitario } from '../../services/sanitario.service'
import { Link, redirect } from 'react-router-dom'
 
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

export default function BasicModal({getData}) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
    let [email, setEmail] = useState('')
    let [telefono, setTelefono] = useState('')
    let [direccion, setDireccion] = useState('')
    let [localidad, setLocalidad] = useState('')
    let [userData, setUserData] = useState([])

    const updateData = async () => {
      const result = await updateOneSanitario(
        localStorage.getItem('id'),
        email,
        telefono,
        direccion,
        localidad,
        userData
      )
      handleClose()
      await getData()
      
    }
    useEffect(() => {
      const getUserData = async () => {
        const data = await getOneSanitario(localStorage.getItem('id'))
        setUserData(data)
      }
      getUserData()
    }, [])

    const handleEmail = (e) => {
      setEmail(e.target.value)
    }
    const handleTelefono = (e) => {
      setTelefono(e.target.value)
    }
    const handleDireccion = (e) => {
      setDireccion(e.target.value)
    }
    const handleLocalidad = (e) => {
      setLocalidad(e.target.value)
    }
console.log(email)
console.log(localidad)
console.log(direccion)


  return (
    <div>
      <Button
        sx={{
          alignContent: 'end',
          backgroundColor: '#BF0021',
          marginLeft: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          width: '125px'
        }}
        onClick={handleOpen}
      >
        Editar
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              margin: 2,
              height: '100px',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: '50px',
              marginTop: '50px',
            }}
          >
            Información Personal
          </Typography>
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              fontWeight: 'bold',
            }}
          >
            <>
              <ListItem>
                Email
                <TextField
                  onChange={handleEmail}
                  sx={{
                    marginLeft: '50px',
                  }}
                  variant="outlined"
                  margin="dense"
                />
              </ListItem>
              <ListItem>
                TLF
                <TextField
                  onChange={handleTelefono}
                  sx={{
                    marginLeft: '63px',
                  }}
                  variant="outlined"
                  margin="dense"
                />
              </ListItem>
              <ListItem
                fullWidth
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              ></ListItem>
              <ListItem>
                Dirección
                <TextField
                  onChange={handleDireccion}
                  sx={{
                    marginLeft: '20px',
                  }}
                  variant="outlined"
                  margin="dense"
                />
              </ListItem>
              <ListItem>
                Localidad
                <TextField
                  onChange={handleLocalidad}
                  sx={{
                    marginLeft: '20px',
                  }}
                  variant="outlined"
                  margin="dense"
                />
              </ListItem>
            </>
          </List>
          <Button
            sx={{
              alignContent: 'end',
              backgroundColor: '#BF0021',
              marginLeft: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            variant="contained"
            color="error"
            onClick={updateData}
          >
            Guardar
          </Button>
        </Box>
      </Modal>
    </div>
  )
}