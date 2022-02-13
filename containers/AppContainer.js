import React from 'react'
import  Navbar  from '../components/Navbar/Navbar'
import NavigationBar from '../components/Navbar/NavigationBar'

function AppContainer({children}) {
  return (
    <>
    <Navbar />
    {children}
    <NavigationBar />
    </>
  )
}

export default AppContainer