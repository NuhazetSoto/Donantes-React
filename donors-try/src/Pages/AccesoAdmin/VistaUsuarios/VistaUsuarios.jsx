import DataTableUsuarios from '../../../Components/DataTable/Edit/DataTableUsuario'
import { Card, CardContent, Typography } from '@mui/material'
import { useState,useEffect } from 'react'
import { getAllUsers } from '../../../services/user.service'
function VistaUsuarios() {
  const [data,setData] = useState([])
  
  const handleData = async () => {
    const algo = await getAllUsers()
    setData(algo)
  }
  useEffect(() => {
    handleData()
  },[] )

  return (
    <div>
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
            Usuarios
            <DataTableUsuarios data={data} />
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default VistaUsuarios