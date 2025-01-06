import { useState } from 'react'
import Form from '../Components/Form'
import Nav from '../Components/Nav'
import Food from '../Components/Food'
import './App.css'
import Props from '../Components/Props'
import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom'
import About from '../Components/About'
import Footer from '../Components/Footer'
import ContactUs from '../Components/ContactUs'
import { createContext } from 'react'
export let ValueContext = createContext();
function Gokul() {
  const [val,setval] = useState(true);
  return (
    <>
    <Router>
      <Nav></Nav>
    <Routes>
      <Route path='/About' element={<About/>} />
      <Route path='/ContactUs' element={<ContactUs/>} />
    </Routes>
    <Routes>
    <Route path='/' element={<ValueContext.Provider value={val}><Food></Food></ValueContext.Provider>} />
    </Routes>
    </Router>
    <button onClick={()=>{setval(!val)}}>Click Here to change color</button>
    <Footer></Footer>
    </>
  )
}

export default Gokul
