import React, { useEffect, useState } from 'react'
// import LoginIndex from './Login'
import LoginIndex from './Login'
import '../../media/css/login.css'
import axios from 'axios'

import { useNavigate } from 'react-router-dom';

export default function Index() {
  const [EMAIL , setEmail] = useState("");
  const [PASS , setPassword] = useState("");

  const navigate = useNavigate();
  const handleEmail = (e)=>{
          setEmail(`${e.target.value}`);
  }
  const handlePassword = (e)=>{
    setPassword(`${e.target.value}`);
    
}
const submit = async(event)=>{
  try{
    event.preventDefault();
  
    const resp = await axios.post('http://localhost:8000/auth/login', {
    email: EMAIL,
    password: PASS
    },{withCredentials:true});
    console.log("resp", resp);
    
    // if(resp.data==='Incorrect password' || resp.data==='user not found'){
    //   console.log(resp);
    //   const element = document.getElementById('loginToast');
    //   element.style.display='block';
    //   element.innerText=`${resp.data}`;
    //   setTimeout(()=>{
    //   element.style.display='none';
    //   } , 3000)
    // }
    if(resp.data.success==='false'){
      console.log(resp);
      const element = document.getElementById('loginToast');
      element.style.display='block';
      element.innerText=`${resp.data.message}`;
      setTimeout(()=>{
      element.style.display='none';
      } , 3000)
    }
    else{
      console.log(resp.data);
      console.log(resp.data[0].name);
      navigate("/home" , {state:{props:resp.data[0].name}});
    }
  }catch(e){
    console.error(e);
  }
}
//  useEffect(()=>{
//   document.getElementById('loginToast').innerText=`${resp.data}`;
//  },[resp.data]);
  return (
    <div className='logIn'>
    <LoginIndex
    handleEmail={handleEmail}
      handlePassword={handlePassword}
      handleSubmit={submit}
    />
    <div id='loginToast'></div>
    </div>
  )
}
