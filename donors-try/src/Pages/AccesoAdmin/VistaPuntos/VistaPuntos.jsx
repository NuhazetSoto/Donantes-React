import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import DataTablePuntos from '../../../Components/DataTable/Edit/DataTablePuntos/'
import { useState, useEffect } from 'react'
import { getAllUsers } from '../../../services/user.service'

function VistaPuntos() {
  const [data, setData] = useState('')

  const handleData = async () => {
     const algo = await getAllUsers()
     setData(algo)
   }
   useEffect(() =>{
    handleData()
   }, [])

  return (
    <>
      <Card
        className="card"
        sx={{ minWidth: '900px' }}
        raised={true}
        style={{ background: '##ff5232 ' }}
      >
        <CardContent>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              margin: 0,
            }}
          >
            Puntos de Extraccion
          </Typography>
          <DataTablePuntos data={data} />
        </CardContent>
      </Card>
      <div>VistaPuntos</div>
    </>
  )
}

export default VistaPuntos