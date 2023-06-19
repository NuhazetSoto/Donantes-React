import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import SpringModal from '../../Modal/Modal'
import { getAllPuntos } from '../../../services/puntos.service'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ModalCrearPunto from '../../Modal/NuevoPuntoModal'
import TableSearch from '../../Search/TableSearch'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'loc_gps', headerName: 'Loc.', width: 130 },
  { field: 'pextraccion', headerName: 'Tipo', width: 90 },
  {
    field: 'pextraccion_name',
    headerName: 'Nombre',
    type: 'string',
    width: 90,
  },
  {
    field: 'pextraccion_isla',
    headerName: 'Isla',
    type: 'string',
    width: 90,
  },
  {
    field: 'pextraccion_direccion',
    headerName: 'Direccion',
    type: 'string',
    width: 90,
  },
  {
    field: 'pextraccion_horario',
    headerName: 'Horario',
    type: 'string',
    width: 90,
  },
]

export default function DataTablePuntos({data}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [puntos, setPuntos] = useState([])

  const showPuntos = async () => {
    const data = await getAllPuntos()
    setPuntos(data)
    console.log(data)
  }
  useEffect(() => {
    showPuntos()
  }, [])

  const handleSearchChange = (event) => {
      setSearchQuery(event.target.value)
    }

  const filteredData = data.filter((ele) => {
      const query = searchQuery.toLowerCase()
      return Object.values(ele).some((value) =>
        String(value).toLowerCase().includes(query)
      )
    })

  return (
    <>
      <div>
        <TableSearch
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {filteredData.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.pextraccion_name}
                  </TableCell>
                  <TableCell align="right">{row.pextraccion}</TableCell>
                  <TableCell align="right">{row.pextraccion_horario}</TableCell>
                  <TableCell align="right">{row.pextraccion_tlf}</TableCell>
                  <TableCell align="right">{row.loc_gps}</TableCell>
                  <TableCell align="right">{row.pextraccion_isla}</TableCell>
                  <TableCell align="right">
                    {row.pextraccion_direccion}
                  </TableCell>
                  <TableCell>
                    <SpringModal />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
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
