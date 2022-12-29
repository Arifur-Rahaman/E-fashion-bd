import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { ADD_TO_CART } from '../const/actions';
import { Store } from '../Store';
import Rating from './Rating';
import { toast } from 'react-toastify'
function ProductItem({ product }) {
    const { dispatch, state } = useContext(Store)
    const { image, name, brand, price, slug, countInStock, rating, numReviews } = product

    const handleAddToCart = (product) => {
        if (state.cart.carts.find(cart => cart._id === product._id)) {
            toast.warning('Already added')
        } else {
            dispatch({ type: ADD_TO_CART, payload: { product, quantity: 1 } })
        }

    }
    return (
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Link to={'/product/' + slug}>
                <img src={image} alt="Product" className="h-96 w-72 object-cover rounded-t-xl" />
            </Link>
            <div className="px-4 py-3 w-72">
                <Link to={'/product/' + slug}>
                    <span className="text-gray-400 mr-3 uppercase text-xs">{brand}</span>
                    <p className="text-lg font-bold text-black truncate block capitalize pb-2">{name}</p>
                    <div className='flex items-center'>
                        <Rating rating={rating} />
                        <span className='ml-2 font-semibold'>{numReviews} reviews</span>
                    </div>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-2">${price}</p>
                    </div>
                </Link>
                <button
                    className='btn btn-primary'
                    disabled={countInStock === 0}
                    onClick={() => handleAddToCart(product)}
                >
                    {countInStock === 0 ? 'Out of Stock' : 'Add To Cart'}
                </button>
            </div>
        </div>
    )
}

export default ProductItem