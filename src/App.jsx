import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp.jsx';
import Login from './Pages/Login'
import Fitzz from './Pages/Fitzz';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element = {<SignUp/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/fitzz' element = {<Fitzz/>}/>
        
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App