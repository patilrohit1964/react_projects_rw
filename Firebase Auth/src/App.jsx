import React, { useState } from 'react'
import { auth, googleProvider } from './firebase/firebase'
import GoogleButton from 'react-google-button'
import './App.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
const App = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const signUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('user signed up: ', userCredential.user);
    } catch (error) {
      console.error("error Signing up: ", error.message);
    }
  }
  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("user logged in: ", userCredential.user);
    } catch (error) {
      console.error("error loggin in: ", error.message);
    }
  }
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('use logged in with google: ', result.user.email);
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
        <GoogleButton onClick={googleLogin} style={{margin:"10px auto"}}/>
      </div>
    </div>
  )
}

export default App