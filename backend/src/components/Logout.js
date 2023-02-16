import React from "react";
import { useNavigate, Link } from 'react-router-dom';

const Logout = () => {
  const history=useNavigate();
  async function handleClick(e) {
    try{
      history("/");
    } catch(err) {
      console.log("Cannot logout");
    }
  }
  return(
    <button onClick = {handleClick}> Log Out </button>
  )
}

export default Logout;