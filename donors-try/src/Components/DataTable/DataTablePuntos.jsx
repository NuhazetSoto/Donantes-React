import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import SpringModal from '../Modal/Modal'

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
    nombre: 'Hospital Dr. Negrín',
    tipo: 'Fijo',
    horario: '08-22',
    telefono: '928 452 489',
    loc: '4HC4+66 Las Palmas de Gran Canaria',
    isla: 'Gran Canaria',
    direccion:
      'C. Pl. Barranco de la Ballena, s/n, 35010 Las Palmas de Gran Canaria, Las Palmas',
  },
  {
    id: 2,
    nombre: 'Hospital Insular de GC',
    tipo: 'Fijo',
    horario: '08-22',
    telefono: '928 452 488',
    loc: '3HMM+C4 Las Palmas de Gran Canaria',
    isla: 'Gran Canaria',
    direccion:
      'Avenida Marítima del Sur, s/n, 35016 Las Palmas de Gran Canaria, Las Palmas',
  },
  {
    id: 3,
    nombre: 'Cuartel de la Guardi Civil',
    tipo: 'Movil',
    horario: '10-18',
    telefono: '928 450 474',
    loc: '3HQM+9J Las Palmas de Gran Canaria',
    isla: 'Gran Canaria',
    direccion: 'C/ Alicante 9',
  },
  {
    id: 4,
    nombre: 'Hospital General de Fuerteventura',
    tipo: 'Fijo',
    horario: '08-22',
    telefono: '928 124 489',
    loc: 'F4RH+7X Puerto del Rosario',
    isla: 'Fuerteventura',
    direccion:
      'Carretera del aeropuerto, Km 1, 35600 Puerto del Rosario, Las Palmas',
  },
  {
    id: 5,
    nombre: 'Acuartelamiento Puerto del Rosario',
    tipo: 'Movil',
    horario: '08-15',
    telefono: '928 487 589',
    loc: 'G42V+3R Puerto del Rosario',
    isla: 'Fuerteventura',
    direccion:
      'C. Comandante Díaz Trayter, 1, 35600 Puerto del Rosario, Las Palmas',
  },
  {
    id: 6,
    nombre: 'Centro de Salud San Isidro',
    tipo: 'Fijo',
    horario: '08-22',
    telefono: '922 470 012',
    loc: '3CCW+J2 San Isidro',
    isla: 'Tenerife',
    direccion: 'C. Arguayoda, 2, 38611 San Isidro, Santa Cruz de Tenerife',
  },
  {
    id: 7,
    nombre: 'Snow',
    tipo: 'Movil',
    horario: '08-22',
    telefono: '928 452 489',
    loc: 'un@email.es',
    isla: 'Admin',
    direccion: 'lñmĺasfvopkae',
  },
  {
    id: 8,
    nombre: 'Snow',
    tipo: 'Movil',
    horario: '08-22',
    telefono: '928 452 489',
    loc: 'un@email.es',
    isla: 'Admin',
    direccion: 'lñmĺasfvopkae',
  },
  {
    id: 9,
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell align="right">{row.tipo}</TableCell>
              <TableCell align="right">{row.horario}</TableCell>
              <TableCell align="right">{row.telefono}</TableCell>
              <TableCell align="right">{row.loc}</TableCell>
              <TableCell align="right">{row.isla}</TableCell>
              <TableCell align="right">{row.direccion}</TableCell>
              <TableCell>
                <SpringModal/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
