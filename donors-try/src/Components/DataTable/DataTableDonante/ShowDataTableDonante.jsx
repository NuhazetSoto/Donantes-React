import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import {
  Button,
  Card,
  CardContent,
  List,
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
  const [cita, setCita] = useState('')
  const [actualizar, setActualizar] = useState(false)
  const showUser = async () => {
    const data = await getOneDonante()
    setUser(data)
    
  }

  function handleUpdate(){
    setActualizar(!actualizar)
  }

    //  const selectCita = (data) => {
    //    const index = data.cita.length - 1

    //    return cit
    //  }
    //  selectCita()

     const viewCita = () => {
      console.log(user)
     
     }


  useEffect(() => {
    showUser()
  }, [actualizar])


  if(user.length !== 0) {
    const dire = user.puntoextraccions[user.puntoextraccions.length -1]

    const fechaHora = user.cita[user.cita.length - 1]
  // console.log(algo)

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
            Grupo Sanguineo: {user.hemogrupo.hemogrupo}   {user.hemorh.hemorh}
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
          <Typography>Fecha: {fechaHora.fecha_cita}</Typography>
        </ListItem>
        <ListItem>
          <Typography>Hora: {fechaHora.hora_cita}</Typography>
        </ListItem>
        <ListItem>
          <Typography>Direccion: {dire.pextraccion_name}</Typography>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.8677358711534!2d-15.447065723751939!3d28.120060875948337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4095a9ee5560bb%3A0xe179496aac2b7aad!2sHospital%20Universitario%20de%20Gran%20Canaria%20Doctor%20Negr%C3%ADn!5e0!3m2!1ses!2ses!4v1687427911606!5m2!1ses!2ses"
            width="400"
            height="300"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </CardContent>
        <ListItem>
          <Typography>LOC GPS: {dire.loc_gps}</Typography>
        </ListItem>
        
      </Card>
    </>
  )}


}
  
