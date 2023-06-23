import { Box, Button, Card, CardContent, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import './HistoricoDonante.css'
import { useState, useEffect } from 'react'
import { getOneDonante } from '../../../services/donante.service'
import { Divider } from '@material-ui/core';

const columns = [
  { field: 'fecha_donacion', headerName: 'Fecha Donacion', width: 70 },
  { field: 'estado_donacion', headerName: 'Estado Donacion', width: 130 },
  { field: 'informe', headerName: 'Informe Donacion', width: 130 },
 ]

export default function HistoricoDonante() {
  const [user, setUser] = useState([])
  const showUser = async () => {
    const data = await getOneDonante()
    setUser(data)
    
  }
  useEffect(() => {
    showUser()
  }, [])


  
  const mapCita = () => {
    console.log(user)
    const citum = user.cita
    console.log(citum)
    return citum.map((c) => {
      console.log(c.fecha_cita)
      return (
        <>
            <ListItem>
              <Divider/>
              <Typography>Cita : {c.fecha_cita}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Hora : {c.hora_cita}</Typography>
            </ListItem>
            

        </>
      )})}

   const mapAnalitica = () => {
    const inform = [user.informeextraccion]

     return inform.map((i) => {
       return (
         <>
           <ListItem>
             <Typography>Analitica : {i.analitica}</Typography>
           </ListItem>
           
         </>
       )})
   }

  if (user.length !== 0) {



    
  // console.log(algo)
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
              to={'/login/donante'}
            >
              Mis Datos
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
              to={'/login/citadonante'}
            >
              Pedir Cita
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
              to={'/login/historico'}
            >
              Historico
            </Link>
          </Button>
          <Box sx={{ paddingLeft: '50px' }}>
            <Button
              sx={{
                alignContent: 'end',
                backgroundColor: '#BF0021',
                marginLeft: '10px',
                display: 'flex',
                justifyContent: 'flex-end',
                flexDirection: 'row',
              }}
              variant="contained"
              color="error"
              onClick={() => {
                localStorage.removeItem('token')
                localStorage.removeItem('id')
                localStorage.removeItem('role')
              }}
            >
              <Link
                style={{ color: 'inherit', textDecoration: 'none' }}
                to={'/'}
              >
                Cerrar sesión
              </Link>
            </Button>
          </Box>
        </div>
        <div></div>
        <div className="card">
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
              Historico de extracciones
            </Typography>

            <Card>
              <List>
                  <ListItem>
                    <Typography>
                      <Divider variant="inset" component="Li" />
                      {mapCita()} {mapAnalitica()}
                    </Typography>
                  </ListItem>
              </List>
            </Card>
          </Card>
        </div>
      </>
    )
  }
}
