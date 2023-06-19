import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Card } from '@mui/material';

import { getAllUsers } from '../../../services/user.service';
import { useEffect, useState } from 'react';
import TableSearch from '../../Search/TableSearch';

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
  )
}