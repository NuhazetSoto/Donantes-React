import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Card, Typography } from '@mui/material';
import Search from '../../Search/Search'
import { getAllUsers } from '../../../services/user.service';
import { useEffect, useState } from 'react';
import TableSearch from '../../Search/TableSearch';
import '../DataTableShow/ShowDataTableUsuarios.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'dni', headerName: 'DNI', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'lastname', headerName: 'Last name', width: 130 },
  {
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
    field: 'role',
    headerName: 'role',
    type: 'string',
    width: 90,
  },
  {
    field: 'hemorhId',
    headerName: 'hemorhId',
    type: 'string',
    width: 90,
  },
  {
    field: 'hemogrupoId',
    headerName: 'hemogrupoId',
    type: 'string',
    width: 90,
  },
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
        <Search />
        <Typography
          variant="h7"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            display: { xs: 'none', sm: 'block' },
            margin: 0,
            marginLeft: '25px',
          }}
        >
          Fecha: 14/07/2023
        </Typography>

        <Typography
          variant="h7"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            display: { xs: 'none', sm: 'block' },
            margin: 0,
          }}
        >
          Punto: Hospital Negrin
        </Typography>
      </Box>
    <Card sx= {{marginTop:'20px'}}>
      
      <TableSearch/>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={users}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </Card>
    </Card>
  )
}