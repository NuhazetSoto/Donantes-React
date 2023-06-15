import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
    <Header />
      <Outlet />
    <div>ESTO ES EL FOOTER</div>
    </>
  )
}

export default Root