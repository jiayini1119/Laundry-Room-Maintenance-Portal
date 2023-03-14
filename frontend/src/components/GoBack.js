import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBack = () => {
  
  const history=useNavigate();
  const id = localStorage.getItem('id')
  const email = localStorage.getItem('email')

  const handleClick = () => {
    history("/home", {state:{id: id, email: email}})
  }

  return(
    <button className='navButton' onClick = {handleClick}> Go back to the home page </button>
  )
}
export default GoBack;