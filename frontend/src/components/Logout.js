import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  
  const history=useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    history("/")
  }

  return (
    <div className='LoginPage'>
      <h1>Logout</h1>
      <button onClick={handleLogout}> Log Out</button>
    </div>
  )
}
export default Login;