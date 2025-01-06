
import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom'
import Create from '../Components/Create'
import Update from '../Components/Update'
import Delete from '../Components/Delete'
import Fetch from '../Components/Fetch'
import User from '../Components/User'
export default function Apps(){
    return (
        <>
        <Router>
        <div className='navbarUser'>
                <ul style={{
                    listStyle:'none'
                }}>
                    <li className="ops"><Link to="/Createuser">CreateUser</Link></li>
                    <li className="ops"><Link to="/Fetchuser">FetchUser</Link></li>
                    <li className="ops"><Link to="/Updateuser">UpdateUser</Link></li>
                    <li className="ops"><Link to="/Deleteuser">DeleteUser</Link></li>
                </ul>
            </div>


            <Routes>
                <Route path='/Createuser' element={<Create/>} />
                <Route path='/' element={<User/>} />
                <Route path='/Fetchuser' element={<Fetch/>} />
                <Route path='/Updateuser' element={<Update/>} />
                <Route path='/Deleteuser' element={<Delete/>} />
            </Routes>

        </Router>
        </>
    )
}