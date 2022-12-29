import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import { Store } from '../Store'
import Error from '../components/Error'
function ProductDetailsScreen() {
    const { slug } = useParams()
    const { state } = useContext(Store)
    const { product: { products } } = state
    const productItem = products?.find(product => product.slug === slug)
    const { name, image, price, brand, description, rating, numReviews, countInStock } = productItem || {}

    if (!productItem) {
        return <Error error='No product found' info='Go to shopping' route='/' />
    }
    return (
        <div className="antialiased">
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row mx-4'>
                    <div className="px-4">
                        <img src={image} alt="Product" className="w-full object-cover rounded-t-xl" />
                    </div>
                    <div className="md:w-1/2 px-4">
                        {/* ***Product Description*** */}
                        <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{name}</h2>
                        <p className="text-gray-500 text-sm">
                            By {brand}
                        </p>
                        <div className='flex items-center mb-4'>
                            <Rating rating={rating} />
                            <span className='ml-2 font-semibold'>{numReviews} reviews</span>
                        </div>
                        <div className="flex items-center space-x-5 my-4">
                            <div>
                                <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                                    <span className="mr-1 mt-1">$</span>
                                    <span className="font-bold text-3xl">{price}</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="text-accent text-xl font-semibold">Save 12%</p>
                                <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                            </div>
                        </div>
                        <p className="text-gray-500">{description}</p>
                        {/* ***Add To Cart Section*** */}
                        <div className="flex py-4 space-x-4">
                            <div className="relative">
                                <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
                                <select
                                    className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1 focus:outline-primary"
                                    name="quantity"
                                >
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </select>

                                <svg className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>

                            <button
                                type="button"
                                className="h-14 px-6 py-2 font-semibold rounded-xl btn btn-primary"
                                disabled={countInStock === 0}
                            >
                                {countInStock === 0 ? 'Out of Stock' : 'Add To Cart'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetailsScreen