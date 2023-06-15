import { Typography } from '@mui/material'
import React from 'react'
import './NotFound.css'
import Header from '../../Components/Header/Header'

const NotFound = () => {
  return (
    <>
    <Header/>
      <div className="not-found-container">
        <h1 className="not-found-title">404 - No Encontrada</h1>
        <p className="not-found-message">
          La página que buscas no puede ser encontrada
        </p>
      </div>
    </>
  )
}
export default NotFound