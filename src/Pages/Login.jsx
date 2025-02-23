import React, { useState } from 'react'
import style from '../Styles/Login.module.css'
import { Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const moveFizzApp=()=>{
    if(email.length < 16 || password.length < 8){
      alert('invaild email & password ')
    }
    else{
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential)=>{
        navigate('/fitzz')
        const user = userCredential.user;
      })
      .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('user not found')
        setEmail('')
        setPassword('')
      })
    }

  }
  return (
    <div className={style.loginContainer}>
     
    <form>
    <h2 className={style.loginHeading}>Login</h2>
      <label>Email: </label>
      <input
      type='email'
      placeholder='Enter your email address'
      value={email}
      onChange={
        (e)=>setEmail(e.target.value)
      }
      />
      <br/>
      <br/>
      <label>Password: </label>
      <input
      type='password'
      placeholder='Enter your password'
      value={password}
      onChange={
        (e)=>setPassword(e.target.value)
      }
      />
      <br/>
      <br/>
       <Button onClick={moveFizzApp}  variant="contained">Login</Button>
       <br/>
       <br/>
       <NavLink to={'/signup'}>Create an account?</NavLink>
    </form>
    
  </div>
  )
}

export default Login