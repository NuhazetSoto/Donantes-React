import { Button, Card, Typography } from '@mui/material'
import React from 'react'
import TestPrevio from '../../Components/TestPrevio/TestPrevio'
import Header from '../../Components/Header/Header'

function VistaFormulario() {
  return (
    <>
    <Header/>
      <Card>
       <TestPrevio/>
      </Card>
      <div>VistaFormulario</div>
    </>
  )
}

export default VistaFormulario
