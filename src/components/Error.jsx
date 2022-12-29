import React from 'react'
import { Link } from 'react-router-dom'

function Error({ error, info, route }) {
  return (
    <div className='container mx-auto px-4'>
      <div className='p-9 bg-red-100 border border-1'>
        <p className='text-lg font-semibold text-error mb-2'>{error}</p>
        <Link
          style={{ color: '#1976d2', fontWeight: '600' }}
          to={route ? route : '/'}>
          {info ? info : 'Go to home'}
        </Link>
      </div>
    </div>
  )
}

export default Error