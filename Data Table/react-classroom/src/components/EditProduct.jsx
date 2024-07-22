import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
const EditProduct = () => {
  const [userData, setUserData] = useState({
    image:'',
    title: '',
    price: '',
    category: '',
    description: ''
  });
  const { id } = useParams();
  // fetched update data incomplete of auto fill data
  function fetchDataWithId() {
    axios.get(`http://localhost:8000/products/${id}`).then(e =>{
      setUserData({title:e.data.title});
    }).catch(e => console.log(e));
  }
  useEffect(() => {
    fetchDataWithId();
    focusref.current.focus();  // autofocus on component mount
  }, []);
  // here i use useref
  const focusref = useRef();
  function updateForm(e) {
    e.preventDefault();
    console.log(userData);
  }
  function handleInput(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
      <form className='w-25 border text-center editForm pt-2' onSubmit={updateForm}>
        <label>
          Product Image:
          <Form.Control type="text" name="image" placeholder='enter your product image url' onChange={handleInput} ref={focusref} />
        </label><br />
        <label>
          Product Title:
          <Form.Control type="text" name="title" placeholder='enter your product title' onChange={handleInput}/>
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