import Header from '../../Components/Header/Header'
import {
  Card,
  CardContent,
  Divider,
  Typography,
} from '@mui/material'
import SpringModal from '../../Components/Modal/Modal'
import ShowDataTable from '../../Components/DataTable/DataTableShow/ShowDataTableUsuarios'
import ShowDataTablePuntos from '../../Components/DataTable/DataTableShow/ShowDataTablePuntos'


function Pruebas() {
    return (
    <>
      <Header />
     <ShowDataTable/>
     <Divider sx={{marginTop: '10px', marginBottom:'10px'}}/>
     <ShowDataTablePuntos/>
    </>
  )
}

export default Pruebas