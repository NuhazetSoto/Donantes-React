import { Button, Card, CardContent, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import './HistoricoDonante.css'

function HistoricoDonante() {
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
      </div>
      <div className="card">
        <Card sx={{ alignContent: 'center', minWidth: '400px' }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              margin: 2,
            }}
          >
            Historico de Donaciones:
          </Typography>
          <CardContent>
            <List>
              <ListItem>Fecha Donacion: </ListItem>
              <ListItem>Estado Donacion: </ListItem>
              <ListItem>
                Informe donación: Tuinforme.pdf
                <Button>
                  <Link
                    style={{ color: 'inherit', textDecoration: 'none' }}
                    to={''}
                  >
                    <CloudDownloadIcon />
                  </Link>
                </Button>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </div>
    </>
  )
}


export default HistoricoDonante