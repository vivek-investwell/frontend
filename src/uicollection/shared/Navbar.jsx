import React, { useState } from 'react'
import '../../media/css/navbar.css';
import { Link } from 'react-router-dom';
const icon = require("../../media/image/menubar.png");
const profile = require("../../media/image/ideas.png");
const agree = require("../../media/image/agreement.png");

export default function Navbar() {
  const [show , setshow] = useState(false);

  return (
    <>
    <span className='navIcon'><img src = {icon} onClick={()=>setshow(!show) } className='navIconImg'/></span>

  { show &&  <div className='navbar'>
  <div className='topNav'></div>
        <div className='topNavContent'><Link to = "/home" className='navLink'>Home</Link><img src = {profile} className='navImg'/></div>
        <div className='navContent'><Link to = "#" className='navLink'>Profile</Link><img src = {profile} className='navImg'/></div>
        <div className='navContent'><Link to = "/policy" className='navLink'>Policy Docs</Link><img src = {profile} className='navImg'/></div>
        <div className='navContent'><Link to = "/policy" className='navLink'>Attendance</Link><img src = {profile} className='navImg'/></div>

      </div>}
      </>
  )
}
