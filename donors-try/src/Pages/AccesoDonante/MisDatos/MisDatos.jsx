import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import {
  Button,
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { getOneUser } from '../../../services/user.service'
import { useEffect } from 'react'
import { useState } from 'react'
import SpringModal from '../../../Components/Modal/Modal'



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
  {
    id: 1,
    nombre: 'Snow',
    apellidos: 'Jon',
    telefono: 35,
    fecha: '30/02/1997',
    email: 'un@email.es',
    role: 'Donante',
  },
  {
    id: 2,
    nombre: 'Lannister',
    apellidos: 'Cersei',
    telefono: 42,
    fecha: '30/02/1997',
    email: 'un@email.es',
    role: 'Donante',
  },
  {
    id: 3,
    nombre: 'Lannister',
    apellidos: 'Jaime',
    telefono: 45,
    fecha: '30/02/1997',
    email: 'un@email.es',
    role: 'Sanitario',
  },
  {
    id: 4,
    nombre: 'Stark',
    apellidos: 'Arya',
    telefono: 16,
    fecha: '30/02/1997',
    email: 'un@email.es',
    role: 'Donante',
  },
  {
    id: 5,
    nombre: 'Targaryen',
    apellidos: 'Daenerys',
    telefono: null,
    fecha: '30/02/1997',
    email: 'un@email.es',
    role: 'Admin',
  },
  {
    id: 6,
    nombre: 'Melisandre',
    apellidos: 'Armiche',
    telefono: 150,
    fecha: '30/02/1997',
    email: 'un@email.es',
    role: 'Donante',
  },
  {
    id: 7,
    nombre: 'Clifford',
    apellidos: 'Ferrara',
    telefono: 44,
    fecha: '30/02/1997',
    email: 'un@email.es',
    role: 'Sanitario',
  },
  {
    id: 8,
    nombre: 'Frances',
    apellidos: 'Rossini',
    telefono: 36,
    fecha: '30/02/1997',
    email: 'un@email.es',
    role: 'Donante',
  },
  {
    id: 9,
    nombre: 'Roxie',
    apellidos: 'Harvey',
    telefono: 65,
    fecha: '30/02/1997',
    email: 'un@email.es',
    role: 'Donante',
  },
]


export default function MisDatos() {
    const [user,setUser] = useState([])
    const oneUser = async () => {
        const res = await getOneUser()
        setUser(res)
    }
    useEffect(() => {
        oneUser()
    },[])
    return (
      <Card>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {user.map((ele) => (
                <TableRow
                  key={ele.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="ele">
                    {ele.name}
                  </TableCell>
                  <TableCell align="right">{ele.lastname}</TableCell>
                  <TableCell align="right">{ele.phone}</TableCell>
                  <TableCell align="right">{ele.fecha_nacimiento}</TableCell>
                  <TableCell align="right">{ele.email}</TableCell>
                  <TableCell align="right">{ele.role}</TableCell>
                  <TableCell align="right">{ele.hemogrupoId}</TableCell>
                  <TableCell align="right">{ele.hemorhId}</TableCell>
                  <TableCell align="right">{ele.password}</TableCell>
                  <TableCell>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    )
}
