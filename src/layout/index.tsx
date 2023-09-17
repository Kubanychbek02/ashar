import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

export const Layout = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle}/> */}
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}
