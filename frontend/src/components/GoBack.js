import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBack = () => {
  
  const history=useNavigate();
  const id = localStorage.getItem('id')
  const email = localStorage.getItem('email')
  const dorm = localStorage.getItem('dorm')

  const handleClick = () => {
    if (email === "admin@admin.com") {
      history("/home_staff", {state:{id: id, email: email}})
    } else {
      history("/home", {state:{id: id, email: email, dorm}})
    }
  }

  return(
    <button className='navButton' onClick = {handleClick}> Go back to the home page </button>
  )
}
export default GoBack;