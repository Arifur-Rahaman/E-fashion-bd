import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SET_SHIPPING_ADDRESS } from '../const/actions'
import { Store } from '../Store'

function ShippingAddressScreen() {
  const navigate = useNavigate()
  const {state, dispatch} = useContext(Store)
  const {cart:{shippingAddress:shipping}}=state
  const {fullName, address, city, postalCode, country} = shipping || {}

  const [shippingAddress, setShippingAddress] = useState({
    fullName, address, city, postalCode, country
  })

  const handleChange = (e)=>{
    setShippingAddress((pre)=>({...pre, [e.target.name]: e.target.value}))
  }
  const handleSubmit = (e)=>{
    dispatch({type: SET_SHIPPING_ADDRESS, payload: shippingAddress})
    navigate('/paymentMethod')
    e.preventDefault()
  }

  return (
    <div className='max-w-xl mx-auto px-4'>
      <h1 className='text-3xl font-medium mb-8'>
        Shipping Address
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="border border-gray-400 rounded-lg flex mb-4 shadow-md">
          <input
            required
            type="text"
            placeholder="Full Name"
            name='fullName'
            value={shippingAddress.fullName}
            onChange={handleChange}
            className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400 "
          />
        </div>
        <div className="border border-gray-400 rounded-lg flex mb-4 shadow-md">
          <input
            required
            type="text"
            placeholder="Address"
            name='address'
            value={shippingAddress.address}
            onChange={handleChange}
            className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400 "
          />
        </div>
        <div className="border border-gray-400 rounded-lg flex mb-4 shadow-xs">
          <input
            required
            type="text"
            placeholder="City"
            name='city'
            value={shippingAddress.city}
            onChange = {handleChange}
            className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400 "
          />
        </div>
        <div className="border border-gray-400 rounded-lg flex mb-4 shadow-md">
          <input
            required
            type="text"
            placeholder="Postal Code"
            name='postalCode'
            onChange = {handleChange}
            value={shippingAddress.postalCode}
            className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400 "
          />
        </div>
        <div className="border border-gray-400 rounded-lg flex mb-4 shadow-md">
          <input
            required
            type="text"
            placeholder="Country"
            name='country'
            value={shippingAddress.postalCode}
            onChange = {handleChange}
            className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400 "
          />
        </div>
        <div>
          <button className='btn btn-primary'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ShippingAddressScreen