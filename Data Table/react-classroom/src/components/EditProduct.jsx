import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
const EditProduct = () => {
  const [userData, setUserData] = useState({
    image: '',
    title: '',
    price: '',
    category: '',
    description: ''
  });
  const { id } = useParams();
  const navigate=useNavigate();
  // fetched update data incomplete of auto fill data
  function fetchDataWithId() {
    axios.get(`http://localhost:8000/products/${id}`).then(e => {
      setUserData({ title: e.data.title, price: e.data.price, image: e.data.image, category: e.data.category, description: e.data.description });
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
    axios.put(`http://localhost:8000/products/${id}`, userData, {
      headers:{'Content-Type': 'application/json'}
    }).then(e =>{
      if(e.status==200){
        alert('update successfully');
        navigate('/products');
      }
    })
  }
  function handleInput(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
      <form className='w-25 border text-center editForm pt-2' onSubmit={updateForm}>
        <label>
          Product Image:
          <Form.Control type="text" value={userData.image} name="image" placeholder='enter your product image url' onChange={handleInput} ref={focusref} />
        </label><br />
        <label>
          Product Title:
          <Form.Control type="text" value={userData.title} name="title" placeholder='enter your product title' onChange={handleInput} />
        </label><br />
        <label>
          Price:
          <Form.Control type="number" value={userData.price} name="price" placeholder='enter your product price' onChange={handleInput} />
        </label><br />
        <label>
          Category:
          <Form.Control type="text" value={userData.category} name="category" placeholder='enter your product category' onChange={handleInput} />
        </label><br />
        <label>
          Description:
          <Form.Control type="text" value={userData.description} name="description" placeholder='enter your product description' onChange={handleInput} />
        </label><br />
        <button type="submit" className='btn btn-primary'>Update</button>
      </form>
    </div>
  )
}

export default EditProduct