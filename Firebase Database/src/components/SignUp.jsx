import React from 'react'
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebase';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState();
    const navigate = useNavigate();
    const signfuncsUp = async () => {
        if (email == '' || password == '') {
            alert('Please fill out all fields');
            return;
        } else {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                alert('user signup successfully');
                localStorage.setItem('email', JSON.stringify(userCredential.user.email));
                navigate('/');
            } catch (error) {
                console.error("error Signing up: ", error.message);
            }
        }
    }
    // const login = async () => {
    //     if (email == '' || password == '') {
    //         alert('Please fill out all fields');
    //         return;
    //     } else {
    //         try {
    //             const userCredential = await signInWithEmailAndPassword(auth, email, password);
    //             alert("successfully logged user");
    //             localStorage.setItem('email', JSON.stringify(userCredential.user.email));
    //             navigate('/');
    //         } catch (error) {
    //             console.log('user not found');
    //         }
    //     }
    // }
    const googleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            alert('user logged successfully with ')
            // localStorage.setItem('email', JSON.stringify(userCredential.user.email));
            navigate('/');
        } catch (error) {
            console.error("error logging in with google", error.message);
        }

    }
    return (    
        <div>
            <h3 className="text-center pt-3">SignUp</h3>
            <div className='form'>
                <input type="text" placeholder='enter your Name' onChange={(e) => setName(e.target.value)} /> <br />
                <input type="email" placeholder='enter your email' onChange={(e) => setEmail(e.target.value)} /> <br />
                <input type="password" placeholder='enter your password' onChange={(e) => setPassword(e.target.value)} /> <br />
                <button onClick={signfuncsUp}>signUp</button>
                <button><NavLink className={'text-decoration-none text-white'} to={'/login'}>Login</NavLink></button>
                <h5>Login With Goggle</h5>
                <GoogleButton onClick={googleLogin} style={{ margin: "10px auto" }} />
            </div>
        </div>
    )
}

export default SignUp