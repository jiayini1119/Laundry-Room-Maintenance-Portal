import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const AccessReportPage = () => {

  const token = localStorage.getItem('token');
  
  const history=useNavigate();

  const handleClick = async () => {
    // create report
    const config = {
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };
    const { data } = await axios.post(
        "http://localhost:4000/api/report",
        {},
        config
    );

    localStorage.setItem('chatData', JSON.stringify(data));
    
    // res -> history ... 

    // call history
    history("/home/report")
  }

  return(
    <button className='navButton' onClick = {handleClick}> Access Report Page </button>
  )
}
export default AccessReportPage;