import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {

  const { data } = useSelector(store => store.ProductReducer);

  const { id } = useParams();

  const { title, price, category, description, image } = data.find(item => item.id == id);
  const navigate=useNavigate();

  const [form, setForm] = useState({
    title: title,
    image: image,
    category: category,
    price: price,
    description: description
  });

  const handleForm = async (e) => {
    e.preventDefault();
    const UpdateProduct = await axios.put(`http://localhost:4500/Products/${id}`, form);
    if(UpdateProduct){
      alert('Product Update Successfully');
      navigate('/');
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  return (
    <div className='h-screen text-white flex justify-center items-center bg-gray-900'>
      <form className='border border-orange-400 p-8 rounded-3xl' onSubmit={handleForm}>
        <h2 className='text-center'>Edit Product</h2>
        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="image" className="block text-sm font-medium leading-6">
            Product Image
          </label>
          <div className="mt-2">
            <input
              onChange={handleChange}
              id="image"
              name="image"
              value={form.image}
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
              name="title"
              value={form.title}
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
              value={form.category}
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
              value={form.price}
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
              value={form.description}
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

export default EditProduct