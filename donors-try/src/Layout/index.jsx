import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './index.css'

function Root() {

  return (
    <div className='layout'>
    
    <Header />

    <Outlet />

    <Footer />
    
    </div>
  )
}

export default Root