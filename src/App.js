import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginIndex from './uicollection/login/Index';
import SignUpIndex from './uicollection/signup/Index';
import HomeIndex from './uicollection/home/Index';
import PolicyDocs from './uicollection/PolicyDocs';
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element = {<LoginIndex/>}/>
      <Route path='/signUp' element = {<SignUpIndex/>}/>
      <Route path='/home' element={<HomeIndex/>}></Route>
      <Route path='/policy' element={<PolicyDocs/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
