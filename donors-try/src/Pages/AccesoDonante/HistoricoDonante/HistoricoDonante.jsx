import { Box, Button, Card, CardContent, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import './HistoricoDonante.css'
import { useState, useEffect } from 'react'
import { getOneDonante } from '../../../services/donante.service'

const columns = [
  { field: 'fecha_donacion', headerName: 'Fecha Donacion', width: 70 },
  { field: 'estado_donacion', headerName: 'Estado Donacion', width: 130 },
  { field: 'informe', headerName: 'Informe Donacion', width: 130 },
 ]

export default function HistoricoDonante() {
  const [user, setUser] = useState([])
  const showUser = async () => {
    const data = await getOneDonante()
    console.log(data)
    setUser(data)
  }
  useEffect(() => {
    showUser()
  }, [])

  if (user.length !== 0) {
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
              Mis Datos
            </Typography>
            <List>
              <ListItem>
                <Typography>
                  Fecha Donacion: {user.cita[0].fecha_cita}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Estado Donacion: {user.cita[0].hora_cita}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Informe: {user.informeextraccion.analitica}
                </Typography>
              </ListItem>
            </List>
          </Card>
        </div>
      </>
    )
  }
}
