import React, { useEffect, useState } from 'react'
import style from '../Styles/Fitzz.module.css';

const Fitzz = () => {

  const[excercise, setExcercise] = useState([])

  const fetchData = async()=>{
    try{
      const response = await fetch('https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0',{
        method : 'GET',
        headers:{
          'x-rapidapi-key': '926650aa79msh1195ea25c7c79a0p1af9efjsnfa533169d163',
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
      })
      const data = await response.json()
      setExcercise(data)
      console.log(data);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData()
  },[])



  return (
   <>
   <div className={style.container}>
    <marquee>
       || Get Ready to fit || 
    </marquee>
      <div className={style.header}>
        <h2>Get in shape, because a sound mind lives in sound body</h2>
        <img src='https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg' alt='fitness img' className={style.image} width='600px'/>
      </div>
      <h2 className={style.workout}>Work Out</h2>


      <div className={style.grid}>
        {excercise.length>0?(
          excercise.map((item, index)=>(
            <div key={index} className={style.card}>
              <img src={item.gifUrl} alt="Exercise" />
              <h3>{item.name}</h3>
              <p>Target : {item.target}</p>
              <p>Equipment: {item.equipment}</p>
              </div> 
          ))
        ):(
          <p>Loading the data</p>
        )}
      </div>
   </div>
   </>
  )
}

export default Fitzz;
