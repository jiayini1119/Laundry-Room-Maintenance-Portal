import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import "./LoginStyle.css"

const Logout = () => {
  
  const history=useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    history("/")
  }

  const [selected, setSelected] = useState();
  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
  };

  return(
    <button className='logoutButton' onClick = {handleLogout}> Log Out </button>
  )
}
export default Logout;