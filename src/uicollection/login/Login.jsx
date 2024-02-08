import React, { useState } from 'react'
import '../../media/css/login.css'
import { Link, useNavigate } from 'react-router-dom';
export default function LoginIndex({handleEmail , handlePassword , handleSubmit}) {
  
  
  return (
    <>
    <form onSubmit={handleSubmit} className='entryForms'>
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
