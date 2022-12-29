import React from 'react'
import NavBar from '../components/NavBar'

function MainLayout({children}) {
  return (
    <div className='w-full'>
        <NavBar/>
        {children}
    </div>
  )
}

export default MainLayout