import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import {
  Button,
  Card,
  CardContent,
  ListItem,
  Typography,
} from '@mui/material'
import { useState, useEffect } from 'react'
import { getOneDonante } from '../../../services/donante.service'
import { Link } from 'react-router-dom'
import ModalModificaDonante from '../../Modal/ModalModificaDonante'

const columns = [
  { field: 'dni', headerName: 'DNI', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'lastname', headerName: 'Last name', width: 130 },
  { field: 'phone', headerName: 'phone', type: 'number', width: 90 },
  { field: 'fecha_nacimiento', headerName: 'Fecha de nacimiento', type: 'number',width: 90},
  { field: 'email', headerName: 'Email', width: 160 },
  { field: 'hemorhId', headerName: 'hemorhId', type: 'string', width: 90 },
  { field: 'hemogrupoId', headerName: 'hemogrupoId', type: 'string', width: 90},
]

export default function DataTableDonante() {
  const [user, setUser] = useState([])
  const [actualizar, setActualizar] = useState(false)
  const showUser = async () => {
    const data = await getOneDonante()
    console.log(data)
    setUser(data)
  }
  function handleUpdate(){
    setActualizar(!actualizar)
  }
  useEffect(() => {
    showUser()
  }, [actualizar])
  if(user.length !== 0) {
  return (
    <>
      <Card sx={{ minWidth: '400px' }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'block' },
            margin: 2,
          }}
        >
          Mis Datos
        </Typography>
        <ListItem>
          <Typography>Nombre: {user.name}</Typography>
        </ListItem>
        <ListItem>
          <Typography>Apellidos: {user.lastname}</Typography>
        </ListItem>
        <ListItem>
          <Typography>Tlf: {user.phone}</Typography>
        </ListItem>
        <ListItem>
          <Typography>F.Nac: {user.fecha_nacimiento}</Typography>
        </ListItem>
        <ListItem>
          <Typography>email: {user.email}</Typography>
        </ListItem>
        <ListItem>
          <Typography>
            Grupo Sanguineo: {user.hemogrupo.hemogrupo} {user.hemorh.hemorh}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>Localidad: {user.localidad}</Typography>
        </ListItem>
        <ListItem>
          <Typography>Direccion: {user.direccion}</Typography>
        </ListItem>
        <ModalModificaDonante user={user} handleUpdate={handleUpdate} />
      </Card>
      <Card>
        <Typography
          variant="h5"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'block' },
            margin: 2,
          }}
        >
          Proxima Cita
        </Typography>
        <ListItem>
          <Typography>Fecha: {user.cita[3].fecha_cita}</Typography>
        </ListItem>
        <ListItem>
          <Typography>Hora: {user.cita[3].hora_cita}</Typography>
        </ListItem>
        <ListItem>
          <Typography>
            Direccion: {user.puntoextraccions[0].pextraccion_name}
          </Typography>
        </ListItem>
      </Card>
      <Card>
        <Typography
          variant="h5"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'block' },
            margin: 2,
          }}
        >
          Localizacion:
        </Typography>
        <CardContent>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.097400780325!2d-15.422312499999999!3d28.113062499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4094518b44a92f%3A0x93e6c93dfe9219fb!2s4H7H%2B63%2C%20Las%20Palmas!5e0!3m2!1ses!2ses!4v1687251784343!5m2!1ses!2ses"
            width="400"
            height="300"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </CardContent>
        <ListItem>
          <Typography>LOC GPS: {user.puntoextraccions[0].loc_gps}</Typography>
        </ListItem>
      </Card>
    </>
  )}


}
  
