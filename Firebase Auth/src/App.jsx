import React, { useState } from 'react'
import { auth, googleProvider } from './firebase/firebase'
import GoogleButton from 'react-google-button'
import './App.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      alert('user signup successfully');
      console.log(userCredential.user);
    } catch (error) {
      console.error("error Signing up: ", error.message);
    }
  }
  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert("successfully logged user");
      console.log('user email: ',userCredential.user.email);
    } catch (error) {
      console.log('user not found');
    }
  }
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('user logged in with google: ', result.user.email);
    } catch (error) {
      console.error("error logging in with google", error.message);
    }
  }
  return (
    <div>
      <div className='form'>
        <input type="email" placeholder='enter your email' onChange={(e) => setEmail(e.target.value)} /> <br />
        <input type="password" placeholder='enter your password' onChange={(e) => setPassword(e.target.value)} /> <br />
        <button onClick={signUp}>signUp</button><button onClick={login}>Login</button><br />
        <h5>Goggle Authentication</h5>
        <GoogleButton onClick={googleLogin} style={{ margin: "10px auto" }} />
      </div>
    </div>
  )
}

export default App