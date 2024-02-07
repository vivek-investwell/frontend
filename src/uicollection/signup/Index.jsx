import React, { useState } from 'react'
import Signup from './Signup'
import axios from 'axios'
import Signup2 from './Signup2'
import { useNavigate ,Link} from 'react-router-dom';

export default function SignUpIndex() {
  const [EMAIL , setEmail] = useState("");
  const [PASS , setPassword] = useState("");
  const [NAME , setName] = useState("");
  const navigate = useNavigate();
  const handleEmail = (e)=>{
          setEmail(`${e.target.value}`);
  }
  const handlePassword = (e)=>{
    setPassword(`${e.target.value}`); 
}
const handleName = (e)=>{
  setName(`${e.target.value}`);
}
const signUpSubmit = async(event)=>{
  try{
    event.preventDefault();
  
    const resp = await axios.post('http://localhost:8000/auth/sign', {
    name:NAME,
    email: EMAIL,
    password: PASS
    });
    console.log(resp.data[2]);
    
    if(resp.data.controllerResponse==='user already exist' || resp.data.controllerResponse==='password too small! minimum 6 character allowed' || resp.data.controllerResponse==='Not a valid Password'){
      const element = document.getElementById('signToast');
      element.innerText=`${resp.data.controllerResponse}`;
      element.style.display='block';
      setTimeout(() => {
      element.style.display='none';
      }, 3000);
    }else{
      console.log("navigate main")
      const element = document.getElementById('signToast');
      element.innerText=`${resp.data.controllerResponse}`;
      element.style.display='block';
      setTimeout(() => {
      element.style.display='none';
      navigate("/");
      }, 3000);
      console.log(resp);
    }
  }catch(e){
    console.error(e);
  }
}
  return (
    <div className='signIn'>
  
    <Signup2 
    handleName={handleName}
    handleEmail={handleEmail}
    handlePassword={handlePassword}
    handleSubmit={signUpSubmit}/>
    <Link to={{pathname:"/home", state:{props:''}}}> home</Link>
    <div id='signToast'>asd</div>
    </div>
  )
}
