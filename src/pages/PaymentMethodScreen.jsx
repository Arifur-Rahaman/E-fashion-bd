import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SET_PAYMENT_METHOD } from '../const/actions'
import { Store } from '../Store'

function PaymentMethodScreen() {
  const navigate = useNavigate()
  const { state, dispatch } = useContext(Store)
  const [paymentMethod, setPaymentMethod] = useState(state.cart.paymentMethod)
  
  const handleChange = (e)=>{
    setPaymentMethod(e.target.value)
  }
  const handleSubmit = (e) => {
    dispatch({type: SET_PAYMENT_METHOD, payload: paymentMethod})
    navigate('/previewOrder')
    e.preventDefault()
  }
  return (
    <div className='max-w-xl mx-auto px-4'>
      <h1 className='text-3xl font-medium mb-8'>
        Payment Method
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 pl-2">
        <div>
          <label className="flex items-center">
            <input
              type="radio"
              className="radio radio-primary h-4 w-4"
              name="paymentMethod"
              value="paypal"
              checked ={paymentMethod==='paypal'}
              onChange={handleChange}
            />
            <span className="ml-2 text-xl">Paypal</span>
          </label>
        </div>
        <div>
          <label className="flex items-center">
            <input
              type="radio"
              className=" radio radio-primary h-4 w-4"
              name="paymentMethod"
              value="stripe"
              checked ={paymentMethod==='stripe'}
              onChange={handleChange}
            />
            <span className="ml-2 text-xl">Stripe</span>
          </label>
        </div>
        <div>
          <button className='btn btn-primary btn-sm'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default PaymentMethodScreen