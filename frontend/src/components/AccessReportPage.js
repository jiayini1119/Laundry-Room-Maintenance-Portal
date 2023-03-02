import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccessReportPage = () => {
  
  const history=useNavigate();

  const handleClick = () => {
    history("/home/report")
  }

  return(
    <button className='reportButton' onClick = {handleClick}> Access Report Page </button>
  )
}
export default AccessReportPage;