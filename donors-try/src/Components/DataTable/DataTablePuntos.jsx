import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nombre', headerName: 'Nombre', width: 130 },
  { field: 'tipo', headerName: 'Tipo', width: 130 },
  {
    field: 'horario',
    headerName: 'Horario',
    width: 90,
  },
  {
    field: 'telefono',
    headerName: 'Telefono',
    type: 'number',
    width: 90,
  },
  {
    field: 'loc',
    headerName: 'Loc gps',
    width: 130,
  },
  { field: 'isla', headerName: 'Isla', width: 130 },
  {
    field: 'direccion',
    headerName: 'Direccion',
    width: 90,
  },
]

const rows = [
  {
    id: 1,
    nombre: 'Snow',
    tipo: 'Movil',
    horario: '08-22',
    telefono: '928 452 489',
    loc: 'un@email.es',
    isla: 'Admin',
    direccion: 'lñmĺasfvopkae',
  },
  {
    id: 1,
    nombre: 'Snow',
    tipo: 'Movil',
    horario: '08-22',
    telefono: '928 452 489',
    loc: 'un@email.es',
    isla: 'Admin',
    direccion: 'lñmĺasfvopkae',
  },
  {
    id: 1,
    nombre: 'Snow',
    tipo: 'Movil',
    horario: '08-22',
    telefono: '928 452 489',
    loc: 'un@email.es',
    isla: 'Admin',
    direccion: 'lñmĺasfvopkae',
  },
  {
    id: 1,
    nombre: 'Snow',
    tipo: 'Movil',
    horario: '08-22',
    telefono: '928 452 489',
    loc: 'un@email.es',
    isla: 'Admin',
    direccion: 'lñmĺasfvopkae',
  },
  {
    id: 1,
    nombre: 'Snow',
    tipo: 'Movil',
    horario: '08-22',
    telefono: '928 452 489',
    loc: 'un@email.es',
    isla: 'Admin',
    direccion: 'lñmĺasfvopkae',
  },
  {
    id: 1,
    nombre: 'Snow',
    tipo: 'Movil',
    horario: '08-22',
    telefono: '928 452 489',
    loc: 'un@email.es',
    isla: 'Admin',
    direccion: 'lñmĺasfvopkae',
  },
  {
    id: 1,
    nombre: 'Snow',
    tipo: 'Movil',
    horario: '08-22',
    telefono: '928 452 489',
    loc: 'un@email.es',
    isla: 'Admin',
    direccion: 'lñmĺasfvopkae',
  },
  {
    id: 1,
    nombre: 'Snow',
    tipo: 'Movil',
    horario: '08-22',
    telefono: '928 452 489',
    loc: 'un@email.es',
    isla: 'Admin',
    direccion: 'lñmĺasfvopkae',
  },
  {
    id: 1,
    nombre: 'Snow',
    tipo: 'Movil',
    horario: '08-22',
    telefono: '928 452 489',
    loc: 'un@email.es',
    isla: 'Admin',
    direccion: 'lñmĺasfvopkae',
  },
]

export default function DataTablePuntos() {
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
