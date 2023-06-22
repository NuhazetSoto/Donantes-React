import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { getAllUsers } from '../../../services/user.service';
import { useEffect, useState } from 'react';
import '../DataTableShow/ShowDataTableUsuarios.css';

const columns = [
  { field: 'hora_cita', headerName: 'Hora', width: 130 },
  /*{ field: 'id', headerName: 'ID', width: 70 },*/
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'dni', headerName: 'DNI', width: 130 },
  { field: 'phone', headerName: 'Phone', width: 130 },
  {
    field: 'extraccion',
    headerName: 'Successful extraccion',
    width: 160,
  },

  {
    field: 'comentario',
    headerName: 'Comments',
    width: 130,
  },

  /*{
    field: 'phone',
    headerName: 'phone',
    type: 'number',
    width: 90,
  },
  {
    field: 'fecha_nacimiento',
    headerName: 'Fecha de nacimiento',
    type: 'number',
    width: 90,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 160,
  },

  
  {
    field: 'hemogrupoId',
    headerName: 'hemogrupoId',
    type: 'string',
    width: 90,
  },*/
]

export default function ShowDataTableUsuarios() {
  const [users, setUsers]= useState([])

  const showData = async () => {
    const data= await getAllUsers()
    
    console.log(data)
    setUsers(data)
  }

  
  useEffect(() => {
    showData()
  }, [])
  
  return (
    <Card sx={{ marginTop: '20px' }}>
      <Box className="title">
       
        <Typography
          variant="h7"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            display: { xs: 'none', sm: 'block' },
            margin: 0,
            marginLeft: '130px',
            marginTop: '30px',
            marginBottom: '10px',
          }}
        >
          Fecha:
        </Typography>
        <Typography
          sx={{
            marginRight: '980px',
            marginTop: '30px',
            marginLeft: '5px',
            marginBottom: '10px',
          }}
        >
          {' '}
          14/07/2023
        </Typography>

        <Typography
          variant="h7"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            display: { xs: 'none', sm: 'block' },
            margin: 0,
            marginLeft: '75px',
            marginTop: '30px',
            marginBottom: '10px',
            marginRight:'5px'
          }}
        >
          Punto:{' '}
        </Typography>

        <Typography
          sx={{
            marginRight: '990px',
            marginLeft: '5px',
          }}
        >Hospital Negrin
        </Typography>
      </Box>
      <Card sx={{ marginTop: '20px' }}>
        <div style={{ height: 400, width: '100%' }}>
          {<DataGrid

            rows={users}

            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />}
        </div>
      </Card>
    </Card>
  )
}