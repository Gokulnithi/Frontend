import React from 'react'
import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className='nav'>
    <ol>
    <div className="fir">
    <li><Link to="/"><img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png" alt="" /></Link></li>
    </div>
    <div className="sec">
    <li><Link  to="/">Home</Link></li>
      <li><Link  to="/About">About</Link></li>
      <li><Link to="/ContactUs">ContactUs</Link></li>
    </div>
    </ol>
  </nav>
  )
}

export default Nav
