import React, { useState } from 'react'

function CustomerAddScreen() {
  const [customerData, setCustomerData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    profession: '',
    dateOfBirth: '',
  })
  const handleInputChange = (e) => {
    setCustomerData((pre)=>({...pre, [e.target.name]: e.target.value}))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='container mx-auto px-8'>
      <h1 className='text-3xl font-medium mb-4'>New Customer</h1>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3'>
        <div>
          <span className='font-semibold'>First Name: </span>
          <div className="border border-gray-400 rounded-lg flex mb-4 shadow-md">
            <input
              onChange={handleInputChange}
              name='firstName'
              required
              type="text"
              value={customerData.firstName}
              placeholder="Customer First Name"
              className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400 "
            />
          </div>
        </div>
        <div>
          <span className='font-semibold'>Last Name: </span>
          <div className="border border-gray-400 rounded-lg flex mb-4 shadow-md">
            <input
              onChange={handleInputChange}
              name='lastName'
              required
              type="text"
              value={customerData.lastName}
              placeholder="Customer Last Name"
              className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400 "
            />
          </div>
        </div>
        <div>
          <span className='font-semibold'>Email: </span>
          <div className="border border-gray-400 rounded-lg flex mb-4 shadow-md">
            <input
              onChange={handleInputChange}
              name='email'
              required
              type="email"
              value={customerData.email}
              placeholder="Customer Email"
              className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400 "
            />
          </div>
        </div>
        <div>
          <span className='font-semibold'>Mobile: </span>
          <div className="border border-gray-400 rounded-lg flex mb-4 shadow-md">
            <input
              onChange={handleInputChange}
              name='mobile'
              required
              type="text"
              value={customerData.mobile}
              placeholder="Customer Mobile"
              className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400 "
            />
          </div>
        </div>
        <div>
          <span className='font-semibold'>Profession:</span>
          <div className="border border-gray-400 rounded-lg flex mb-4 shadow-md">
            <input
              onChange={handleInputChange}
              name='profession'
              required
              type="text"
              value={customerData.profession}
              placeholder="Customer Profession"
              className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400 "
            />
          </div>
        </div>
        <div>
          <span className='font-semibold'>Date of birth: </span>
          <div className="border border-gray-400 rounded-lg flex mb-4 shadow-md">
            <input
              onChange={handleInputChange}
              name='dateOfBirth'
              required
              type="date"
              value={customerData.dateOfBirth}
              placeholder="Birthday"
              className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400 "
            />
          </div>
        </div>
        </div>
        <div className='w-full flex'>
          <button
            className='btn btn-primary btn-sm'
          >
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

export default CustomerAddScreen