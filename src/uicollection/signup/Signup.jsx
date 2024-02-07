// import React from 'react'
// import axios from 'axios'
// export default function Signup() {

//   const submit = async(event)=>{
//     try{
//       event.preventDefault();
//       console.log("inside")
//       const inputname = document.getElementById('name').value;
//       const inputemail = document.getElementById('email').value;
//       const inputpassword = document.getElementById('password').value;
//       console.log(inputname);
//       const resp = await axios.post('http://localhost:8000/beckend/auth/sign', {
//       name: inputname,
//       email: inputemail,
//       password: inputpassword
//       });

//       console.log(resp);
      
//     }catch(e){
//       console.error(e);
//     }
//   }
//   return (
//     <form action= "submit" >

//     <label>name</label>
//     <input id='name'></input>
//     <label>Email</label>
//     <input id='email'></input>
//     <label>Password</label>
//     <input id='password'></input>
//     <button onClick={()=>submit()}>SignUP</button>
//     </form>
//   )
// }
import React from 'react';
import axios from 'axios';
import '../../media/css/signup.css'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const submit = async (event) => {
    try {
      event.preventDefault();
      console.log("inside");
      // const inputid = document.getElementById('id').value;
      const inputname = document.getElementById('name').value;
      const inputemail = document.getElementById('email').value;
      const inputpassword = document.getElementById('password').value;
      console.log(inputname);

      const resp = await axios.post('http://localhost:8000/auth/sign', {
        name: inputname,
        email: inputemail,
        password: inputpassword
      });
      console.log(resp.data.controllerResponse);

      // if(resp.data==='user already exist'){
      //   document.getElementById('signResult').innerText=`${resp.data}`;
      // }else{
      //   navigate("/");
      //   console.log(resp);
      // }
      if(resp.data.controllerResponse==='user already exist' || resp.data.controllerResponse==='password too small! minimum 6 character allowed'){
        document.getElementById('signResult').innerText=`${resp.data.controllerResponse}`;
      }else{
        console.log("navigate main")
        navigate("/");
        console.log(resp);
      }

    } catch (e) {
      console.error(e);
    }
  }

  return (
    <form onSubmit={submit} className='signInForms'>
      <label>Name</label>
      <input className='signInInput' id='name' placeholder='Your Name'></input>
      <label>Email</label>
      <input className='signInInput' id='email' type='email' placeholder='example@gmail.com'></input>
      <label>Password</label>
      <input className='signInInput' id='password' type='password'placeholder='Your Password'></input>
      <button type="submit" className='signInBtn'>SignUP</button>
    <div id='signResult'></div>
    </form>
  )
}
