import { useState, useEffect } from 'react'
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
        {/**pop up a partir de aqui y que englobe todo el card */}
        <Card
          sx={{
            minWidth: '500px',
            width: '400px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
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
              <ListItem>-nombre:</ListItem>
              <ListItem>-apellidos:</ListItem>
              <ListItem>-DNI </ListItem>
              <ListItem>
                -Email
                <TextField
                  onChange={handleEmail}
                  sx={{}}
                  variant="outlined"
                  margin="dense"
                />
              </ListItem>
              <ListItem>
                -TLF
                <TextField
                  onChange={handleTelefono}
                  sx={{}}
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
                  sx={{}}
                  variant="outlined"
                  margin="dense"
                />
              </ListItem>
              <ListItem>
                -Localidad
                <TextField
                  onChange={handleLocalidad}
                  sx={{}}
                  variant="outlined"
                  margin="dense"
                />
              </ListItem>
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
          <Link
            style={{ color: 'inherit', textDecoration: 'none' }}
            to={'/login'}
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
            >
              Cerrar sesión
            </Button>
          </Link>
        </Box>
      </div>
    </>
  )
}

export default AccesoSanitarioDatAct
 
 

  