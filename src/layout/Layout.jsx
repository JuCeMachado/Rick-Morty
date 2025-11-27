import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  let titulo="Rick & Morty API"
  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh"}}>
      <Navbar titulo={ titulo }/>
      {/* todas las paginas */}
      <Outlet />
    </div>
  )
}

export default Layout
