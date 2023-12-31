import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export default function DeleteModalPunto({ handleDelete }) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleVolver = () => {
    handleClose()
  }
  const handleAceptar = () => {
    handleClose()
    handleDelete()
  }

  return (
    <div>
      <Button
        sx={{
          alignContent: 'end',
          backgroundColor: '#BF0021',
          marginLeft: '8px',
        }}
        variant="contained"
        color="error"
        onClick={handleClickOpen}
      >
        Eliminar Punto
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'¿Estas seguro de que quieres elminar este punto?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Al aceptar eliminarás permanentemente al punto de la base de datos
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleVolver}>Volver</Button>
          <Button onClick={handleAceptar} autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
