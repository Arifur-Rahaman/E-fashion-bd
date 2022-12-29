import React from 'react'

function WarningBox({message}) {
  return (
    <div className='container'>
      <div className='p-4 bg-red-50 border border-1'>
        <p className='text-lg font-semibold text-error'>{message}</p>
      </div>
    </div>
  )
}

export default WarningBox