import React, { useState } from 'react'
import style from '../Styles/Home.module.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const[feet, setFeet] = useState(5)
  const[inches, setInches] = useState(0)
  const[weight, setWeight] = useState(40)
  const[bmi, setBmi] = useState(0)
  const[abourbmi, setAboutBmi] = useState()

  const f = parseInt(feet);
  const w = parseInt(weight);
  const inc = parseInt(inches);

  const navigate = useNavigate()

  const nextPage= ()=>{
    navigate("/signup")
  }

  const calBmi =()=>{
   const calHeight = (f*12 + inc) * 0.0254
   const result = w / (calHeight * calHeight)
   setBmi(result)
   if(bmi<=18.5){
    setAboutBmi('Your Under Weight')
   }else if(bmi >18.5 && bmi <= 24.5){
    setAboutBmi("you are Normal")
   }else{
    setAboutBmi('you are Over weight')
   }
  }

  return (
    <>
    <div className={style.container}>

      <div className={style.bmi}>
        <h1>BMI Calculator</h1>
        <div id={style.heightSection}>
          <h2>Height: {feet} ft </h2>
          <input
          type='range'
          min='4'
          max='7'
          value={feet}
          onChange={(e)=>setFeet(e.target.value)}
          />
          <h2>Inches: {inches} in</h2>
          <input 
          type='range'
          min='0'
          max='11'
          value={inches}
          onChange={(e)=>setInches(e.target.value)}
          />
        </div>

      <div id={style.weightSection}>
        <h2>Weight: {weight} Kg's</h2>
        <input 
        type='range'
        min='30'
        max='150'
        value={weight}
        onChange={(e)=>setWeight(e.target.value)}

        />

      </div>
      <Button onClick={calBmi} variant="contained">Check BMI</Button>
      <h2>BMI: {bmi} </h2>
      <p> Result: {abourbmi}</p>
      </div>



      <div className={style.nextPage}>
        <h2 className={style.nextPageContinue}>Continue to Application</h2>
        <Button onClick={nextPage} className={style.nextPageButton} variant="contained">Continue</Button>
        

      </div>
      
     
    </div>
    </>
  )
}

export default Home