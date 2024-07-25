import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate()
    const auth=localStorage.getItem('token');
    function confirmLogin(e){ 
        e.preventDefault();
        let userData={email,password}
        axios.post('https://reqres.in/api/login',userData,{
            'Content-Type':"application/json"
        }).then(e=>{
           if(e.status==200){
            localStorage.setItem('token',JSON.stringify(e.data))
            navigate('/products')
           }
        }).catch(e=>console.log(e))
    }
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
        <form onSubmit={confirmLogin}>
            <Form.Control type="email" placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)}/><br />
            <Form.Control type="password" placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)}/><br />
            <button className='btn btn-dark d-block m-auto'>Submit</button>
        </form>
    </div>
  )
}

export default Login