import React from 'react'
import Footer from '../components/Footer/Footer'
import  Navbar  from '../components/Navbar/Navbar'
import NavigationBar from '../components/Navbar/NavigationBar'

function AppContainer({children}) {
  return (
    <>
    <Navbar />
    {children}
    <Footer />
    <NavigationBar />
    </>
  )
}

export default AppContainer