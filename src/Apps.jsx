
import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom'
import Create from '../Components/Create'
import Delete from '../Components/Delete'
import Fetch from '../Components/Fetch'
import User from '../Components/User'
import '../src/Apps.css'

export default function Apps(){
    return (
        <>
        <Router>


            <Routes>
                <Route path='/Createuser' element={<Create/>} />
                <Route path='/' element={<User/>} />
            </Routes>


            <div className='navbarUser'>
                <ul style={{
                    listStyle:'none'
                }}>
                    <li className="ops"><Link to="/Createuser">CreateUser</Link></li>
                </ul>
            </div>
        </Router>
        </>
    )
}