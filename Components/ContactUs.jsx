import React from 'react'
import Form from '../Components/Form'
import { useEffect,useState } from 'react'
function ContactUs() {
  const [val,setVal] = useState('');
  useEffect(()=>{
    return (()=>{
      console.log(val);
    })
  },[val])
  return (
    <Form></Form>
  )
}

export default ContactUs
