
import React from 'react'
import Header from '../../Components/Header/Header'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import DataTableUsuarios from '../../Components/DataTable/DataTableUsuario'
import DataTablePuntos from '../../Components/DataTable/DataTablePuntos'


function Pruebas() {
    return (
    <>
      <Header />
      <div className="cards" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Card
          className="card"
          sx={{ minWidth: '900px' }}
          raised={true}
          style={{ background: '##ff5232 ' }}
        >
          <CardContent>
            
              <Typography
                variant="h4"
                component="div"
                sx={{
                    flexGrow: 1,
                    display: { xs: 'none', sm: 'block' },
                    margin: 0,
                }}
                >
                Usuarios
                  <DataTableUsuarios/>
              </Typography>
          </CardContent>
        </Card>
        <Card
          className="card"
          sx={{ minWidth: '900px' }}
          raised={true}
          style={{ background: '##ff5232 ' }}
        >
          <CardContent>
           
              <Typography
                variant="h4"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', sm: 'block' },
                  margin: 0,
                }}
              >
                Puntos de Extraccion
              </Typography>
              <DataTablePuntos/>
              
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Pruebas