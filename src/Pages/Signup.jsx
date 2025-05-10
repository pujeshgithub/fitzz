import React, { useState } from 'react'
import style from '../Styles/SignUp.module.css'
import { Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase';

const Signup = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  

  const moveToLogin=()=>{
    if(email.length < 16 || password.length <8){
      alert('please allow the geninue email and you password should be consists of 8 digits ')
      setEmail("")
      setPassword('')
    }
    else{

      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    alert('Account has been created with this email')
        navigate('/login')
   
        
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('invalid input or Account already exits')
    setEmail('')
    setPassword('')
    // ..
  });
    }
  }


  return (
    
    <>
    <div className={style.singUpContainer}>

     
      <form>
      <h2 className={style.signUpHeading}>SignUp</h2>
        <label>Email: </label>
        <input
        type='email'
        placeholder='Enter your email address'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <br/>
        <br/>
        <label>Password: </label>
        <input
        type='password'
        placeholder='Enter your password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <br/>
        <br/>
         <Button onClick={moveToLogin} variant="contained">SignUp</Button>
         <br/>
         <br/>
         <NavLink to={'/login'}>AlreadyLogin?</NavLink>
      </form>
      
    </div>
    </>
  )
}

export default Signup;
