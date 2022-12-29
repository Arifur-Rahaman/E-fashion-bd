import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
    return (
        <div className='container mx-auto px-8 flex justify-center items-center flex-col'>
                <p className='text-red-500 font-semibold text-xl mb-2'>No page found</p>
                <p className='text-red-500 text-md'>Your URL is not correct!</p>
                <Link to={'/'} style={{color:'#1976d2', fontWeight:'600'}}>Go to home</Link>
        </div>
    )
}

export default Page404