import React from 'react';
import axios from 'axios';
import '../../media/css/signup.css'
import { Link, useNavigate } from 'react-router-dom';

export default function Signup({handleName , handleEmail , handlePassword , handleSubmit}) {
  const navigate = useNavigate();
  

  return (
    <form onSubmit={handleSubmit} className='signInForms'>
    <div className='formHeading'>SignUp</div>
      <label className='formLable'>Name</label>
      <input className='signInInput' id='name' placeholder='Your Name' onChange={handleName}></input>
      <label className='formLable'>Email</label>
      <input className='signInInput' id='email' type='email' placeholder='example@gmail.com' onChange={handleEmail}></input>
      <label className='formLable'>Password</label>
      <input className='signInInput' id='password' type='password'placeholder='Your Password' onChange={handlePassword}></input>
      <button type="submit" className='signInBtn'>submit</button>
      <div className='oldUser'>back to <Link to={'/'} className='signInLink'>Login</Link></div>

    <div id='signResult'></div>
    </form>
  )
}
