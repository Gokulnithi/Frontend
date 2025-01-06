import React from 'react'
import { useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
const User = () => {
    const [user,setuser] = useState([])
    const [update,setupdate] = useState(false)
    const [data,setData] = useState({
        name:'',
        age:''
    })
    const [editing,setEditing] = useState(null);
    const nav = useNavigate()
    useEffect(()=>{
        axios.get('https://backend-t6ia.onrender.com/api/user/fetch').then((data)=>{
            setuser(data.data);
        }).catch((res)=>{
            console.log(res.config);
        })
    },[])
    function handleUpdateonPage(val,exm){
        setupdate(!update)
        setEditing(exm)
        if(update){
            axios.put(`https://backend-t6ia.onrender.com/api/user/update/${val}`,{
                name:data.name,
                age:data.age
            }).then((res)=>{
                setuser(res.data);
            })
            setEditing(null)
        }
    }
    console.log(editing);
    function handleDelete(val){
        axios.delete(`https://backend-t6ia.onrender.com/api/user/delete/${val}`).then((res)=>{
            alert('deletion Success')
            setuser(res.data);
        })
    }
  return (
    <div className='container'>
        <table >
            <tr >
                <th>Name</th>
                <th>Age</th>
                <th>Actions</th>
            </tr>
            {user.map((users,index)=>{
                return(
                    <tr key={index}>
                        {editing == users.name ?(<td><input type="text" placeholder={users.name} onChange={(e)=>{
                            setData({
                                name:e.target.value === ""?users.name:e.target.value,
                                age: data.age === ""?users.age:data.age
                            })
                        }} /></td>):<td>{users.name}</td>}
                        {editing == users.name ?(<td><input type="text" placeholder={users.age} onChange={(e)=>{
                            setData({
                                name:data.name === ""? users.name:data.name,
                                age:e.target.value === ""? users.age:e.target.value
                            })
                        }} /></td>):<td>{users.age}</td>}
                        <td>
                            <div className="btns">
                           {editing == users.name? ( <button className='green' onClick={()=>{handleUpdateonPage(users._id,users.name)}}>Save</button>): <button className='green' onClick={()=>{handleUpdateonPage(users._id,users.name)}}>Update</button>} 
                        <button className='red' onClick={()=>{handleDelete(users._id)}}>Delete</button>
                            </div>
                        </td>
                    </tr>
                )
            })}
        </table>
    </div>
  )
}

export default User
