import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Error from '../components/Error'
import { Store } from '../Store'
import { MdAddCircle, MdRemoveCircle, MdDelete } from "react-icons/md";
import { ADD_TO_CART, DECREASE_CART_QUANTITY, DELETE_FROM_CART } from '../const/actions';


function CartViewScreen() {
    const { state, dispatch } = useContext(Store)
    const { cart: { carts } } = state
    const navigate = useNavigate()

    const handlePlusCart = (product) => {
        dispatch({ type: ADD_TO_CART, payload: { product, quantity: 1 } })
    }

    const handleDecreaseCart = (product) => {
        dispatch({ type: DECREASE_CART_QUANTITY, payload: { product } })
    }
    const handleDelete = (product)=>{
        dispatch({ type: DELETE_FROM_CART, payload: { product } })
    }

    return (
        <div className='container mx-auto px-8' >
            <h1 className='text-3xl font-medium mb-8'>Shopping Cart</h1>
            <>{
                carts.length === 0
                    ? (<Error error='No item found' info='Go to shopping' route='/' />)
                    : (<div className="grid grid-rows-1 gap-4 md:grid-cols-4 items-start">
                        <div className='md:col-start-0 md:col-span-3'>
                            {
                                carts.map(cart => (
                                    <div key={cart._id} className='grid grid-cols-1 md:grid-cols-3 border-x border-b p-4 space-y-5 md:space-y-0 first:border-t'>
                                        {/* column-1: product image and name */}
                                        <div className='flex items-center'>
                                            <img
                                                src={cart.image}
                                                alt={cart.name + " pic"}
                                                className='w-12 border mr-4'
                                            />
                                            <Link to={`/product/${cart.slug}`}>
                                                <p className='text-secondary text-lg'>{cart.name}</p>
                                            </Link>
                                        </div>
                                        {/* column-2: cart + and - button */}
                                        <div className='flex items-center justify-center md:justify-end space-x-3'>
                                            <button
                                                onClick={() => handleDecreaseCart(cart)}
                                                disabled={cart.quantity<=1}
                                            >
                                                <MdRemoveCircle size={22} />
                                            </button>
                                            <p className='text-md font-semibold'>{cart.quantity}</p>
                                            <button onClick={() => handlePlusCart(cart)}><MdAddCircle size={22} /></button>
                                            <p className='text-md font-semibold sm:hidden'>
                                                ${cart.quantity * cart.price}
                                            </p>
                                        </div>
                                        {/* column-3 cart delete*/}
                                        <div className='flex items-center justify-center md:justify-end space-x-3 px-2'>
                                            <p
                                                className='text-md font-semibold hidden md:block'>
                                                ${cart.quantity * cart.price}
                                            </p>
                                            <button
                                                className='hidden md:block'
                                                onClick={()=>handleDelete(cart)}
                                            >
                                                <MdDelete size={22} />
                                            </button>
                                            <button
                                                className='btn btn-xs btn-primary btn-outline w-1/2 md:hidden'
                                                onClick={() => handleDelete(cart)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {/* ***Right Box(Checkout button)*** */}
                        <div className='border p-4'>
                            <div className="border-b p-4 mb-4">
                                <h3
                                    className='text-2xl font-medium'
                                >
                                    {`Subtotal (${carts.length} items)`}
                                </h3>
                                <h1
                                    className='text-2xl font-medium'
                                >
                                    ${carts.reduce((subtotal, cart) => subtotal + cart.quantity * cart.price, 0)}
                                </h1>
                            </div>
                            <button
                                className='btn btn-primary btn-sm w-full'
                                onClick={() => navigate('/shipping')}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>)
            }</>
        </div>
    )
}

export default CartViewScreen