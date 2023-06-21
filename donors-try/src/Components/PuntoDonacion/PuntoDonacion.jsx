import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import InputBase from '@material-ui/core/InputBase'
import { useState, useEffect } from 'react'
import { getAllPuntos } from '../../services/puntos.service'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import BasicDatePicker from './Calendar'

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase)

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}))

export default function CustomizedSelects() {
  const classes = useStyles()
  const [actualizar, setActualizar] = useState(false)
  const [puntos, setPuntos] = useState('')
  let [isla, setIsla] = useState('')
  let [hora, setHora] = useState('')
  const [fechas, setFechas] = useState('')
  
  const showPunto = async () => {
    const data = await getAllPuntos()
    console.log(data)
    setPuntos(data)
  }
     const islas = [
      'Gran Canaria',
      'Fuerteventura',
      'Lanzarote',
      'Tenerife',
      'La Palma',
      'La Gomera',
      'El Hierro',
    ]

   const horas = [
     {id:'1', hora:'8:00'},
     {id:'2', hora:'9:00'},
     {id:'3', hora:'10:00'},
     {id:'4', hora:'11:00'},
     {id:'5', hora:'12:00'},
     {id:'6', hora:'13:00'},
     {id:'7', hora:'14:00'},
     {id:'8', hora:'15:00'},
     {id:'9', hora:'16:00'},
     {id:'0', hora:'17:00'},
     {id:'11', hora:'18:00'},
     {id:'12', hora:'19:00'},
     {id:'13', hora:'20:00'}
   ] 

  const handleChange = (event) => {
    setPuntos(event.target.value)
  }

  function handleUpdate() {
    setActualizar(!actualizar)
  }

  function handleFecha(event) {
  setFechas(event.target.value)
  }

  function handleIsla(event) {
    setIsla(event.target.value)
  }

  const selectIsla = () => {
    return islas.map((isla) => {
      return (
        <option key={isla} value={isla}>
          {isla}
        </option>
      )
    })
  }

  const selectPunto = () => {
    return puntos
    .filter((punto) => punto.pextraccion_isla === isla )
    .map((punto) =>{
      return (
        <option key={punto.id} value={punto.id}>
          {punto.pextraccion} -- {punto.pextraccion_direccion}
        </option>
      )
    })
  }
 
 function handleHora(event) {
   setHora(event.target.value)
 }

  const selectHora = () => {
   return horas.map((hora) => {
     return (
       <option key={hora.id} value={hora.hora}>
         {hora.hora}
       </option>
     )
   })
 }


  useEffect(() => {
    showPunto()
  }, [actualizar])
  if (puntos.length !== 0) {
    return (
      <div>
        <InputLabel htmlFor="demo-customized-select-native">
          ¿En que isla se encuentra?
        </InputLabel>
        <FormControl className={classes.margin}>
          <NativeSelect
            id="demo-customized-select-native"
            value={isla}
            onChange={handleIsla}
            input={<BootstrapInput />}
          >
            <option value="" selected disabled hidden>
              Seleccione Isla
            </option>
            {selectIsla()}
          </NativeSelect>
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="demo-customized-select-native">
            Puntos de Extraccion Fijo / Itinerante
          </InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={puntos}
            onChange={handleChange}
            input={<BootstrapInput />}            
          >
            <option value="uhuh" selected disabled hidden>
              Seleccione Punto de extracción
            </option>
            {selectPunto()}
          </NativeSelect>
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="demo-customized-select-native">
            Seleccione Hora
          </InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={horas.hora}
            onChange={handleHora}
            input={<BootstrapInput />}
          >
            <option value="uhuh" selected disabled hidden></option>
            {selectHora()}
          </NativeSelect>
        </FormControl>
          <InputLabel htmlFor="demo-customized-select-native" 
          id="demo-customized-select-native"
          value={fechas}
          onChange={handleFecha}
          input={<BootstrapInput />}>
            Seleccione Fecha
          </InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <BasicDatePicker />
            </DemoContainer>
          </LocalizationProvider>
        
      </div>
    )
  }
}

