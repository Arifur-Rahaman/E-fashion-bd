import React, { useContext} from 'react'
import { useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import { Store } from '../Store'
import Error from '../components/Error'
function ProductDetailsScreenAdmin() {
    const { productId } = useParams()
    const { state} = useContext(Store)
    const { product: { products } } = state
    const productItem = products?.find(product => product._id === productId)
    const { name, image, price, brand, description, rating, numReviews, countInStock } = productItem || {}

    if (!productItem) {
        return <Error error='No product found' info='Go to product list' route='/productList' />
    }
    return (
        <div className="antialiased">
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row mx-4 items-center'>
                    <div className="px-4 pb-2">
                        <img 
                        src={image} 
                        alt="Product" 
                        className="w-96 object-cover rounded-t-xl"
                       
                        />
                    </div>
                    <div className="md:w-1/2 px-4">
                        {/* ***Product Description*** */}
                        <h6 className='mb-2 text-lg font-semibold'>Product: {productId}</h6>
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
                        <p className="text-gray-500 mb-2">{description}</p>
                        <p><span className='font-bold'>25</span> items sold</p>
                        <p className='text-md mb-4'><span className='font-bold'>{countInStock}</span> items available</p>
                        <button className='btn btn-primary btn-wide'>Edit Product</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetailsScreenAdmin