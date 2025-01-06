import './Props.css'
import React from 'react';
import { useState , useEffect} from 'react';
function Props(){
    const [objf,setobj] = useState({
        fname:'',
        lname:''
    })
    const [val,setval] = useState(objf.fname.concat(objf.lname))
    useEffect(()=>{
        console.log('A name Updated');
    },[val])
    function handleSave(){
        let res = objf.fname.concat(objf.lname)
        setval(res);
    }
    return (
        <div className='hello'>
        <h1 id='h1'>Hello <span>{val}</span> bro, Good to see You! </h1>
        <div className="inputs">
        <input name='name' type="text" placeholder='FirstName' onChange={(event)=>{
            setobj({
                fname:event.target.value,
                lname:objf.lname?objf.lname:'',
            });
        }}/>
        <input name='name2' type="text" placeholder='LastName' onChange={(event)=>{
            setobj({
                fname:objf.fname? objf.fname :'',
                lname:event.target.value,
            });
        }}/>
        </div>
        <button onClick={handleSave}> Submit </button>
        </div>
    )
}   

export default Props;