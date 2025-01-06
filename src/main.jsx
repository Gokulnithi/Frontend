import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
//import Gokul from './Gokul'
import Apps from './Apps'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Apps></Apps>
    
  </StrictMode>,
)
