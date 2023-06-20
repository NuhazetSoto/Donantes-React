import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import SpringModal from '../../Modal/Modal'
import { useState, useEffect } from 'react'
import { getAllUsers } from '../../../services/user.service'
import { Link } from 'react-router-dom'
import ModalCrearUsuario from '../../Modal/NuevoUsuarioModal'
import TableSearch from '../../Search/TableSearch'

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

export default function DataTableUsuarios({ data }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [users, setUsers] = useState([])
  const [actualizar, setActualizar] = useState(false)

  // const handleList = () => {
  //     return users.map((ele) => {
  //       return (
  //               <TableRow
  //                 key={ele.id}
  //                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  //               >
  //                 <TableCell component="th" scope="ele">
  //                   {ele.name}
  //                 </TableCell>
  //                 <TableCell align="right">{ele.lastname}</TableCell>
  //                 <TableCell align="right">{ele.phone}</TableCell>
  //                 <TableCell align="right">{ele.fecha_nacimiento}</TableCell>
  //                 <TableCell align="right">{ele.email}</TableCell>
  //                 <TableCell align="right">{ele.role}</TableCell>
  //                 <TableCell align="right">{ele.hemogrupoId}</TableCell>
  //                 <TableCell align="right">{ele.hemorhId}</TableCell>
  //                 <TableCell align="right">{ele.password}</TableCell>
  //                 <TableCell>
  //                   <SpringModal user={ele} hadleUpdate={handleUpdate}/>
  //                 </TableCell>
  //               </TableRow>

  //       )
  //     })
  //   }

  const showUsers = async () => {
    const data = await getAllUsers()

    setUsers(data)
  }

  useEffect(() => {
    showUsers()
  }, [actualizar])

  const handleUpdate = () => {
    setActualizar(!actualizar)
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const filteredData = () => {
    const query = searchQuery.toLowerCase()
    if (query.length > 0) {
      const filteredUsers = users.filter((ele) => {
        return Object.values(ele).some((value) =>
          String(value).toLowerCase().includes(query)
        )
      })
      return filteredUsers.map((ele) => {
        return (
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
              <SpringModal user={ele} hadleUpdate={handleUpdate} />
            </TableCell>
          </TableRow>
        )
      })
    } else {
      return users.map((ele) => {
        return (
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
              <SpringModal user={ele} hadleUpdate={handleUpdate} />
            </TableCell>
          </TableRow>
        )
      })
    }
  }

  return (
    <>
      <div>
        <TableSearch
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell align="right">Apellidos</TableCell>
                <TableCell align="right">Telefono</TableCell>
                <TableCell align="right">Fecha de nacimiento</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Role</TableCell>
                <TableCell align="right">Hemo Grupo</TableCell>
                <TableCell align="right">Hemo Rh</TableCell>
                <TableCell align="right">Contraseña</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{filteredData()}</TableBody>
          </Table>
        </TableContainer>
        <Link
          to={'/login/admin'}
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <Button
            sx={{ backgroundColor: '#B31410', marginLeft: '10px' }}
            variant="contained"
            color="error"
          >
            Volver
          </Button>
        </Link>

        <ModalCrearUsuario />
      </div>
    </>
  )
}
