import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import SpringModal from '../../Modal/Modal';
import { useState,useEffect } from 'react'
import { getAllUsers } from '../../../services/user.service';
import { Link } from 'react-router-dom';
import ModalCrearUsuario from '../../Modal/NuevoUsuarioModal';

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
  {
    field: 'password',
    headerName: 'password',
    type: 'string',
    width: 40,
  },
]

// const rows = [
//   { id: 1, nombre: 'Snow', apellidos: 'Jon', telefono: 35, fecha: '30/02/1997', email:'un@email.es', role: 'Donante'},
//   { id: 2, nombre: 'Lannister', apellidos: 'Cersei', telefono: 42, fecha: '30/02/1997', email:'un@email.es', role: 'Donante'},
//   { id: 3, nombre: 'Lannister', apellidos: 'Jaime', telefono: 45, fecha: '30/02/1997', email:'un@email.es', role: 'Sanitario'},
//   { id: 4, nombre: 'Stark', apellidos: 'Arya', telefono: 16, fecha: '30/02/1997', email:'un@email.es', role: 'Donante'},
//   { id: 5, nombre: 'Targaryen', apellidos: 'Daenerys', telefono: null, fecha: '30/02/1997', email:'un@email.es', role: 'Admin'},
//   { id: 6, nombre: 'Melisandre', apellidos: 'Armiche', telefono: 150, fecha: '30/02/1997', email:'un@email.es', role: 'Donante'},
//   { id: 7, nombre: 'Clifford', apellidos: 'Ferrara', telefono: 44, fecha: '30/02/1997', email:'un@email.es', role: 'Sanitario'},
//   { id: 8, nombre: 'Frances', apellidos: 'Rossini', telefono: 36, fecha: '30/02/1997', email:'un@email.es', role: 'Donante'},
//   { id: 9, nombre: 'Roxie', apellidos: 'Harvey', telefono: 65, fecha: '30/02/1997', email:'un@email.es', role: 'Donante'},
// ]

export default function DataTableUsuarios() { 

  const [users, setUsers] = useState([])
  const showUsers = async () => {
    const data = await getAllUsers()
    console.log(data)
    setUsers(data)
  }
  useEffect(() => {
    showUsers()
  }, [])

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.lastname}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.fecha_nacimiento}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.role}</TableCell>
                <TableCell align="right">{row.hemogrupoId}</TableCell>
                <TableCell align="right">{row.hemorhId}</TableCell>
                <TableCell align="right">{row.password}</TableCell>
                <TableCell>
                  <SpringModal />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to={'/login/admin'} style={{ color: 'inherit', textDecoration: 'none' }}>
        <Button
          sx={{ backgroundColor: '#B31410', marginLeft: '10px' }}
          variant="contained"
          color="error"
        >
          Volver
        </Button>
      </Link>

      <ModalCrearUsuario />
    </>
  )
}
