import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const User = () => {
    const [user,setuser] = useState([])
    useEffect(()=>{
        axios.get('https://backend-t6ia.onrender.com/api/user/fetch').then((data)=>{
            setuser(data.data);
        })
    },[])
  return (
    <div>
        
        <Link to='/Createuser'>Create A User</Link>

        <h1>User</h1>
        <table >
            <tr >
                <th>Name</th>
                <th>Age</th>
                <th>Actions</th>
            </tr>
            {user.map((users,index)=>{
                return(
                    <tr key={index}>
                        <td>{users.name}</td>
                        <td>{users.age}</td>
                        <td><Link to='/Updateuser'>Update</Link> 
                        <Link to='/Deleteuser'><button>Delete</button></Link>
                        </td>
                    </tr>
                )
            })}
        </table>
    </div>
  )
}

export default User
