import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Card } from '@mui/material'
import { useState, useEffect } from 'react'
import { getAllPuntos } from '../../../services/puntos.service'
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

export default function ShowDataTablePuntos() {
  const [puntos, setPuntos]= useState([])

  const showPuntos = async () => {
    const data= await getAllPuntos()
    setPuntos(data)
  }
  useEffect(()=> {
    showPuntos()
  }, [])


  return (
    <Card sx={{marginTop:'20px', marginBottom:'20px'}}>
        <TableSearch/>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={puntos}
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
