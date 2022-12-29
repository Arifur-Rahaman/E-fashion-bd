import React from 'react'
import NavBar from '../components/NavBar'

function MainLayout({children}) {
  return (
    <div className='w-full pt-32 pb-16'>
        <NavBar/>
        {children}
    </div>
  )
}

export default MainLayout