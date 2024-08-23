import React, { useState } from 'react'
import { auth, googleProvider } from '../firebase/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import GoogleButton from 'react-google-button'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // const signUp = async () => {
    //     if (email == '' || password == '') {
    //         alert('Please fill out all fields');
    //         return;
    //     } else {
    //         try {
    //             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    //             alert('user signup successfully');
    //             localStorage.setItem('email', JSON.stringify(userCredential.user.email));
    //             navigate('/');
    //         } catch (error) {
    //             console.error("error Signing up: ", error.message);
    //         }
    //     }
    // }
    const login = async () => {
        if (email == '' || password == '') {
            alert('Please fill out all fields');
            return;
        } else {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                alert("successfully logged user");
                localStorage.setItem('email', JSON.stringify(userCredential.user.email));
                navigate('/');
            } catch (error) {
                console.log('user not found');
            }
        }
    }
    const googleLogin = async () => {

        try {
            const result = await signInWithPopup(auth, googleProvider);
            alert('user logged successfully with ')
            localStorage.setItem('email', JSON.stringify(result.user.email));
            navigate('/');
        } catch (error) {
            console.error("error logging in with google", error.message);
        }

    }
    return (
        <div>
            <h2 className="text-center pt-3">Login</h2>
            <div className='form'>
                <input type="email" placeholder='enter your email' onChange={(e) => setEmail(e.target.value)} /> <br />
                <input type="password" placeholder='enter your password' onChange={(e) => setPassword(e.target.value)} /> <br />
                <button><NavLink className={'text-decoration-none text-white'} to={'/signup'}>SignUp</NavLink></button>
                <button onClick={login}>Login</button><br />
                <h5>Login With Goggle</h5>
                <GoogleButton onClick={googleLogin} style={{ margin: "10px auto" }} />
            </div>
        </div>
    )
}

export default Login