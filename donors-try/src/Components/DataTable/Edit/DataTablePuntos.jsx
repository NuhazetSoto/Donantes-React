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
import { Link } from 'react-router-dom'
import ModalCrearUsuario from '../../Modal/NuevoUsuarioModal'
import TableSearch from '../../Search/TableSearch'
import { getAllPuntos } from '../../../services/puntos.service'
import SpringModalPuntos from '../../Modal/ModalPuntos'
import ModalCrearPunto from '../../Modal/NuevoPuntoModal'

export default function DataTableUsuarios({ data }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [puntos, setPuntos] = useState([])
  const [actualizar, setActualizar] = useState(false)

  const showPuntos = async () => {
    const data = await getAllPuntos()

    setPuntos(data)
  }

  useEffect(() => {
    showPuntos()
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
      const filteredPuntos = puntos.filter((ele) => {
        return Object.values(ele).some((value) =>
          String(value).toLowerCase().includes(query)
        )
      })
     if(filteredPuntos.length >0 ) {
      return filteredPuntos.map((ele) => {
         console.log(ele)
        return (
          <TableRow
            key={ele.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="ele">
              {ele.pextraccion_name}
            </TableCell>
            <TableCell align="right">{ele.pextraccion}</TableCell>
            <TableCell align="right">{ele.pextraccion_horario}</TableCell>
            <TableCell align="right">{ele.pextraccion_tlf}</TableCell>
            {/* <TableCell align="right">{ele.loc_gps}</TableCell> */}
            <TableCell align="right">{ele.pextraccion_isla}</TableCell>
            <TableCell align="right">{ele.pextraccion_direccion}</TableCell>
            <TableCell>
             {/*  <SpringModalPuntos user={ele} hadleUpdate={handleUpdate} /> */}
            </TableCell>
          </TableRow>
        )
      })}
    } else {
      if (puntos.length>0){
      return puntos.map((ele) => {
        return (
          <TableRow
            key={ele.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="ele">
              {ele.pextraccion_name}
            </TableCell>
            <TableCell align="right">{ele.pextraccion}</TableCell>
            <TableCell align="right">{ele.pextraccion_horario}</TableCell>
            <TableCell align="right">{ele.pextraccion_tlf}</TableCell>
            {/* <TableCell align="right">{ele.loc_gps}</TableCell> */}
            <TableCell align="right">{ele.pextraccion_isla}</TableCell>
            <TableCell align="right">{ele.pextraccion_direccion}</TableCell>
            <TableCell>
              <SpringModalPuntos puntos={ele} hadleUpdate={handleUpdate} />
            </TableCell>
          </TableRow>
        )
      })
    }}
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
                <TableCell align="right">Tipo</TableCell>
                <TableCell align="right">Horario</TableCell>
                <TableCell align="right">Telefono</TableCell>
                <TableCell align="right">Loc GPS</TableCell>
                <TableCell align="right">Isla</TableCell>
                <TableCell align="right">Direccion</TableCell>
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

        <ModalCrearPunto />
      </div>
    </>
  )
}
