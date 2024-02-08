import React from 'react';
import axios from 'axios';
import '../../media/css/signup.css'
import { useNavigate } from 'react-router-dom';
import '../../media/css/signup.css'
export default function Signup({handleName , handleEmail , handlePassword , handleSubmit}) {
  const navigate = useNavigate();
  

  return (
    <form onSubmit={handleSubmit} className='signInForms'>
      <label>Name</label>
      <input className='signInInput' id='name' placeholder='Your Name' onChange={handleName}></input>
      <label>Email</label>
      <input className='signInInput' id='email' type='email' placeholder='example@gmail.com' onChange={handleEmail}></input>
      <label>Password</label>
      <input className='signInInput' id='password' type='password'placeholder='Your Password' onChange={handlePassword}></input>
      <button type="submit" className='signInBtn'>SignUP</button>
    <div id='signResult'></div>
    </form>
  )
}
