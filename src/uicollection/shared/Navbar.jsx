import React, { useState } from 'react'
import '../../media/css/navbar.css';
import { Link } from 'react-router-dom';
const icon = require("../../media/images/menu.png");
export default function Navbar() {
  const [show , setshow] = useState(false);

  return (
    <>
    <span className='navIcon'><img src = {icon} onClick={()=>setshow(!show)}/></span>

  { show &&  <div className='navbar'>
        <div className='topNavContent'><Link to = "/home" className='navLink'>Home</Link></div>
        <div className='navContent'><Link to = "#" className='navLink'>Profile</Link></div>
        <div className='navContent'><Link to = "/policy" className='navLink'>Policy Docs</Link></div>
        <div className='navContent'><Link to = "/policy" className='navLink'>Attendance</Link></div>

      </div>}
      </>
  )
}
