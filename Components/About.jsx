import React from 'react'
import { useState,useMemo } from 'react'
function handleDouble(v){
  return v*2;
}
const About = () => {
  const [val,setVal] = useState(0);
  const [bool,setBool] = useState(false);
  let double = handleDouble(val);
  return (
    <div className='hello'>
      <div>
        <input type="number" onChange={(e)=>{setVal(e.target.value)}} /> 
        <button onClick={()=>{setBool(!bool)}}>Change</button>
        <h1 style={{
          backgroundColor:bool?'black':'white',
          color:bool?'white':'black',
          width:'400px',
          height:'50px'
        }}>{double}</h1>
      </div>
      <dl>
        <dt>1.Fruits</dt>
        <dd>
          <ol type='A'>
            <li>Banana</li>
            <li>Mango</li>
            <li>Apple</li>
          </ol>
        </dd>
      </dl>
      <dl> 
        <dt>2.Birds</dt>
        <dd>
          <ol type='i'>
            <li>Crow</li>
            <li>Sparrow</li>
            <li>Peacock</li>
          </ol>
        </dd>
      </dl>
      <dl>
        <dt>3.Vegtables</dt>
        <dd>
          <ol type='1'>
            <li>Beetroot</li>
            <li>Carrot</li>
            <li>Brinjal</li>
          </ol>
        </dd>
      </dl>
    </div>
  )
}

export default About
