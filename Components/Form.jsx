import React from 'react'
import './Form.css'
function Form() {
  return (
    <div className="form">
    <form action="#">
        <fieldset>
        <legend>Slam Book</legend>
        <div className="FB">
        <div className="a1">
        <label htmlFor="name">Name</label>
        <input type="text" name='name' typeof='text' />
        </div>
        <div className="a1">
        <label htmlFor="phnoe">Nickname</label>
        <input type="text" name='phone' typeof='text'/>
        </div>
        <div className="a1">
        <label htmlFor="phnoe">Phone No</label>
        <input type="number" name='phone' />
        </div>
        <div className="a1">
            <label htmlFor="School">School</label>
            <select name="School" id="schools">
                <option value="kec">Kec</option>
                <option value="vgp">Vgp</option>
                <option value="pjp">Pjp</option>
            </select>
        </div>
        </div>
        <div className="a1">
        <label htmlFor="programme">Address</label>
        <textarea className='text' type="text" name='programme'/>
        </div>
        <div className="a1">
        <label htmlFor="programme">Memories</label>
        <textarea className='text' type="text" name='programme'/>
        </div>
        <div className="a2 val">
            <label htmlFor="">Gender</label>
            <label htmlFor="male"><input type="radio" id='male' value="male"  name='gender'/> Male</label>  
            <label htmlFor="female"><input type="radio" id='female' value="female" name='gender'/> Female</label>  
        </div>
        <div className='sub'>
            <button>Submit</button>
        </div>
        </fieldset>
    </form>
  </div>
  )
}

export default Form
