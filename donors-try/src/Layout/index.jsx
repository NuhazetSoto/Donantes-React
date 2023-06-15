import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
    <Header />
    <section>
      <Outlet />
    </section>
    <div>ESTO ES EL FOOTER</div>
    </>
  )
}

export default Root