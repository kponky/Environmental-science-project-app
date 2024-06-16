import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div>
      <Navbar/>
      <main>
      <Outlet/>
      </main>
    </div>
  )
}

export default HomeLayout
