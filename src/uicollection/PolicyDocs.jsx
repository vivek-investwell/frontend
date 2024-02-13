import React, { useEffect, useState } from 'react'
import '../media/css/policy.css'
import Navbar from './shared/Navbar';
const pdfRef  = require('../media/pdf/sample.pdf')
export default function PolicyDocs() {
    const openPdf=(pdf)=>{
        window.open(pdf , '_black');
    }
    function removeBeforeWord(str, word) {
      const index = str.indexOf(word);
      if (index !== -1) {
          return str.substring(index + word.length);
      }
      return str;
  }  
    const handlePdf = async()=>{
      const resp = await fetch('http://localhost:8000/auth/pdfLink');
      const json = await resp.json();
      const url = json[0];
    const str =  removeBeforeWord(url , 'public');
    console.log(str);
      window.open(str , '_black');
      // <a href = {Pdf} target = "_blank"></a>
    }
    // const handleParticularPdf = async(variable)=>{
    //   const resp = await fetch(`http://localhost:8000/auth/pdfLink?name=${variable}`);
    //   const json = await resp.json();
    //   const url = json[0];
    // const str =  removeBeforeWord(url , 'public');
    // console.log(str);
    //   window.open(str , '_black');
    // }
    const [data , setdata] = useState([]);
    useEffect(()=>{
      let func = async function(){
      console.log("helo");
      const resp = await fetch('http://localhost:8000/auth/getPDFlist');
      console.log("sad",resp);

      if(resp.ok){
        const json  =  await resp.json();
        setdata(json);
      }
      }
      func();
    },[]);
  return (
    <div className='policy'>
    <Navbar/>
        <h2 className='tableHeading'>Policy Docs</h2>
       <table className='policyTable'>
  <thead>
 
    <tr className='contentHeading'>
      <th className='tableData'>S.No</th>
      <th className='tableData'>Policy Name</th>
      <th className='tableData'>Action</th>
    </tr>
  </thead>
  <tbody className='tableBody'>
 
    {data && data.map((singleData, index) => (
                        <tr key={index}>
                            <td className='tableData'>{index + 1}</td>
                            <td className='tableData'>{singleData.name}</td>
                            <td className='tableData'>
                                {/* <button className='pdfbtn' onClick={() => openPdf(singleData.path)}>PDF</button> */}
                                <button className='pdfbtn' onClick={() => handlePdf()}>PDF</button>
                            </td>
                        </tr>
                    ))}

  </tbody>
</table>
    </div>
  )
}
