import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
<<<<<<< HEAD
import DataTablePuntos from '../../../Components/DataTable/Edit/DataTablePuntos/'

=======
import DataTablePuntos from '../../../Components/DataTable/Edit/DataTablePuntos'
>>>>>>> f0742787060ed27a26dd167f4f6ce5d5967b8b2f

function VistaPuntos() {
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
          <DataTablePuntos />
        </CardContent>
      </Card>
      <div>VistaPuntos</div>
    </>
  )
}

export default VistaPuntos