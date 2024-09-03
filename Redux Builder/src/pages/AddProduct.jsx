import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const navigate=useNavigate();
  const [form, setForm] = useState({
    name: '',
    image:'',
    category: '',
    price: '',
    description: ''
  });

  async function handleForm(e) {
    e.preventDefault();
    let postData=await axios.post('http://localhost:4500/Products',form);
    if(postData){
      alert('Products Successfully Added');
      navigate("/");
    }else{
      alert('Failed to add product');
    }
  }

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  return (
    <div className='h-screen text-white flex justify-center items-center bg-gray-900'>
      <form className='border border-orange-400 mt-8 p-8 rounded-3xl' onSubmit={handleForm}>
        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="image" className="block text-sm font-medium leading-6">
            Product Image
          </label>
          <div className="mt-2">
            <input
              onChange={handleChange}
              id="image"
              name="image"
              placeholder='enter your product Image url'
              type="text"
              autoComplete="address-level2"
              className="block w-72 rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
            />
          </div>
        </div>
        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="name" className="block text-sm font-medium leading-6">
            Product Name
          </label>
          <div className="mt-2">
            <input
              onChange={handleChange}
              id="name"
              name="name"
              placeholder='enter your product name'
              type="text"
              autoComplete="address-level2"
              className="block w-72 rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
            />
          </div>
        </div>
        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="category" className="block text-sm font-medium leading-6">
            Product Category
          </label>
          <div className="mt-2">
            <input
              onChange={handleChange}
              placeholder='enter your product category'
              id="category"
              name="category"
              type="text"
              autoComplete="address-level2"
              className="block w-72 rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
            />
          </div>
        </div>
        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="price" className="block text-sm font-medium leading-6">
            Product Price
          </label>
          <div className="mt-2">
            <input
              onChange={handleChange}
              placeholder='enter your product price'
              id="price"
              name="price"
              type="text"
              autoComplete="address-level2"
              className="block w-72 rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="description" className="block text-sm font-medium leading-6">
            Description
          </label>
          <div className="mt-2">
            <input
              onChange={handleChange}
              placeholder='enter your product description'
              id="description"
              name="description"
              type="text"
              autoComplete="address-level2"
              className="block w-72 rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
            />
          </div>
        </div>
        <button className="btn btn-neutral m-auto block mt-5">Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct