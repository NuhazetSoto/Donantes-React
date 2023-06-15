import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nombre', headerName: 'Nombre', width: 130 },
  { field: 'apellidos', headerName: 'Apellidos', width: 130 },
  {
    field: 'telefono',
    headerName: 'Telefono',
    type: 'number',
    width: 90,
  },
  {
    field: 'fecha',
    headerName: 'Fecha de Nacimiento',
    width: 130,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 90,
  },
  {
    field: 'role',
    headerName: 'Role',
    width: 90,
  },
]

const rows = [
  { id: 1, nombre: 'Snow', apellidos: 'Jon', telefono: 35, fecha: '30/02/1997', email:'un@email.es', role: 'Admin'},
  { id: 2, nombre: 'Lannister', apellidos: 'Cersei', telefono: 42, fecha: '30/02/1997', email:'un@email.es', role: 'Admin'},
  { id: 3, nombre: 'Lannister', apellidos: 'Jaime', telefono: 45, fecha: '30/02/1997', email:'un@email.es', role: 'Admin'},
  { id: 4, nombre: 'Stark', apellidos: 'Arya', telefono: 16, fecha: '30/02/1997', email:'un@email.es', role: 'Admin'},
  { id: 5, nombre: 'Targaryen', apellidos: 'Daenerys', telefono: null, fecha: '30/02/1997', email:'un@email.es', role: 'Admin'},
  { id: 6, nombre: 'Melisandre', apellidos: null, telefono: 150, fecha: '30/02/1997', email:'un@email.es', role: 'Admin'},
  { id: 7, nombre: 'Clifford', apellidos: 'Ferrara', telefono: 44, fecha: '30/02/1997', email:'un@email.es', role: 'Admin'},
  { id: 8, nombre: 'Frances', apellidos: 'Rossini', telefono: 36, fecha: '30/02/1997', email:'un@email.es', role: 'Admin'},
  { id: 9, nombre: 'Roxie', apellidos: 'Harvey', telefono: 65, fecha: '30/02/1997', email:'un@email.es', role: 'Admin'},
]

export default function DataTableUsuarios() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
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
  )
}
