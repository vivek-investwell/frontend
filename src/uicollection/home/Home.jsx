import React, { useEffect, useState } from 'react'
import '../../media/css/home.css'
import { Link, json, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../shared/Navbar';
const icon = require("../../media/images/menu.png");
// const {Navbar} = require('../shared/Navbar')
export default function Home() {
  const location = useLocation();
  // const currentUser =  localStorage.getItem("currentUser");
  console.log("eher " , location.state?.props);
  const username = location.state?.props;
  const [display , setDisplay] = useState(false);
  // const [show , setshow] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
    if(username && username.length>1){
      setDisplay(true);
      setTimeout(()=>{
       setDisplay(false);
      },3000)
     }
  },[username])

  console.log("user" , username)
  const handleUser = ()=>{
    axios.get('http://localhost:8000/auth/checkuser' ,{withCredentials: true })
  .then(response => {
    const data = response.data[0];
    const dataString = JSON.stringify(data);
    if(response.data === "user logged out"){
    document.getElementById('showData').innerText = `${response.data}`;
      setTimeout(()=>{
        navigate("/");
      },2000)
      // return;
    }else{
      console.log("data" , data); 
      console.log("response" , response.data); 
      document.getElementById('showData').innerText = `${dataString}`;
    }
    
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  }
  return (
    <div className='home'>
     
     <Navbar/>
     <div className = 'right'>
        <div className='heading'> hi my name is {username}</div>
        <button className = "showBtn" onClick={handleUser}>check user</button>
        <div id='showData'></div>
     </div>
     {display && <div id='homeToast'>successfully logged In</div>}
      {/* <button className='logout'>Logout</button> */}
    </div>
  )
}
