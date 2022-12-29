import React from 'react'

function ProductAddScreen() {
  return (
    <div className='container mx-auto px-8 mb-8'>
      <h1 className='text-3xl font-medium mb-8'>New Product</h1>
      <form>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-6'>
          <div>
            <span className='text-md'>Product Name:</span>
            <div class="border border-gray-400 rounded-lg flex mb-4 shadow-md">
              <input
                required
                type="text"
                placeholder="Product Name"
                class="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400"
              />
            </div>
          </div>
          <div>
            <span className='text-md'>Slug:</span>
            <div class="border border-gray-400 rounded-lg flex mb-4 shadow-md">
              <input
                required
                type="text"
                placeholder="Slug"
                class="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400"
              />
            </div>
          </div>
          <div>
            <span className='text-md'>Choose an Image</span>
            <div class="border border-gray-400 rounded-lg flex mb-4 shadow-md">
              <input
                required
                type="file"
                class="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400"
              />
            </div>
          </div>

          <div>
            <span className='text-md'>Image File:</span>
            <div class="border border-gray-400 rounded-lg flex mb-4 shadow-md">
              <input
                required
                type="text"
                placeholder="File will be auto generated after chose an file"
                class="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400"
              />
            </div>
          </div>
          <div>
            <span className='text-md'>Product Brand:</span>
            <div class="border border-gray-400 rounded-lg flex mb-4 shadow-md">
              <input
                required
                type="text"
                placeholder="Product Brand:"
                class="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400"
              />
            </div>
          </div>

          <div>
            <span className='text-md'>Product Category:</span>
            <div class="border border-gray-400 rounded-lg flex mb-4 shadow-md">
              <input
                required
                type="text"
                placeholder="Product Category"
                class="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400"
              />
            </div>
          </div>

          <div>
            <span className='text-md'>Price:</span>
            <div class="border border-gray-400 rounded-lg flex mb-4 shadow-md">
              <input
                required
                type="text"
                placeholder="Price"
                class="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400"
              />
            </div>
          </div>

          <div>
            <span className='text-md'>Count In Stock:</span>
            <div class="border border-gray-400 rounded-lg flex mb-4 shadow-md">
              <input
                required
                type="text"
                placeholder="Count In Stock"
                class="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400"
              />
            </div>
          </div>
        </div>
        <div>
            <span className='text-md'>Product Description:</span>
            <div class="border border-gray-400 rounded-lg flex mb-4 shadow-md">
              <textarea
                required
                placeholder="Product Description"
                class="flex-auto p-3 block rounded-lg font-medium outline-none border border-transparent focus:border-gray-400"
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