import React from 'react';
import { useNavigate} from 'react-router-dom';
import "./LoginStyle.css"

const Logout = () => {
  
  const history=useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    history("/")
  }

  return(
    <button className='navButton' onClick = {handleLogout}> Log Out </button>
  )
}
export default Logout;