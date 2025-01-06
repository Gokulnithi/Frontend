import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Create = () => {
    const navigate = useNavigate()
    const [data,setdata] = useState({
        n:'',
        a:''
    })
    const handleSend = function(e){
        console.log('clicked');
        e.preventDefault();
        axios.post('https://backend-t6ia.onrender.com/api/user/create',{
            name:data.n,
            age:data.a
        }).then(()=>{
            alert('success')
            navigate('/')
        }).catch((res)=>{
            console.log(res);
        })
    }
  return (
    <div className='cont'>
      <form action="">
        <input type="text"  onChange={(e)=>{setdata({
            n:e.target.value,
            a:data.a?data.a:''
        })}} placeholder='Name'/>
        <input type="number" onChange={(e)=>{setdata({
            n:data.n?data.n:'',
            a:e.target.value
        })}} placeholder='Age'/>
        <button onClick={(e)=>{handleSend(e)}}>Submit</button>
      </form>
    </div>
  )
}

export default Create
