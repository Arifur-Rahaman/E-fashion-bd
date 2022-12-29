import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import Error from '../components/Error'
import SuccessBox from '../components/SuccessBox'
import WarningBox from '../components/WarningBox'
import { Store } from '../Store'

function OrderDetails() {
  const { state } = useContext(Store)
  const { orderId } = useParams()
  const { orders } = state.order
  const order = orders.find((order) => order._id === orderId)
  const { shippingAddress, paymentMethod, itemsPrice, shippingPrice, taxPrice, totalPrice, orderItems, isPaid, isDelivered } = order || {}
  const { fullName, address } = shippingAddress || {}

  if (!order) {
    return <Error error='No item found' info='Go to order list' route='/orderList' />
  }
  return (
    <div className='container mx-auto px-8 pb-4' >
      <h1 className='text-3xl font-medium mb-8'>Order {order._id}</h1>
      <div className='grid grid-cols-1 md:grid-cols-4 items-start md:space-x-6'>
        <div className='col-span-3 flex flex-col space-y-6 mb-4'>
          {/* ***Shipping Box*** */}
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
            <>
            {
              isDelivered?(<SuccessBox message='Delivered'/>):
              (<WarningBox message='Not Delivered' />)
            }
            </>
            <div className='pt-3'>
              <button className='btn btn-primary btn-sm'>Edit Status</button>
            </div>
          </div>
          {/* ***Payment Box*** */}
          <div className='border p-4 flex flex-col space-y-4'>
            <h6 className='text-2xl font-semibold'>Payment</h6>
            <p className='text-xl'>
              <span className='text-xl font-semibold inline-block pr-1'>
                Method:
              </span>{paymentMethod}
            </p>
            <>
            {
              isPaid?(<SuccessBox message='Paid'/>):
              (<WarningBox message='Not Paid' />)
            }
            </>
            <div className='pt-3'>
              <button className='btn btn-primary btn-sm'>Edit Status</button>
            </div>
          </div>
          {/* ***Item Box*** */}
          <div className='border p-4'>
            <h6 className='text-2xl font-semibold mb-4'>Items</h6>
            <div className='flex flex-col space-y-4'>
              {
                orderItems.map(item => (
                  <div key={item._id} className='grid grid-cols-3 items-center'>
                    <div className='flex flex-row items-center'>
                      <img src={item.image} alt='' className='w-14 border mr-4' />
                      <Link>
                        <p className='text-secondary text-md font-semibold'>
                          {item.name}
                        </p>
                      </Link>
                    </div>
                    <p className='font-semibold justify-self-end'>{item.quantity}</p>
                    <p className='font-semibold justify-self-end'>${item
                      .price}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        {/* ***Order Summery Box***  */}
        <div className='border p-4'>
          <h6 className='text-2xl font-semibold'>Order Summery</h6>
          <div className='grid grid-cols-2 p-2 border-b'>
            <p className='text-lg'>Items</p>
            <p className='text-lg'>${itemsPrice}</p>
          </div>
          <div className='grid grid-cols-2 p-2 border-b'>
            <p className='text-lg'>Shipping</p>
            <p className='text-lg'>${shippingPrice}</p>
          </div>
          <div className='grid grid-cols-2 p-2 border-b'>
            <p className='text-lg'>Tax</p>
            <p className='text-lg'>${taxPrice}</p>
          </div>
          <div className='grid grid-cols-2 p-2 pb-0'>
            <p className='text-lg'>Order Total</p>
            <p className='text-lg'>${totalPrice}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OrderDetails