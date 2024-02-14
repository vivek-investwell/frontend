import React, { useEffect, useState } from 'react'
import '../../media/css/home.css'
import { Link, json, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../shared/Navbar';
const icon = require("../../media/images/menu.png");
export default function Home() {
  const location = useLocation();
  console.log("eher " , location.state?.props);
  const username = location.state?.props;
  const [display , setDisplay] = useState(false);
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
      console.log("responsee" , response.data); 
      const dataString = JSON.stringify(response.data);
      // document.getElementById('showData').innerText = `${dataString}`;
      document.getElementById('showData').innerText = `${dataString}`;

    }
    
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  }
  const handleLogout = async()=>{
        const res =  await axios.post('http://localhost:8000/auth/logout',{withCredentials: true })
        console.log("log",res);
        if(res.data === "user has been logged out"){
          navigate("/");
        }
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
       <button className='logout' onClick={handleLogout}>Logout</button> 
    </div>
  )
}
