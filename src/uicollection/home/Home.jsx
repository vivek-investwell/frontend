import React, { useEffect, useState } from 'react'
import '../../media/css/home.css'
import { useLocation } from 'react-router-dom';
export default function Home() {
  const location = useLocation();
  // const currentUser =  localStorage.getItem("currentUser");
  console.log("eher " , location.state?.props);
  const username = location.state?.props;
  const [display , setDisplay] = useState(false);
  
  useEffect(()=>{
    if(username && username.length>1){
      setDisplay(true);
      setTimeout(()=>{
       setDisplay(false);
      },3000)
     }
  },[username])

  console.log("user" , username)
  return (
    <div className='home'>
    <div className='heading'> hi my name is {username}</div>
    {display && <div id='homeToast'>successfully logged In</div>}
    </div>
  )
}
