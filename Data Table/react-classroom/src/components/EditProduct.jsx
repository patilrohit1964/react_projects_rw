import React, { useEffect, useRef, useState } from 'react'
import Form from 'react-bootstrap/Form';
const EditProduct = () => {
  const [userData, setUserData] = useState({
    title: '',
    price: '',
    category: '',
    description: ''
  });
  // here i use useref
  const focusref = useRef();
  function updateForm(e) {
    e.preventDefault();
    console.log(userData);
  }
  function handleInput(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    focusref.current.focus();  // autofocus on component mount
  })
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
      <form className='w-25 border text-center editForm pt-2' onSubmit={updateForm}>
        <label>
          Product Title:
          <Form.Control type="text" name="title" placeholder='enter your product title' onChange={handleInput} ref={focusref} />
        </label><br />
        <label>
          Price:
          <Form.Control type="number" name="price" placeholder='enter your product price' onChange={handleInput} />
        </label><br />
        <label>
          Category:
          <Form.Control type="text" name="category" placeholder='enter your product category' onChange={handleInput} />
        </label><br />
        <label>
          Description:
          <Form.Control type="text" name="description" placeholder='enter your product description' onChange={handleInput} />
        </label><br />
        <button type="submit" className='btn btn-primary'>Update</button>
      </form>
    </div>
  )
}

export default EditProduct