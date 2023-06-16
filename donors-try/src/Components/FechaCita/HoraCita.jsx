
import { TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'




const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}))

export default function TimePickers() {
  const classes = useStyles()

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="time"
        label="Elija Hora"
        type="time"
        defaultValue="08:00"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
  )
}
