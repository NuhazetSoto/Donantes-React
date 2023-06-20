import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import InputBase from '@material-ui/core/InputBase'

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
  const [age, setAge] = React.useState('')
  const handleChange = (event) => {
    setAge(event.target.value)
  }
  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-select-native">
          ¿En que Isla estras?
        </InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          <option value={0}>Lanzarote</option>
          <option value={1}>Fuerteventura</option>
          <option value={2}>Gran Canaria</option>
          <option value={3}>El Hierro</option>
          <option value={4}>La Gomera</option>
          <option value={5}>Tenerife </option>
          <option value={6}>La Palma </option>
          <option value={7}>La Graciosa </option>
        </NativeSelect>
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-select-native">
          Puntos de Extraccion Fijo / Itinerante
        </InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          <option value={0}>
            LZA -Fijo - HOSPITAL UNIVERSITARIO INSULAR DE GRAN CANARIA Planta 0 –
            Hall Principal Avda. Marítima del Sur s/n
          </option>
          <option value={1}>
            FTV - Fijo - HOSPITAL UNIVERSITARIO DE GRAN CANARIA DOCTOR NEGRÍN Planta 4
            – Consultas Externas Barranco de La Ballena
          </option>
          <option value={2}>
            GC - Fijo - CHH | BANCO PROVINCIAL DE LAS PALMAS C/ Alfonso XIII, 4 –
            Entrada para donantes
          </option>
          <option value={3}>
            HIE - Fijo - HOSPITAL UNIVERSITARIO INSULAR DE GRAN CANARIA Planta 0 –
            Hall Principal Avda. Marítima del Sur s/n
          </option>
          <option value={4}>
            GOM -Fijo - HOSPITAL UNIVERSITARIO DE GRAN CANARIA DOCTOR NEGRÍN Planta 4
            – Consultas Externas Barranco de La Ballena
          </option>
          <option value={5}>
            TFE - Fijo - CHH | BANCO PROVINCIAL DE LAS PALMAS C/ Alfonso XIII, 4 –
            Entrada para donantes
          </option>
          <option value={6}>
            PAL - Fijo - HOSPITAL UNIVERSITARIO INSULAR DE GRAN CANARIA Planta 0 –
            Hall Principal Avda. Marítima del Sur s/n
          </option>
          <option value={7}>
            GRA - Fijo - HOSPITAL UNIVERSITARIO DE GRAN CANARIA DOCTOR NEGRÍN Planta 4
            – Consultas Externas Barranco de La Ballena
          </option>
        </NativeSelect>
      </FormControl>
    </div>
  )
}
