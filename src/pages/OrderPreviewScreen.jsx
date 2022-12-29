import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Store } from '../Store'

function OrderPreviewScreen() {
  const { state } = useContext(Store)
  const {carts, paymentMethod, shippingAddress} = state.cart
  const {fullName, address} = shippingAddress

  const items = carts.reduce((total, item)=>total+item.quantity*item.price, 0)
  const tax = parseFloat((items/100*15).toFixed(2))
  const shipping = 10
  const total = items + tax + shipping


  console.log(state.cart)
  return (
    <div className='container mx-auto px-8 pb-4' >
      <h1 className='text-3xl font-medium mb-8'>Preview Order</h1>
      <div className='grid grid-cols-1 md:grid-cols-4 items-start md:space-x-6'>
        <div className='col-span-3 flex flex-col space-y-6 mb-4'>
          {/* ***Shipping Info Box*** */}
          <div className='border p-4 flex flex-col space-y-2'>
            <h6 className='text-2xl font-semibold mb-2'>Shipping</h6>
            <p className='text-xl'>
              <span className='text-xl font-semibold inline-block pr-1'>Name:</span>
              {fullName}
            </p>
            <p className='text-xl'>
              <span className='text-xl font-semibold inline-block pr-1'>Address:</span>
              {address}
            </p>
            <Link to={'/shipping'} style={{ color: '#1976D2', fontWeight: '600' }}>Edit</Link>
          </div>
          {/* ***Payment Info Box*** */}
          <div className='border p-4 flex flex-col space-y-2'>
            <h6 className='text-2xl font-semibold mb-2'>Payment</h6>
            <p className='text-xl capitalize'>
              <span className='text-xl font-semibold inline-block pr-1 capitalize'>
                Method:
              </span>{paymentMethod}
            </p>
            <Link to={'/paymentMethod'} style={{ color: '#1976D2', fontWeight: '600' }}>Edit</Link>
          </div>
          {/* ***Item Info Box*** */}
          <div className='border p-4'>
            <h6 className='text-2xl font-semibold mb-4'>Items</h6>
            <div className='flex flex-col space-y-4'>
              {
                carts.map(cart => (
                  <div key={cart._id} className='grid grid-cols-3 items-center'>
                    <div className='flex flex-row items-center'>
                      <img src={cart.image} alt='' className='w-14 border mr-4' />
                      <Link to={`/product/${cart.slug}`}>
                        <p className='text-secondary text-md font-semibold'>
                          {cart.name}
                        </p>
                      </Link>
                    </div>
                    <p className='font-semibold justify-self-end'>{cart.quantity}</p>
                    <p className='font-semibold justify-self-end'>${cart.price}</p>
                  </div>
                ))
              }
              <Link to={'/carts'}><p className='text-secondary font-semibold'>Edit</p></Link>
            </div>
          </div>
        </div>
        {/* ***Order Summery Box***  */}
        <div className='border p-4'>
          <h6 className='text-2xl font-semibold'>Order Summery</h6>
          <div className='grid grid-cols-2 p-2 border-b'>
            <p className='text-lg'>Items</p>
            <p className='text-lg'>${items}</p>
          </div>
          <div className='grid grid-cols-2 p-2 border-b'>
            <p className='text-lg'>Shipping</p>
            <p className='text-lg'>${shipping}</p>
          </div>
          <div className='grid grid-cols-2 p-2 border-b'>
            <p className='text-lg'>Tax</p>
            <p className='text-lg'>${tax}</p>
          </div>
          <div className='grid grid-cols-2 p-2 border-b'>
            <p className='text-lg'>Order Total</p>
            <p className='text-lg'>${total}</p>
          </div>
          <div className='p-2'>
            <button className='btn btn-primary btn-sm w-full'>Place Order</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OrderPreviewScreen