import React from 'react'
import Header from '../../Components/Header/Header'
import { Typography } from '@mui/material'

function AccesoSanitario() {
  return (
    <>
      <Header />
      <div>
        <Typography
          variant="h1"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'block' },
            margin: 0,
          }}
        >
          HOLA SANITARIO
        </Typography>
      </div>
    </>
  )
}

export default AccesoSanitario