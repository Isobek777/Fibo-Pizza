import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className=' w-full min-h-screen flex flex-col bg-white '>
        <Header/>
        
      <main className=' grow '>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout
