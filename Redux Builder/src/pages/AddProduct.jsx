import React from 'react'

const AddProduct = () => {
  return (
    <div className='h-screen text-white flex justify-center items-center bg-gray-900'>
      <form className='border border-orange-400 mt-8 p-8 rounded-3xl'>
        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="city" className="block text-sm font-medium leading-6">
            Product Name
          </label>
          <div className="mt-2">
            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              className="block w-72 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="city" className="block text-sm font-medium leading-6">
            Product Category
          </label>
          <div className="mt-2">
            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              className="block w-72 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="city" className="block text-sm font-medium leading-6">
            Product Price
          </label>
          <div className="mt-2">
            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              className="block w-72 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium leading-6">
            Country
          </label>
          <div className="mt-2">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
        </div>
        <button className="btn btn-neutral m-auto block mt-5">Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct