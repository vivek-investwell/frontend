import React, { useState } from 'react'
import axios from 'axios'
import '../../media/css/login.css'
import { Link, useNavigate } from 'react-router-dom';
export default function LoginIndex() {
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
      // const inputname = document.getElementById('name').value;
      // const inputemail = document.getElementById('email').value;
      // const inputpassword = document.getElementById('password').value;
      // console.log(inputemail);
      // console.log(number2)
      const resp = await axios.post('http://localhost:8000/auth/login', {
      email: EMAIL,
      password: PASS
      });
      console.log(resp.data[2]);
      // document.getElementById('texthere').innerText =`${resp.data.result}`
      if(resp.data==='Incorrect password' || resp.data==='User not found'){
        console.log(resp);
        document.getElementById('result').innerText=`${resp.data}`;
      }
      else{
        console.log(resp.data);
        console.log(resp.data[0].name);
        // localStorage.setItem("currentUser", JSON.stringify(resp.data[0].name));
        navigate("/home" , {state:{props:resp.data[0].name}});
      }
    }catch(e){
      console.error(e);
    }
  }
  return (
    <>
    <form onSubmit={submit} className='entryForms'>
    <label>Email</label>
    <input className='formInput' id='email' type='email' placeholder='example@gmail.com' onChange={handleEmail}></input>
    <label>Password</label>
    <input className='formInput' id='password' type='password' placeholder='Your Password' onChange={handlePassword}></input>
    <button className='loginBtn'>Login</button>
    <div className='newUser'>new user?<Link to={'/signUp'} className='signLink'>Sign In</Link></div>
    <div id='result'></div>
    </form>
    </>
  )
}
