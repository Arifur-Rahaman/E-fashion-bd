import React from 'react'

function ProductAddScreen() {
  return (
    <div className='container mx-auto px-8 mb-8'>
      <h1 className='text-3xl font-medium mb-8'>New Product</h1>
      <form>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-6'>
          <div>
            <span className='text-md'>Product Name:</span>
            <div className="border border-gray-400 rounded-lg flex mb-4 shadow-md">
              <input
                required
                type="text"
                placeholder="Product Name"
                className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400"
              />
            </div>
          </div>
          <div>
            <span className='text-md'>Slug:</span>
            <div className="border border-gray-400 rounded-lg flex mb-4 shadow-md">
              <input
                required
                type="text"
                placeholder="Slug"
                className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400"
              />
            </div>
          </div>
          <div>
            <span className='text-md'>Choose an Image</span>
            <div className="border border-gray-400 rounded-lg flex mb-4 shadow-md">
              <input
                required
                type="file"
                className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400"
              />
            </div>
          </div>

          <div>
            <span className='text-md'>Image File:</span>
            <div className="border border-gray-400 rounded-lg flex mb-4 shadow-md">
              <input
                required
                type="text"
                placeholder="File will be auto generated after chose an file"
                className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400"
              />
            </div>
          </div>
          <div>
            <span className='text-md'>Product Brand:</span>
            <div className="border border-gray-400 rounded-lg flex mb-4 shadow-md">
              <input
                required
                type="text"
                placeholder="Product Brand:"
                className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400"
              />
            </div>
          </div>

          <div>
            <span className='text-md'>Product Category:</span>
            <div className="border border-gray-400 rounded-lg flex mb-4 shadow-md">
              <input
                required
                type="text"
                placeholder="Product Category"
                className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400"
              />
            </div>
          </div>

          <div>
            <span className='text-md'>Price:</span>
            <div className="border border-gray-400 rounded-lg flex mb-4 shadow-md">
              <input
                required
                type="text"
                placeholder="Price"
                className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400"
              />
            </div>
          </div>

          <div>
            <span className='text-md'>Count In Stock:</span>
            <div className="border border-gray-400 rounded-lg flex mb-4 shadow-md">
              <input
                required
                type="text"
                placeholder="Count In Stock"
                className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400"
              />
            </div>
          </div>
        </div>
        <div>
            <span className='text-md'>Product Description:</span>
            <div className="border border-gray-400 rounded-lg flex mb-4 shadow-md">
              <textarea
                required
                placeholder="Product Description"
                className="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400"
              />
            </div>
          </div>
        <div>
          <button className='btn btn-primary'>Create Product</button>
        </div>
      </form>
    </div>
  )
}

export default ProductAddScreen