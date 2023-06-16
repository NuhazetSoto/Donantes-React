import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import DataTablePuntos from '../../../Components/DataTable/Edit/DataTablePuntos'





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