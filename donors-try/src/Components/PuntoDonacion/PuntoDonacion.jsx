import React, { useState, useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import InputBase from '@material-ui/core/InputBase'
import { getAllPuntos } from '../../services/puntos.service'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

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

export default function CustomizedSelects({ onDataSelected }) {
   const [selectedValue, setSelectedValue] = useState(null)
  const classes = useStyles()
  const [actualizar, setActualizar] = useState(false)
  const [puntos, setPuntos] = useState([])
  const [selectedIsla, setSelectedIsla] = useState('')
  const [selectedPunto, setSelectedPunto] = useState('')
  const [selectedHora, setSelectedHora] = useState('')
  const [selectedFecha, setSelectedFecha] = useState('')

  const showPuntos = async () => {
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
    { id: '1', hora: '8:00' },
    { id: '2', hora: '9:00' },
    { id: '3', hora: '10:00' },
    { id: '4', hora: '11:00' },
    { id: '5', hora: '12:00' },
    { id: '6', hora: '13:00' },
    { id: '7', hora: '14:00' },
    { id: '8', hora: '15:00' },
    { id: '9', hora: '16:00' },
    { id: '0', hora: '17:00' },
    { id: '11', hora: '18:00' },
    { id: '12', hora: '19:00' },
    { id: '13', hora: '20:00' },
  ]

  const handleChangeIsla = (event) => {
    setSelectedIsla(event.target.value)
    setSelectedPunto('') // Reset the selected punto when isla changes
    console.log(selectedIsla)
  }

  const handleChangePunto = (event) => {
    setSelectedPunto(event.target.value)
    console.log(selectedPunto)
  }

  const handleChangeHora = (event) => {
    setSelectedHora(event.target.value)
    console.log(selectedHora)
  }

  const handleChangeFecha = (event) => {
    setSelectedFecha(event.target.value)
    console.log(selectedFecha)
  }

  useEffect(() => {
    showPuntos()
    console.log(selectedIsla)
  }, [actualizar, selectedIsla])

  const selectIslaOptions = () => {
    return islas.map((isla) => (
      <option key={isla} value={isla}>
        {isla}
      </option>
    ))
  }

  const selectPuntoOptions = () => {
    return puntos
      .filter((punto) => punto.pextraccion_isla === selectedIsla)
      .map((punto) => (
        <option key={punto.id} value={punto.id}>
          {punto.pextraccion} -- {punto.pextraccion_direccion}
        </option>
      ))
  }

  const selectHoraOptions = () => {
    return horas.map((hora) => (
      <option key={hora.id} value={hora.hora}>
        {hora.hora}
      </option>
    ))
  }
    const handleDateChange = (date) => {
      setSelectedFecha(date)
      console.log(selectedFecha)
    }
    const handleSelection = () => {
      const selectedData = {
        Isla: selectedIsla,
        Punto: selectedPunto,
        Fecha: selectedFecha,
        Hora: selectedHora
      }
      onDataSelected(selectedData)
    }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <InputLabel htmlFor="isla-select">
          ¿En qué isla se encuentra?
        </InputLabel>
        <FormControl className={classes.margin}>
          <NativeSelect
            id="isla-select"
            value={selectedIsla}
            onChange={handleChangeIsla}
            input={<BootstrapInput />}
          >
            <option value="" disabled hidden>
              Seleccione Isla
            </option>
            {selectIslaOptions()}
          </NativeSelect>
        </FormControl>

        <FormControl className={classes.margin}>
          <InputLabel htmlFor="punto-select">
            Puntos de Extracción Fijo / Itinerante
          </InputLabel>
          <NativeSelect
            id="punto-select"
            value={selectedPunto}
            onChange={handleChangePunto}
            input={<BootstrapInput />}
          >
            <option value="" disabled hidden>
              Seleccione Punto de extracción
            </option>
            {selectPuntoOptions()}
          </NativeSelect>
        </FormControl>

        <FormControl className={classes.margin}>
          <InputLabel htmlFor="hora-select">Seleccione Hora</InputLabel>
          <NativeSelect
            id="hora-select"
            value={selectedHora}
            onChange={handleChangeHora}
            input={<BootstrapInput />}
          >
            <option value="" disabled hidden></option>
            {selectHoraOptions()}
          </NativeSelect>
        </FormControl>

        <InputLabel htmlFor="fecha-select">Seleccione Fecha</InputLabel>
        <FormControl className={classes.margin}>
          <DatePicker
            value={selectedFecha}
            onChange={handleDateChange}
            renderInput={(params) => (
              <BootstrapInput {...params} id="fecha-select" />
            )}
          />
        </FormControl>
      </div>
    </LocalizationProvider>
  )
}
